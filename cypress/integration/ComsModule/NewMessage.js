/*
 * @Author: sachin 
 * @Date: 2021-11-11 11:28:31 
 * @Last Modified by:   sachin 
 * @Last Modified time: 2021-11-11 11:28:31 
 */
const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
const testname = `testname${id}`
/// <reference types="cypress" />
describe('Testing New Message functionality', function () {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('Comsdata/NewMsg').as('Orderdata')
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })
    })
    it('Sending New Message to user from admin', function () {

        //Fetching the data from Fixture files
        cy.login(this.data.Admin, this.data.password)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')
        cy.task('log', 'Homepage is visible')

        cy.xpath(Cypress.env('CommunicationMenu')).click()
        cy.task('log', 'Communication Menu Expanded')

        cy.xpath(Cypress.env('CommNewMsgSubMenu')).click()
        cy.task('log', 'Clicked NewMsg Submenu')

        cy.get(Cypress.env('CommNewMessageBtn')).click()
        cy.task('log', 'Clicked NewMsg button')

        if (this.Orderdata.WantToSelectStartDate.toUpperCase() == 'YES') {
            cy.get(Cypress.env('CommNewMesgStartDateBtn')).click()
            cy.get(Cypress.env('CommNewMesgStartDatePopup')).should('be.visible')
            cy.get(Cypress.env('CommNewMesgStartDate')).invoke('removeAttr', 'readonly').clear()
                .type(this.Orderdata.StartDate)
            cy.task('log', 'Selected start date for message')
        }
        cy.get(Cypress.env('CommNewMesgStartDateBtn')).click()


        if (this.Orderdata.WantToSelectExpiryDate.toUpperCase() == 'YES') {
            cy.get(Cypress.env('CommNewMesgExpiryDateBtn')).click({ force: true })
            cy.get(Cypress.env('CommNewMesgExpiryDatePopup')).should('be.visible')
            cy.get(Cypress.env('CommNewMesgExpiryDate')).invoke('removeAttr', 'readonly').clear()
                .type(this.Orderdata.ExpiryDate)
            cy.get(Cypress.env('CommNewMesgExpiryDateBtn')).click()
            cy.task('log', 'Selected Expiry date for message')
        }



        cy.get(Cypress.env('CommNewMesgTitleField')).type(testname)
        cy.task('log', 'Entered Message Title text')

        cy.get(Cypress.env('CommNewMesgTxtField')).type(testname)
        cy.task('log', 'Entered Message text')

        cy.get(Cypress.env('CommNewMesgFsrSelectDrpDwn')).click()

        cy.task('log', 'DropDown opened for select FSR')
        cy.get(Cypress.env('CommNewMesgFsrSelectDrpDwn')).click().type(this.Orderdata.SendToReceipient)
        cy.wait(5000)
        // cy.xpath("//EM[text()='Rashid']").siblings('input[type="checkbox"]')
        // cy.xpath("//EM[text()='Rashid'][1]/preceding-sibling::input").first().click()
        // cy.wait(4000)

        cy.get(Cypress.env('CommNewMesgFsrSelectDrpDwn')).type('{downarrow}')
        cy.get(Cypress.env('CommNewMesgFsrCheckbox')).click()
        cy.task('log', 'FSR is selected')
        cy.wait(5000)
        cy.get(Cypress.env('CommNewMesgSendMsgBtn')).click()
        cy.task('log', 'Clicked send message button')

        cy.xpath(Cypress.env('CommNewMesgSentCnfrm')).click()
        cy.task('log', 'Okay button clicked for info. message')
        cy.wait(4000)

        //checking in admin outbox

        cy.xpath(Cypress.env('CommMsgStatusSubmenu')).click()
        cy.task('log', 'Clicked Communication status submenu')
        cy.wait(5000)

        let msgxpath2 = 'td:contains("test")'

        let newmsgxpath2 = msgxpath2.replace('test', testname).replace('\u00A0', '').trim();
        // let msg =newmsgxpath.length

        cy.get('body').then($body => {
            if ($body.find(newmsgxpath2).length > 0) {
                // if(res > 0){
                cy.log('Message is visible on page1')
            }
            else {
                cy.log('Message is not visible on page1')
                let pagenoxpath = "//A[text()='2']"
                // let newpagexpath = pagenoxpath.replace('1', i).replace('\u00A0', '').trim();
                cy.get('[colspan="8"] > table > tbody > tr > :nth-child(2) > a').click()
                cy.log('So Clicking on page 2')
                cy.wait(10000)
            }

        })
        cy.wait(5000)

        cy.get(Cypress.env('CommNewMesgSentOutboxTable')).contains('td', testname).should('be.visible')
        cy.task('log', 'Verified that message is in outbox')


    })


    it('Verifying that user received the message', function () {
        //Fetching the data from Fixture files
        cy.login(this.data.email1, this.data.password1)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')
        cy.task('log', 'Homepage is visible')

        cy.xpath(Cypress.env('CommunicationMenu')).click()
        cy.task('log', 'Communication Menu Expanded')

        cy.xpath(Cypress.env('CommMsgStatusSubmenu')).click()
        cy.task('log', 'Clicked Communication status submenu')

        cy.xpath(Cypress.env('CommMsgStatusInboxEle')).click()
        cy.task('log', 'Navigate to inbox')
        cy.wait(5000)

        let msgxpath2 = 'td:contains("test")'

        let newmsgxpath2 = msgxpath2.replace('test', testname).replace('\u00A0', '').trim();
        // let msg =newmsgxpath.length

        cy.get('body').then($body => {
            if ($body.find(newmsgxpath2).length > 0) {
                // if(res > 0){
                cy.log('Message is visible on page1')
            }
            else {
                cy.log('Message is not visible on page1')
                let pagenoxpath = "//A[text()='2']"
                // let newpagexpath = pagenoxpath.replace('1', i).replace('\u00A0', '').trim();
                cy.get('[colspan="4"] > table > tbody > tr > :nth-child(2) > a').click()
                cy.log('So Clicking on page 2')
                cy.wait(10000)
            }

        })

        cy.get(Cypress.env('CommNewMesgReceivedInboxTable')).contains('td', testname).should('be.visible')
        cy.task('log', 'Verified that admin message received in the user inbox')

    })
})
/*
 * @Author: sachin 
 * @Date: 2021-11-11 11:28:23 
 * @Last Modified by:   sachin 
 * @Last Modified time: 2021-11-11 11:28:23 
 */
const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
const testname = `TestPushNotification${id}`
/// <reference types="cypress" />
describe('Creating PushNotification', function(){
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('Comsdata/Push').as('Orderdata')
        cy.on('uncaught:exception', (err, runnable) => {
        
            return false})
    })
    it('Sending push Notificaion to user', function() {

        //Fetching the data from Fixture files
        cy.login(this.data.Admin, this.data.password)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')   
        cy.task('log', 'Homepage is visible')

        cy.xpath(Cypress.env('CommunicationMenu')).click()
        cy.task('log','Communication Menu Expanded')

        cy.xpath(Cypress.env('CommSendPushSubMenu')).click()
        cy.task('log','Clicked Send PushNotification Submenu')


        cy.get(Cypress.env('CommSendPushTitletext')).type(testname)
        cy.task('log','Entered PushNotification Title text')

        cy.get(Cypress.env('CommSendPushDesription')).type(testname)
        cy.task('log','Entered PushNotification Description')
       
        cy.get(Cypress.env('CommSendPushRecipientType')).click()
        cy.task('log','Recepient type DropDown Opened')

        cy.xpath(Cypress.env('CommSendPushSpecificuser')).should('be.visible')
        cy.xpath(Cypress.env('CommSendPushAlluser')).should('be.visible')

        
        if (this.Orderdata.RecipientType.toUpperCase()=='SPECIFIC USERS'){
        
        cy.xpath(Cypress.env('CommSendPushSpecificuser')).click()
        cy.task('log','Specific user selected in receipient type')
        }
        if (this.Orderdata.RecipientType.toUpperCase()=='ALL USERS'){
        cy.xpath(Cypress.env('CommSendPushAlluser')).click()
        cy.task('log','All user selected in receipient type')
        }
        cy.get(Cypress.env('CommSendPushSendto')).click()
        cy.task('log','DropDown opened for select FSR')
        cy.get(Cypress.env('CommSendPushSendto')).click().type(this.Orderdata.SendToReceipient)
        cy.get(Cypress.env('CommSendPushSendto')).type('{downarrow}')
        cy.get(Cypress.env('CommNewMesgFsrCheckbox')).click()
        cy.task('log','FSR is selected')

        cy.get(Cypress.env('CommSendPushSaveBtn')).click()
        cy.task('log','Clicked Save button')

    })

    it('Verify Push notification from logs', function() {

        cy.login(this.data.Admin, this.data.password)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')   
        cy.task('log', 'Homepage is visible')

        cy.xpath(Cypress.env('CommLogsMenu')).click()
        cy.task('log','logs Menu Expanded')

        cy.xpath(Cypress.env('CommLogsPushNotifications')).click()
        cy.task('log','Clicked Push Notification Reports Submenu')
       
        cy.get(Cypress.env('CommLogsOrgfilter')).click()
        cy.get(Cypress.env('CommLogsOrgfilter')).type(this.Orderdata.SearchByOrg)
        cy.wait(4000)
        cy.get(Cypress.env('CommLogsOrgfilter')).type('{downarrow}{enter}')
        cy.wait(4000)
        cy.task('log','Organization selected')
        
        cy.get(Cypress.env('CommLogsFSRfilter')).click()
        cy.xpath(Cypress.env('CommLogsFSRfilterCheckbox')).click()

        cy.get(Cypress.env('CommLogsFSRfilter')).type(this.Orderdata.SearchByFSR)
        cy.wait(4000)
        cy.get(Cypress.env('CommLogsFSRfilter')).type('{downarrow}')
        cy.wait(4000)
        cy.get(Cypress.env('CommLogsFSRSelectCheckbox')).click()
        cy.wait(5000)
        cy.task('log','Organization FSR selected')

        cy.get(Cypress.env('CommLogsFSRSearchBtn')).click()
        cy.task('log','Search Button Clicked')

        cy.get(Cypress.env('PushNotificationMessageTable')).contains('td', testname).should('be.visible')
        cy.task('log', 'Verified push notification from logs')
        


    })

    
})
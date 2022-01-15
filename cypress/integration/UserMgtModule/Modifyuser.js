/// <reference types="cypress" />
describe('Testing Modify User functionality', function () {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('UserMgt/modifyuser').as('Userdata')
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })
    })
    it('Modify existing user and verify Updation', function () {

        //Fetching the data from Fixture files
        cy.login(this.data.Admin, this.data.password)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')
        cy.task('log', 'Homepage is visible')

        cy.xpath(Cypress.env('UserMgtModuleMenu')).click()
        cy.task('log', 'UserManagement Menu Expanded')

        cy.xpath(Cypress.env('ManageUserSubmenu')).click()
        cy.task('log', 'Clicked Manage User Submenu')
        cy.wait(5000)

        cy.get(Cypress.env('ManageUserSelectUserName')).type(this.Userdata.UserName).type('{downarrow}{enter}')
        cy.task('log', 'Entered Username in Username field')

        cy.wait(7000)

        cy.get(Cypress.env('ManageUserModifyBtn')).click()
        cy.task('log', 'Clicked on modify Button')
        cy.wait(5000)

        
        function random_value(Emails) {

            return Emails[Math.floor(Math.random() * Emails.length)];

        }
  
        const Emails = ['sachin1@mailinator.com','sachin2@mailinator.com','Sachin3@mailinator.com','sachin4@mailinator.com','sachin5@mailinator.com','sachin6@mailinator.com'];
        let Email= random_value(Emails)

        cy.get(Cypress.env('ManageUserEmailfield')).clear().type(Email)
        cy.task('log', 'Entered new Email in Email field')

        cy.xpath(Cypress.env('ManageUserUpdateBtn')).click()
        cy.task('log', 'Clicked on update Button')
        cy.wait(4000)

        cy.xpath(Cypress.env('ManageUserUpdateTxtVerify')).should('be.visible')
        cy.task('log', 'User updated successfully message verified on pop-up')

        cy.xpath(Cypress.env('ManageUserCnfrmOkBtn')).click()
        cy.task('log', 'Clicked on okay Button on pop up')

        //verify updation

        cy.wait(4000)

        cy.get(Cypress.env('ManageUserSelectUserName')).type(this.Userdata.UserName).type('{downarrow}{enter}')
        cy.task('log', 'Selected username in Username dropdown')
        cy.wait(4000)

        cy.get(Cypress.env('ManageUserEmailfield')).should('have.value',Email)
        cy.task('log', 'Verified that email field value updated')



        
    })
})
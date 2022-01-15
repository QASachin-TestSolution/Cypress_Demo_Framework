/// <reference types="cypress" />
const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
const Emp = `Em${id}`
describe('Testing Manage Employee functionality', function () {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('UserMgt/ManageEmp').as('EmployeeData')
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })
    })
    it('Create Emloyee', function () {

        //Fetching the data from Fixture files
        cy.login(this.data.Admin, this.data.password)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')
        cy.task('log', 'Homepage is visible')

        cy.xpath(Cypress.env('UserMgtModuleMenu')).click()
        cy.task('log', 'UserManagement Menu Expanded')

        cy.xpath(Cypress.env('ManageEmpSubmenu')).click()
        cy.task('log', 'Clicked Manage Employee Submenu')
        cy.wait(4000)

        cy.get(Cypress.env('ManageEmpOrgDrpDwn')).type(this.EmployeeData.Organization).type('{downarrow}{enter}')
        cy.task('log', 'Selected Organization from dropdown')
        cy.wait(2000)

        cy.get(Cypress.env('ManageEmpEmpCode')).type(Emp)
        cy.task('log', 'Selected Orgnization from dropdown')

        cy.get(Cypress.env('ManageEmpEmpName')).type(Emp)
        cy.task('log', 'Selected Orgnization from dropdown')

        cy.get(Cypress.env('ManageEmpSaveBtn')).click()
        cy.task('log', 'Click on save Button')

        cy.xpath(Cypress.env('ManageEmpCreatedVerify')).should('be.visible')
        cy.task('log', 'Verifed User saved text on Pop up')

        cy.xpath(Cypress.env('ManageUserCnfrmOkBtn')).click()
        cy.task('log', 'Click on Ok button on pop up')



        
        
    })

})
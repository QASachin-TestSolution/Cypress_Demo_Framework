/// <reference types="cypress" />
describe('Testing Manage UserType functionality', function () {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('UserMgt/manageusertype').as('UsertypeData')

        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })
    })
    it('Create UserType , Delete Usertype', function () {

        //Fetching the data from Fixture files
        cy.login(this.data.Admin, this.data.password)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')
        cy.task('log', 'Homepage is visible')

        cy.xpath(Cypress.env('UserMgtModuleMenu')).click()
        cy.task('log', 'UserManagement Menu Expanded')

        cy.xpath(Cypress.env('ManageUserTypeSubmenu')).click()
        cy.task('log', 'Clicked Manage UserType Submenu')
        cy.wait(4000)

        cy.get(Cypress.env('ManageUserTypeAddBtn')).click()
        cy.task('log', 'Clicked Add button')
        cy.wait(4000)

        cy.get(Cypress.env('ManageUserTypeUsertypeField')).type(this.UsertypeData.UserTypeName)
        cy.task('log', 'Entered Username in Username field')

        cy.get(Cypress.env('ManageUserTypeSelectDesignation')).type(this.UsertypeData.Designation).type('{downarrow}{enter}')
        cy.task('log', 'Designation selected from select designation dropdown')
        cy.wait(4000)


        if (this.UsertypeData.Designation.toUpperCase() == 'SALESMAN') {

            cy.get(Cypress.env('ManageUserTypePDARights')).click()
            cy.xpath(Cypress.env('ManageUserTypePDAFieldSalescheckbox')).click()
            cy.task('log', 'Selected field sales In PDA rights dropdown')
            cy.wait(2000)

            cy.get(Cypress.env('ManageUserTypePDARightsArrowBtn')).click()
            cy.task('log', 'Clicked arrow button to close dropdown')

            cy.xpath(Cypress.env('ManageUserTypeRoutemgtcheckbox')).click()
            cy.task('log', 'Checked Route Management checkox in User rights')

            

        }


        else if (this.UsertypeData.Designation.toUpperCase() == 'CUSTOMER') {

            cy.xpath(Cypress.env('ManageUserTypeSelfServicecheckbox')).click()
            cy.task('log', 'Checked Route Management checkox in User rights')

        }


        else {

            cy.xpath(Cypress.env('ManageUserTypeRoutemgtcheckbox')).click()
            cy.task('log', 'Checked Route Management checkox in User rights')
        }

        cy.xpath(Cypress.env('ManageUserTypeSaveBtn')).click()
        cy.task('log', 'Clicked on Save Button')

        cy.xpath(Cypress.env('ManageUserTypeCreateMsgVerify')).should('be.visible')
        cy.task('log', 'Successfully saved message verified')

        cy.xpath(Cypress.env('ManageUserCnfrmOkBtn')).click()
        cy.task('log', 'Clicked Ok button on pop up')
        cy.wait(4000)

        

        //In below code we are verifying created user type

        cy.get(Cypress.env('ManageUserTypeSelectUsertype')).type(this.UsertypeData.UserTypeName).type('{downarrow}{enter}')
        cy.task('log', 'Created UserType selected from select UserType dropdown')
        cy.wait(4000)

        cy.get(Cypress.env('ManageUserTypeSelectDesignation')).should('have.value',this.UsertypeData.Designation)
        cy.task('log', 'Verified Designation of created usertype')
        cy.task('log', 'Verified that usertype created successfully')
        cy.wait(4000)

        //In below code we are deleting created user type

        cy.get(Cypress.env('ManageUserTypeDeleteBtn')).click()
        cy.task('log', 'Clicked on Delete button')

        cy.xpath(Cypress.env('ManageUserCnfrmOkBtn')).click()
        cy.task('log', 'Clicked Ok button on delte confirmation pop up')

        cy.xpath(Cypress.env('ManageUsertypeDeleteTxtVerify')).should('be.visible')
        cy.task('log', 'User type deleted successfully text verified on pop up')

        cy.xpath(Cypress.env('ManageUserCnfrmOkBtn')).click()
        cy.task('log', 'Clicked Ok button')


    })
})
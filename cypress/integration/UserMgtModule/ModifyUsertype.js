/// <reference types="cypress" />
describe('Testing Modify UserType functionality', function () {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('UserMgt/modifyusertype').as('UsertypeData')

        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })
    })
    it('Modify UserType, Verify Updation', function () {

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

       

        cy.get(Cypress.env('ManageUserTypeSelectUsertype')).type(this.UsertypeData.UserType).type('{downarrow}{enter}')
        cy.task('log', 'Selected UserType from Usertype DropDown')
        cy.wait(8000)

        cy.get(Cypress.env('ManageUserModifyBtn')).click()
        cy.task('log', 'Clicked on Modify Button')
        cy.wait(5000)

        cy.get(Cypress.env('ManageUserTypeSelectDesignation')).type('select').type('{downarrow}{enter}')
        cy.wait(5000)

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
            cy.task('log', 'Checked Self Service checkox in User rights')

        }


        else {

            cy.xpath(Cypress.env('ManageUserTypeRoutemgtcheckbox')).click()
            cy.task('log', 'Checked Route Management checkox in User rights')
        }

        cy.get(Cypress.env('ManageUserTypeUpdateBtn')).click()
        cy.task('log', 'Clicked on Update Button')

        cy.xpath(Cypress.env('ManageUsertypeUpdatedTxtVerify')).should('be.visible')
        cy.task('log', 'Successfully saved message verified')

        cy.xpath(Cypress.env('ManageUserCnfrmOkBtn')).click()
        cy.task('log', 'Clicked Ok button on pop up')
        cy.wait(5000)

        

        //In below code we are verifying updated user type

        cy.get(Cypress.env('ManageUserTypeSelectUsertype')).type(this.UsertypeData.UserType).type('{downarrow}{enter}')
        cy.task('log', 'Created UserType selected from select UserType dropdown')
        cy.wait(4000)

        cy.get(Cypress.env('ManageUserTypeSelectDesignation')).should('have.value',this.UsertypeData.Designation)
        cy.task('log', 'Verified Designation of Updated usertype')
        cy.wait(4000)


        if (this.UsertypeData.Designation.toUpperCase() == 'CUSTOMER') {

            cy.xpath(Cypress.env('ManageUserTypeSelfServicecheckedVerify')).should('be.visible')
            cy.task('log', 'Verified updated User rights')

        }


        else {

            cy.xpath(Cypress.env('ManageUserTypeRoutemgtcheckedVerify')).should('be.visible')
            cy.task('log', 'Verified updated User rights')
        }
        

    })
})
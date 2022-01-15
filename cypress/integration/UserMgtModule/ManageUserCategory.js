/// <reference types="cypress" />
describe('Testing Manage UserCategory functionality', function () {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('UserMgt/ManageCategory').as('CategoryData')

        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })
    })
    it('Updating user category , verify after updation', function () {

        //Fetching the data from Fixture files
        cy.login(this.data.Admin, this.data.password)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')
        cy.task('log', 'Homepage is visible')

        cy.xpath(Cypress.env('UserMgtModuleMenu')).click()
        cy.task('log', 'UserManagement Menu Expanded')

        cy.xpath(Cypress.env('ManageUserCategorySubmenu')).click()
        cy.task('log', 'Clicked Manage Category Submenu')
        cy.wait(4000)

        cy.get(Cypress.env('ManageUserCategorySelectUser')).type(this.CategoryData.User)
        cy.wait(6000)
        cy.get(Cypress.env('ManageUserCategorySelectUser')).type('{downarrow}{enter}')
        cy.task('log', 'Select user from dropdown')
        cy.wait(7000)


        cy.get(Cypress.env('ManageUserCategorySelectCategoryDrpDwn')).invoke('attr','value').then((value) => {
        let SelectedCategory=value;
        cy.log(category)

        cy.get(Cypress.env('ManageUserCategorySelectCategoryDrpDwn')).click()
        cy.wait(4000)


        if (SelectedCategory.toUpperCase() == 'GEN') {

            cy.xpath(Cypress.env('ManageUserCategoryGENCategory')).click()
            cy.task('log', 'Unselecting GEN Category')
            cy.wait(2000)

        }


        else if (SelectedCategory.toUpperCase() == 'JUL') {

            cy.xpath(Cypress.env('ManageUserCategoryJULCategory')).click()
            cy.task('log', 'Unselecting JUL Category')
            cy.wait(2000)
        }


        else if (SelectedCategory.toUpperCase() == 'JUC') {

            cy.xpath(Cypress.env('ManageUserCategoryJUCCategory')).click()
            cy.task('log', 'Unselecting JUC Category')
            cy.wait(2000)

        }

        else if (SelectedCategory.toUpperCase() == 'NOV') {

            cy.xpath(Cypress.env('ManageUserCategoryNOVCategory')).click()
            cy.task('log', 'Unselecting NOV Category')
            cy.wait(2000)

        }

        })



        function random_value(Categories) {

            return Categories[Math.floor(Math.random() * Categories.length)];

        }
  
        const Categories = ['GEN','JUL','JUC','NOV'];
        let category= random_value(Categories)
        
        //In below code we are randomly selecting category

        if (category.toUpperCase() == 'GEN') {

            cy.xpath(Cypress.env('ManageUserCategoryGENCategory')).click()
            cy.task('log', 'selected GEN Category')
            cy.wait(2000)

        }


        else if (category.toUpperCase() == 'JUL') {

            cy.xpath(Cypress.env('ManageUserCategoryJULCategory')).click()
            cy.task('log', 'selected JUL Category')
            cy.wait(2000)
        }


        else if (category.toUpperCase() == 'JUC') {

            cy.xpath(Cypress.env('ManageUserCategoryJUCCategory')).click()
            cy.task('log', 'selected JUC Category')
            cy.wait(2000)

        }

        else if (category.toUpperCase() == 'NOV') {

            cy.xpath(Cypress.env('ManageUserCategoryNOVCategory')).click()
            cy.task('log', 'selected NOV Category')
            cy.wait(2000)

        }

        cy.get(Cypress.env('ManageUserSaveBtn')).click()
        cy.task('log', 'Clicked on Save Button')

        cy.xpath(Cypress.env('ManageUserCategorySavedCnfrmText')).should('be.visible')
        cy.task('log', 'Successfully saved Pop up Text verified')

        cy.xpath(Cypress.env('ManageUserCnfrmOkBtn')).click()
        cy.task('log', 'Clicked on ok button of Pop up')
        cy.wait(4000)


        cy.get(Cypress.env('ManageUserCategorySelectUser')).type(this.CategoryData.User)
        cy.wait(6000)
        cy.get(Cypress.env('ManageUserCategorySelectUser')).type('{downarrow}{enter}')
        cy.task('log', 'Select user from dropdown')
        cy.wait(7000)

        cy.get(Cypress.env('ManageUserCategorySelectCategoryDrpDwn')).should('have.value',category)
        cy.task('log', 'Verified that category value is updated')

    })
})
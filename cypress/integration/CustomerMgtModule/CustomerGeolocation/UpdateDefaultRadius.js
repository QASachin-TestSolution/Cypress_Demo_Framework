/*
 * @Author: sachin 
 * @Date: 2021-11-11 11:27:46 
 * @Last Modified by:   sachin 
 * @Last Modified time: 2021-11-11 11:27:46 
 */
const range = Math.floor(Math.random() * 100) + 1
/// <reference types="cypress" />
describe('Customer Geolocation', function () {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('Customerdata/Custlocation').as('Customerdata')
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })
    })
    it('Updating & verifying default radius from Customer Geolocation Submodule', function () {

        //Fetching the data from Fixture files
        cy.login(this.data.Admin, this.data.password)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')
        cy.task('log', 'Homepage is visible')

        cy.xpath(Cypress.env('CustomerManagemtModule')).click()
        cy.task('log', 'CustomerManagemt Menu Expanded')

        cy.xpath(Cypress.env('CustGeoLocSubmenu')).click()
        cy.task('log', 'Clicked Customer Geolocation Submenu')

        cy.get(Cypress.env('CustGeoLocFilterBy')).click()
        cy.task('log', 'Filter by dropdown Expanded')

        if (this.Customerdata.FilterCustomerBy.toUpperCase() == 'CUSTOMER NAME') {

            cy.xpath(Cypress.env('CustGeoLocFilterByCustName')).click()
            cy.task('log', 'Filter By Customer name selected from the dropdown')
        }

        else if (this.Customerdata.FilterCustomerBy.toUpperCase() == 'CUSTOMER BARCODE') {
            cy.xpath(Cypress.env('CustGeoLocFilterByBarcode')).click()
            cy.task('log', 'Filter By Customer Barcode selected from the dropdown')
        }

        else if (this.Customerdata.FilterCustomerBy.toUpperCase() == 'ADDRESS') {
            cy.xpath(Cypress.env('CustGeoLocFilterByAddress')).click()
            cy.task('log', 'Filter By Address selected from the dropdown')
        }

        else if (this.Customerdata.FilterCustomerBy.toUpperCase() == 'CUSTOMER NO') {
            cy.xpath(Cypress.env('CustGeoLocFilterByCustNo')).click()
            cy.task('log', 'Filter By Customer No selected from the dropdownn')
        }

        cy.wait(6000)
        cy.get(Cypress.env('CustGeoLocFiltervalue')).type(this.Customerdata.FilterValue)
        cy.task('log', 'Fiter Value entered in field')

        cy.get(Cypress.env('CustGeoLocFilterSearchBtn')).click()
        cy.task('log', 'Clicked on search button')
        cy.wait(4000)

        // cy.wait(6000)

        cy.get(Cypress.env('CustomerSelectCheckox')).click()
        cy.task('log', 'Clicked on Checkbox to select customer')

        cy.get(Cypress.env('CustUpdateDefaultRadiusBtn')).click()
        cy.task('log', 'Clicked on Update Default Radius Button')

        cy.wait(5000)

        cy.get(Cypress.env('CustomerVisitRadius')).type(range)
        cy.task('log', 'Entered Radius in default radius field')

        cy.get(Cypress.env('CustDefaultRadiusUpdateBtn')).click()
        cy.task('log', 'Clicked on Update buttton')
        
        cy.xpath(Cypress.env('CustDefaultRadiusCnfrmOkBtn')).click()
        cy.task('log', 'Clicked Yes Button on update confirmation pop-up')

        cy.xpath(Cypress.env('CustDefaultRadiusUpdatedOk')).click()
        cy.task('log', 'Clicked Okay Button on successfully updated pop-up')

        cy.wait(4000)

        cy.get(Cypress.env('CustGeoLocRangeVerify')).contains(range)
        cy.task('log','Verified that Range value updated')




    })

})
/*
 * @Author: sachin 
 * @Date: 2021-11-11 11:27:52 
 * @Last Modified by:   sachin 
 * @Last Modified time: 2021-11-11 11:27:52 
 */
/// <reference types="cypress" />
describe('Upload customers', function () {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('Customerdata/UploadCust').as('Customerdata')
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })
    })
    it('Upload & verify Customer excel file in Customer Geolocation Submodule', function () {

        //Fetching the data from Fixture files
        cy.login(this.data.Admin, this.data.password)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')
        cy.task('log', 'Homepage is visible')

        cy.xpath(Cypress.env('CustomerManagemtModule')).click()
        cy.task('log', 'CustomerManagemt Menu Expanded')

        cy.xpath(Cypress.env('CustGeoLocSubmenu')).click()
        cy.task('log', 'Clicked Customer Geolocation Submenu')

       
        cy.wait(3000)

        cy.fixture('Customerdata/CustomerGeolocationstest.xls', 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then(fileContent => {
                cy.get('#MainContent_ExcelFileUploadfile0').attachFile({
                    fileContent,
                    fileName: 'CustomerGeolocationstest.xls',
                    mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    encoding: 'utf8'
                })
            })
       
        cy.xpath(Cypress.env('CustGeoLocUploadCnfrmOk')).click()
        cy.task('log', 'Clicked on Ok button of successfully uploaded pop-up')
        cy.wait(7000)

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
        cy.wait(5000)
        cy.get(Cypress.env('CustGeoLocFiltervalue')).type(this.Customerdata.Barcode)
        cy.task('log', 'Fiter Value entered in field')

        cy.get(Cypress.env('CustGeoLocFilterSearchBtn')).click()
        cy.task('log', 'Clicked on search button')
        cy.wait(5000)

        cy.get(Cypress.env('CustGeoLocLatitudeVerify')).contains(this.Customerdata.LatitudeVerify)
        cy.task('log', 'Verified that Latitude value updated as per uploaded excel file')

        cy.get(Cypress.env('CustGeoLocLongitudeVerify')).contains(this.Customerdata.LongitudeVerify)
        cy.task('log', 'Verified that Latitude value updated as per uploaded excel file')

        cy.get(Cypress.env('CustGeoLocRangeVerify')).contains(this.Customerdata.Range)
        cy.task('log', 'Verified that Range value updated as per uploaded excel file')

    })

})
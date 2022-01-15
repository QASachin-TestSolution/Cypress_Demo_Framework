/*
 * @Author: sachin 
 * @Date: 2021-11-11 11:27:38 
 * @Last Modified by:   sachin 
 * @Last Modified time: 2021-11-11 11:27:38 
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
    it('Updating & verifying customer location from Customer Geolocation Submodule', function () {

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


        // cy.window().then((win) => {
        //     // Replace window.open(url, target)-function with our own arrow function
        //     cy.stub(win, 'open', url => {
        //         // change window location to be same as the popup url
        //         win.location.href = Cypress.config().baseUrl + url;
        //     }).as("popup") // alias it with popup, so we can wait refer it with @popup
        // })

        cy.window().then(win => {
            cy.stub(win, 'open').callsFake((url) => {
              return win.open.wrappedMethod.call(win, url, '_self');
            }).as('Open');
          });
        cy.get(Cypress.env('CustGeoLocEditBtn')).click()
        cy.task('log', 'Clicked on Edit button')

        cy.wait(5000)
        // Make sure that it triggered window.open function call
        // cy.get("@popup").should("be.called")
        
        // const Latitudes = [254, 45, 212, 365, 2543];

        function random_value(Latitudes) {

            return Latitudes[Math.floor(Math.random() * Latitudes.length)];

        }

        function random_value(Longitudes) {

            return Longitudes[Math.floor(Math.random() * Longitudes.length)];

        }
  
        const Latitudes = [25.3162881593165,25.3131652182808,25.3167342871774,25.3106726268233,25.3245606542973];
        let Latitude= random_value(Latitudes)

        const Longitudes = [55.3550569786987,55.3573958649597,55.3862349762878,55.3570203556976,55.3731565251312];
        let Longitude = random_value(Longitudes)
        
        cy.get(Cypress.env('CustGeoLocLatitude')).clear().type(Latitude)
        cy.task('log', 'Latitude Value entered in field')
       
        cy.get(Cypress.env('CustGeoLocLongitude')).clear().type(Longitude)
        cy.task('log', 'Longitude Value entered in field')
        
        cy.get(Cypress.env('CustGeoLocRange')).clear().type(range)
        cy.task('log', 'Range Value entered in field')
        
        cy.get(Cypress.env('CustGeoLocUpdateBtn')).click()
        cy.task('log', 'Clicked on update Button')

        cy.xpath(Cypress.env('CustGeoLocConfirmOkBtn')).click()
        cy.task('log', 'Clicked on Okay Button on successfully updated pop-up')

        cy.wait(4000)

        cy.visit('http://ucssolutions.no-ip.biz:3222/MedRep_CS/html/MngLatiLongitude.aspx')

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

        cy.get(Cypress.env('CustGeoLocLatitudeVerify')).contains(Latitude)
        cy.task('log','Verified that Latitude value updated')

        cy.get(Cypress.env('CustGeoLocLongitudeVerify')).contains(Longitude)
        cy.task('log','Verified that Latitude value updated')

        cy.get(Cypress.env('CustGeoLocRangeVerify')).contains(range)
        cy.task('log','Verified that Range value updated')




    })

})
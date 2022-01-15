/*
 * @Author: sachin 
 * @Date: 2021-11-11 11:27:25 
 * @Last Modified by:   sachin 
 * @Last Modified time: 2021-11-11 11:27:25 
 */
const range = Math.floor(Math.random() * 100) + 1
/// <reference types="cypress" />
describe('Download Template', function () {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('Customerdata/Custlocation').as('Customerdata')
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })
    })
    it('In Customer Geolocation Submodule , Download template & verifying file downloaded ', function () {

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

        cy.task('downloads', 'cypress/downloads').then(before => {

            // do the download

            cy.window().document().then(function (doc) {
                doc.addEventListener('click', () => {
                    setTimeout(function () { doc.location.reload() }, 7000)
                })
                cy.get(Cypress.env('CustGeoLocDownloadTemplateBtn')).click()
                cy.task('log', 'Clicked on Download Template Button')
            })

            cy.wait(4000)

            cy.task('downloads', 'cypress/downloads').then(after => {
                expect(after.length).to.be.eq(before.length + 1)
                cy.task('log', 'Verified that file is added in download folder')
            })
        })

    })

})
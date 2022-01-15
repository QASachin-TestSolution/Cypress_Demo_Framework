/*
 * @Author: sachin 
 * @Date: 2021-11-11 11:27:25 
 * @Last Modified by: sachin
 * @Last Modified time: 2021-11-11 12:03:43
 */
const range = Math.floor(Math.random() * 100) + 1
/// <reference types="cypress" />
describe('Testing Download Template functionality on MedRep Doctor Assignment screen', function () {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })
    })
    it('In MedRep Doctor Assignment Submodule , Download template & verifying file downloaded ', function () {

        //Fetching the data from Fixture files
        cy.login(this.data.Admin, this.data.password)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')
        cy.task('log', 'Homepage is visible')

        cy.xpath(Cypress.env('MedRepModule')).click()
        cy.task('log', 'MedRep Menu Expanded')

        cy.xpath(Cypress.env('MedRepDoctorAssignment')).click()
        cy.task('log', 'Clicked Med Rep Doctor Assignment Submenu')
        cy.wait(6000)

        cy.task('downloads', 'cypress/downloads').then(before => {

            // do the download

            cy.window().document().then(function (doc) {
                doc.addEventListener('click', () => {
                    setTimeout(function () { doc.location.reload() }, 7000)
                })
                cy.get(Cypress.env('MedRepDoctorAssignDownloadTemplateBtn')).click()
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
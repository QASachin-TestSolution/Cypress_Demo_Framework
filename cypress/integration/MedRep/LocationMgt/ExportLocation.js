/*
 * @Author: sachin 
 * @Date: 2021-11-09 13:35:42 
 * @Last Modified by: sachin
 * @Last Modified time: 2021-11-09 15:43:52
 */
/// <reference types="cypress" />
describe('Testing Export Doctors', function () {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('MedRep/LocationMgt/Exportlocation').as('Locationdata')
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })
    })
    it('Download Export doctors, Verifying file downloaded ', function () {

        //Fetching the data from Fixture files
        cy.login(this.data.Admin, this.data.password)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')
        cy.task('log', 'Homepage is visible')

        cy.xpath(Cypress.env('MedRepModule')).click()
        cy.task('log', 'MedRep Menu Expanded')

        cy.xpath(Cypress.env('LocationsMgtSubmenu')).click()
        cy.task('log', 'Clicked LocationsMgt Submenu')
        cy.wait(4000)

        cy.get(Cypress.env('LocationsMgtSelectOrgDrpDwn')).click()
        cy.task('log', 'Select Organization DropDown Expanded')
        cy.wait(3000)


        if (this.Locationdata.Organization.toUpperCase() == 'POOJA_20OCT_COMMON') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg1')).click()
            cy.task('log', 'Selected Organiztion from dropdown')
            cy.wait(6000)
            
            
        }

        else if (this.Locationdata.Organization.toUpperCase() == 'POOJA-20OCT_MARKETING') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg2')).click()
            cy.task('log', 'Selected Organiztion from dropdown')
            cy.wait(6000)
            
        }



        else if (this.Locationdata.Organization.toUpperCase() == 'SITE - 5831') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg3')).click()
            cy.task('log', 'Selected Organiztion from dropdown')
            cy.wait(6000)
        }
    

        else if (this.Locationdata.Organization.toUpperCase() == 'SITE - 5800') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg4')).click()
            cy.task('log', 'Selected Organiztion from dropdown')
            cy.wait(6000)
            }

        cy.get(Cypress.env('LocationsMgtLocationNameFilter')).type(this.Locationdata.Name)
        .type('{enter}')
        cy.task('log', 'Entered Name and press enter button')
        cy.wait(5000)

        cy.task('downloads', 'cypress/downloads').then(before => {

            // do the download

            cy.window().document().then(function (doc) {
                doc.addEventListener('click', () => {
                    setTimeout(function () { doc.location.reload() }, 7000)
                })
                cy.get(Cypress.env('DoctorsMgtExportDoctorBtn')).click()
                cy.task('log', 'Clicked on Export Button')
            })

            cy.wait(4000)

            cy.task('downloads', 'cypress/downloads').then(after => {
                expect(after.length).to.be.eq(before.length + 1)
                cy.task('log', 'Verified that file is added in download folder')
            })
        })

    })

})
/*
 * @Author: sachin 
 * @Date: 2021-11-22 17:37:52 
 * @Last Modified by: sachin
 * @Last Modified time: 2021-11-22 18:52:26
 */

/// <reference types="cypress" />
describe('Testing Export monthly Plan Functionality ', function () {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('MedRep/MonthlyPlan/ExportMonthlyPlan').as('Visitdata')
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })
    })
    it('Testing Export monthly Plan', function () {

        //Fetching the data from Fixture files
        cy.login(this.data.Admin, this.data.password)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')
        cy.task('log', 'Homepage is visible')

        cy.xpath(Cypress.env('MedRepModule')).click()
        cy.task('log', 'MedRep Menu Expanded')

        cy.xpath(Cypress.env('MedRepUploadMonthlyVisitPlanSubmenu')).click()
        cy.task('log', 'Clicked Upload Monthly Plan Submenu')
        cy.wait(4000)

        cy.get(Cypress.env('DoctorsMgtSelectOrgDrpDwn')).click()
        cy.task('log', 'Select Organization DropDown Expanded')
        cy.wait(3000)


        if (this.Visitdata.Organization.toUpperCase() == 'POOJA_20OCT_COMMON') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg1')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)


        }

        else if (this.Visitdata.Organization.toUpperCase() == 'POOJA-20OCT_MARKETING') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg2')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)

        }



        else if (this.Visitdata.Organization.toUpperCase() == 'SITE - 5831') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg3')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
        }


        else if (this.Visitdata.Organization.toUpperCase() == 'SITE - 5800') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg4')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
        }

        cy.get(Cypress.env('MedRepUploadMonthlyVisitPlanEmpSelect')).type(this.Visitdata.MedRep)
            .type('{downarrow}{enter}')
        cy.task('log', 'Selected MedRep Type from DropDown')
        cy.wait(6000)


        cy.get(Cypress.env('MedRepUploadMonthlyVisitPlanDateSelectBtn')).click()
        cy.task('log', 'Clicked Select Date Arrow button')
        cy.wait(2000)

        cy.xpath(Cypress.env('MedRepUploadMonthlyVisitPlanYearBtn')).click()
        cy.wait(4000)
        
        cy.xpath(Cypress.env('MedRepExportMonthlyVisitPlanMonthBtn')).click()
        cy.wait(2000)

        cy.get(Cypress.env('MedRepUploadMonthlyVisitPlanDatePopUpOkBtn')).click()
        cy.task('log', 'Selected Year & Month')
        cy.wait(2000)

        cy.task('downloads', 'cypress/downloads').then(before => {

            // do the download

            cy.window().document().then(function (doc) {
                doc.addEventListener('click', () => {
                    setTimeout(function () { doc.location.reload() }, 7000)
                })
                cy.get(Cypress.env('MedRepExportMonthlyVisitExportBtn')).click()
                cy.task('log', 'Clicked on Export Month Plan Button')
            })

            cy.wait(4000)

            cy.task('downloads', 'cypress/downloads').then(after => {
                expect(after.length).to.be.eq(before.length + 1)
                cy.task('log', 'Verified that file is added in download folder')
            })
        })

    })

})
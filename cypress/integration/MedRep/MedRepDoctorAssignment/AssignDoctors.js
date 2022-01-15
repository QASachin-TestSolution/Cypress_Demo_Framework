/*
 * @Author: sachin 
 * @Date: 2021-11-11 10:45:40 
 * @Last Modified by: sachin
 * @Last Modified time: 2021-11-16 16:12:22
 */

/// <reference types="cypress" />
describe('Testing Doctor Assignment', function () {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('MedRep/DoctorAssignment/AssignDoctor').as('Doctordata')
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })
    })
    it('Assign All Doctor ,Remove all assigned Doctor, Assign one Doctor ,Remove assigned Doctor', function () {

        //Fetching the data from Fixture files
        cy.login(this.data.Admin, this.data.password)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')
        cy.task('log', 'Homepage is visible')

        cy.xpath(Cypress.env('MedRepModule')).click()
        cy.task('log', 'MedRep Menu Expanded')

        cy.xpath(Cypress.env('MedRepDoctorAssignment')).click()
        cy.task('log', 'Clicked Med Rep Doctor Assignment Submenu')
        cy.wait(4000)

        cy.get(Cypress.env('LocationsMgtSelectOrgDrpDwn')).click()
        cy.task('log', 'Select Organization DropDown Expanded')
        cy.wait(3000)


        if (this.Doctordata.Organization.toUpperCase() == 'POOJA_20OCT_COMMON') {

            cy.xpath(Cypress.env('LocationsMgtSelectOrg1')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
            
            
        }

        else if (this.Doctordata.Organization.toUpperCase() == 'POOJA-20OCT_MARKETING') {

            cy.xpath(Cypress.env('LocationsMgtSelectOrg2')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
            
        }



        else if (this.Doctordata.Organization.toUpperCase() == 'SITE - 5831') {

            cy.xpath(Cypress.env('LocationsMgtSelectOrg3')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
        }
    

        else if (this.Doctordata.Organization.toUpperCase() == 'SITE - 5800') {

            cy.xpath(Cypress.env('LocationsMgtSelectOrg4')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
            }

        cy.get(Cypress.env('LocAssignSelectMedRep')).type(this.Doctordata.MedRep)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected MedRep Type from DropDown')
        cy.wait(9000)


        cy.get(Cypress.env('LocAssignAssignAlllocBtn')).click()
        cy.task('log', 'Clicked on Assign All Doctor button')
        cy.wait(6000)

        cy.get(Cypress.env('LocAssignAvailableLocVerify')).contains('Available Doctors: [0]')
        cy.task('log', 'Verified that Available Doctors: [0] visible')
        cy.wait(3000)

        cy.get(Cypress.env('LocAssignDeAssignAlllocBtn')).click()
        cy.task('log', 'Clicked on Remove All assigned Doctor button')
        cy.wait(6000)

        cy.get(Cypress.env('LocAssignAssignedLocVerify')).contains('Assigned Doctors: [0]')
        cy.task('log', 'Verified that Assigned Doctors: [0] visible')

        cy.get(Cypress.env('LocAssignlocationFilter')).type(this.Doctordata.Doctor)
        cy.task('log', 'Entered Doctor in serach Doctor field')

        cy.get(Cypress.env('LocAssignSearchBtn')).click()
        cy.task('log', 'Clicked on search button')
        cy.wait(4000)

        cy.get(Cypress.env('LocAssignAvailableSearchedlocation')).contains(this.Doctordata.Doctor)
        cy.task('log', 'Verified Searched Doctor')
        cy.wait(2000)

        cy.get(Cypress.env('LocAssignAvailableSearchedlocation')).click()
        cy.task('log', 'Clicked on Doctor in available Doctor')
        cy.wait(2000)

        cy.get(Cypress.env('LocAssignAssignlocBtn')).click()
        cy.task('log', 'Clicked on Assign selected Doctor button')
        cy.wait(3000)

        cy.get(Cypress.env('LocAssignAssignedSearchedlocation')).contains(this.Doctordata.Doctor)
        cy.task('log', 'Verified that Doctor is visible under assigned Doctor')
        cy.wait(2000)

        cy.get(Cypress.env('LocAssignAssignedSearchedlocation')).click()
        cy.task('log', 'Clicked on Doctor in Assigned Doctor')
        cy.wait(2000)

        cy.get(Cypress.env('LocAssignDeAssignlocBtn')).click()
        cy.task('log', 'Clicked on Remove assigned Doctor Button')
        cy.wait(3000)

        cy.get(Cypress.env('LocAssignAvailableSearchedlocation')).contains(this.Doctordata.Doctor)
        cy.task('log', 'Verified Doctor is removed , showing in avaialble Doctor section')
        cy.wait(2000)



        })
            
        })
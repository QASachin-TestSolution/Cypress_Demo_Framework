/*
 * @Author: sachin 
 * @Date: 2021-11-10 16:10:40 
 * @Last Modified by: sachin
 * @Last Modified time: 2021-11-10 16:26:04
 */

/// <reference types="cypress" />
describe('Testing Specialization Assignment', function () {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('MedRep/SpecializationAssignment/AssignSpecialization').as('Specializationdata')
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })
    })
    it('Assign All Specialization ,Remove all assigned Specialization, Assign one Specialization ,Remove assigned Specialization', function () {

        //Fetching the data from Fixture files
        cy.login(this.data.Admin, this.data.password)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')
        cy.task('log', 'Homepage is visible')

        cy.xpath(Cypress.env('MedRepModule')).click()
        cy.task('log', 'MedRep Menu Expanded')

        cy.xpath(Cypress.env('MedRepSpecializationAssignment')).click()
        cy.task('log', 'Clicked Med Rep Specialization Assignment Submenu')
        cy.wait(4000)

        cy.get(Cypress.env('LocationsMgtSelectOrgDrpDwn')).click()
        cy.task('log', 'Select Organization DropDown Expanded')
        cy.wait(3000)


        if (this.Specializationdata.Organization.toUpperCase() == 'POOJA_20OCT_COMMON') {

            cy.xpath(Cypress.env('LocationsMgtSelectOrg1')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
            
            
        }

        else if (this.Specializationdata.Organization.toUpperCase() == 'POOJA-20OCT_MARKETING') {

            cy.xpath(Cypress.env('LocationsMgtSelectOrg2')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
            
        }



        else if (this.Specializationdata.Organization.toUpperCase() == 'SITE - 5831') {

            cy.xpath(Cypress.env('LocationsMgtSelectOrg3')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
        }
    

        else if (this.Specializationdata.Organization.toUpperCase() == 'SITE - 5800') {

            cy.xpath(Cypress.env('LocationsMgtSelectOrg4')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
            }

        cy.get(Cypress.env('LocAssignSelectMedRep')).type(this.Specializationdata.MedRep)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected MedRep Type from DropDown')
        cy.wait(3000)


        cy.get(Cypress.env('LocAssignAssignAlllocBtn')).click()
        cy.task('log', 'Clicked on Assign All Specialization button')
        cy.wait(6000)

        cy.get(Cypress.env('LocAssignAvailableLocVerify')).contains('Available Specializations: [0]')
        cy.task('log', 'Verified that Available Specialization: [0] visible')
        cy.wait(3000)

        cy.get(Cypress.env('LocAssignDeAssignAlllocBtn')).click()
        cy.task('log', 'Clicked on Remove All assigned Specialization button')
        cy.wait(6000)

        cy.get(Cypress.env('LocAssignAssignedLocVerify')).contains('Assigned Specializations: [0]')
        cy.task('log', 'Verified that Assigned Specialization: [0] visible')



        cy.get(Cypress.env('LocAssignlocationFilter')).type(this.Specializationdata.Specialization)
        cy.task('log', 'Entered Specialization in serach Specialization field')

        cy.get(Cypress.env('LocAssignSearchBtn')).click()
        cy.task('log', 'Clicked on search button')
        cy.wait(4000)

        cy.get(Cypress.env('LocAssignAvailableSearchedlocation')).contains(this.Specializationdata.Specialization)
        cy.task('log', 'Verified Searched Specialization')
        cy.wait(2000)

        cy.get(Cypress.env('LocAssignAvailableSearchedlocation')).click()
        cy.task('log', 'Clicked on Specialization in available Specialization')
        cy.wait(2000)

        cy.get(Cypress.env('LocAssignAssignlocBtn')).click()
        cy.task('log', 'Clicked on Assign selected Specialization button')
        cy.wait(3000)

        cy.get(Cypress.env('LocAssignAssignedSearchedlocation')).contains(this.Specializationdata.Specialization)
        cy.task('log', 'Verified that Specialization is visible under assigned Specialization')
        cy.wait(2000)

        cy.get(Cypress.env('LocAssignAssignedSearchedlocation')).click()
        cy.task('log', 'Clicked on Specialization in Assigned Specialization')
        cy.wait(2000)

        cy.get(Cypress.env('LocAssignDeAssignlocBtn')).click()
        cy.task('log', 'Clicked on Remove assigned Specialization Button')
        cy.wait(3000)

        cy.get(Cypress.env('LocAssignAvailableSearchedlocation')).contains(this.Specializationdata.Specialization)
        cy.task('log', 'Verified Specialization is removed , showing in avaialble Specialization section')
        cy.wait(2000)



        })
            
        })
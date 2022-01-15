/*
 * @Author: sachin 
 * @Date: 2021-11-10 10:15:18 
 * @Last Modified by: sachin
 * @Last Modified time: 2021-11-10 11:31:29
 */
/// <reference types="cypress" />
describe('Testing Location Assignment', function () {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('MedRep/LocationAssignment/AssignLocation').as('Locationdata')
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })
    })
    it('Assign All location ,Remove all assigned location, Assign one location ,Remove assigned location', function () {

        //Fetching the data from Fixture files
        cy.login(this.data.Admin, this.data.password)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')
        cy.task('log', 'Homepage is visible')

        cy.xpath(Cypress.env('MedRepModule')).click()
        cy.task('log', 'MedRep Menu Expanded')

        cy.xpath(Cypress.env('MedRepLocationAssignment')).click()
        cy.task('log', 'Clicked Med Rep LocationAssignment Submenu')
        cy.wait(4000)

        cy.get(Cypress.env('LocationsMgtSelectOrgDrpDwn')).click()
        cy.task('log', 'Select Organization DropDown Expanded')
        cy.wait(3000)


        if (this.Locationdata.Organization.toUpperCase() == 'POOJA_20OCT_COMMON') {

            cy.xpath(Cypress.env('LocationsMgtSelectOrg1')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
            
            
        }

        else if (this.Locationdata.Organization.toUpperCase() == 'POOJA-20OCT_MARKETING') {

            cy.xpath(Cypress.env('LocationsMgtSelectOrg2')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
            
        }



        else if (this.Locationdata.Organization.toUpperCase() == 'SITE - 5831') {

            cy.xpath(Cypress.env('LocationsMgtSelectOrg3')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
        }
    

        else if (this.Locationdata.Organization.toUpperCase() == 'SITE - 5800') {

            cy.xpath(Cypress.env('LocationsMgtSelectOrg4')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
            }

        cy.get(Cypress.env('LocAssignSelectMedRep')).type(this.Locationdata.MedRep)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected MedRep Type from DropDown')
        cy.wait(6000)


        cy.get(Cypress.env('LocAssignAssignAlllocBtn')).click()
        cy.task('log', 'Clicked on Assign All location button')
        cy.wait(12000)

        cy.get(Cypress.env('LocAssignAvailableLocVerify')).contains('Available Locations: [0]')
        cy.task('log', 'Verified that Available Locations: [0] visible')
        cy.wait(3000)

        cy.get(Cypress.env('LocAssignDeAssignAlllocBtn')).click()
        cy.task('log', 'Clicked on Remove All assigned location button')
        cy.wait(12000)

        cy.get(Cypress.env('LocAssignAssignedLocVerify')).contains('Assigned Locations: [0]')
        cy.task('log', 'Verified that Assigned Locations: [0] visible')



        cy.get(Cypress.env('LocAssignlocationFilter')).type(this.Locationdata.Location)
        cy.task('log', 'Entered Location in serach location field')

        cy.get(Cypress.env('LocAssignSearchBtn')).click()
        cy.task('log', 'Clicked on search button')
        cy.wait(6000)

        cy.get(Cypress.env('LocAssignAvailableSearchedlocation')).contains(this.Locationdata.Location)
        cy.task('log', 'Verified Searched location')
        cy.wait(2000)

        cy.get(Cypress.env('LocAssignAvailableSearchedlocation')).click()
        cy.task('log', 'Clicked on location in available location')
        cy.wait(2000)

        cy.get(Cypress.env('LocAssignAssignlocBtn')).click()
        cy.task('log', 'Clicked on Assign selected location button')
        cy.wait(5000)

        cy.get(Cypress.env('LocAssignAssignedSearchedlocation')).contains(this.Locationdata.Location)
        cy.task('log', 'Verified that location is visible under assigned location')
        cy.wait(2000)

        cy.get(Cypress.env('LocAssignAssignedSearchedlocation')).click()
        cy.task('log', 'Clicked on location in Assigned location')
        cy.wait(2000)

        cy.get(Cypress.env('LocAssignDeAssignlocBtn')).click()
        cy.task('log', 'Clicked on Remove assigned location Button')
        cy.wait(5000)

        cy.get(Cypress.env('LocAssignAvailableSearchedlocation')).contains(this.Locationdata.Location)
        cy.task('log', 'Verified location is removed , showing in avaialble location section')
        cy.wait(2000)



        })
            
        })
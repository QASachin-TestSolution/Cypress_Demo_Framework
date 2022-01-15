/*
 * @Author: sachin 
 * @Date: 2021-11-20 00:25:51 
 * @Last Modified by: sachin
 * @Last Modified time: 2021-11-23 11:39:57
 */


/// <reference types="cypress" />
describe('Testing copy , move , Delete visit operations', function () {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('MedRep/VisitPlanning/VisitOperationRightClick').as('Visitdata')
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })

    })
    it('Testing copy vist, move visit , delete visit operation using right click on visit', function () {

        //Fetching the data from Fixture files
        cy.login(this.data.Admin, this.data.password)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')
        cy.task('log', 'Homepage is visible')

        cy.xpath(Cypress.env('MedRepModule')).click()
        cy.task('log', 'MedRep Menu Expanded')

        cy.xpath(Cypress.env('MedRepVisitPlanningSubmenu')).click()
        cy.task('log', 'Clicked VisitPlanning Submenu')
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

        cy.get(Cypress.env('LocAssignSelectMedRep')).type(this.Visitdata.MedRep)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected MedRep Type from DropDown')
        cy.wait(6000)

        cy.xpath(Cypress.env('MedRepVisitPlanningSelectDateBtn')).click()
        cy.task('log', 'Clicked Select Date Arrow button')
        cy.wait(2000)

        cy.get(Cypress.env('MedRepVisitCalenderYearTitleBtn')).click()
        cy.wait(4000)
        
        cy.xpath(Cypress.env('MedRepVisitCalenderYearBtn')).click()
        cy.wait(2000)

        cy.xpath(Cypress.env('MedRepVisitCalenderMonthBtn')).click()
        cy.task('log', 'Selected Year & Month')
        cy.wait(2000)
        
        cy.xpath(Cypress.env('MedRepVisitCalenderOkBtn')).click()
        cy.wait(2000)

        cy.xpath(Cypress.env('MedRepVisitPopUpCalenderDatePath')).click()
        cy.task('log', 'Clicked on date on calender pop up')
        cy.wait(4000)

        cy.xpath(Cypress.env('MedRepVisitExistingVisitPosition')).rightclick()
        cy.task('log', 'Right Clicked on visit')
        cy.wait(4000)

        cy.xpath(Cypress.env('MedRepVisitMouseRightClickCopyBtn')).click()
        cy.task('log', 'Clicked on copy button')
        cy.wait(4000)

        cy.xpath(Cypress.env('MedRepVisitScreenCalenderRightClickCopyVisitpath')).rightclick()
        cy.task('log', 'Right Clicked on date on which user want to copy visit')
        cy.wait(2000)

        cy.xpath(Cypress.env('MedRepVisitMouseRightClickPasteBtn')).click()
        cy.task('log', 'Clicked on Paste button')
        cy.wait(4000)

        cy.xpath(Cypress.env('MedRepRoghtClickVisitCopiedPopUpTxtVerify')).should('be.visible')
        cy.task('log', 'Successfully copied ,text verified on popup')

        cy.xpath(Cypress.env('MedRepVisitCnfrmOkBtn')).click()
        cy.task('log', 'Clicked on Ok button on pop up')
        cy.wait(2000)

        cy.xpath(Cypress.env('MedRepVisitMouseCopiedVisitPosition')).contains(this.Visitdata.Visit)
        cy.task('log', 'Verified that visit is copied successfully & visible on Calender on copied date')



        cy.xpath(Cypress.env('MedRepVisitMouseCopiedVisitPosition')).rightclick()
        cy.task('log', 'Right Clicked on visit')
        cy.wait(5000)

        cy.xpath(Cypress.env('MedRepVisitMouseRightClickCutBtn')).click()
        cy.task('log', 'Clicked on cut button')
        cy.wait(6000)

        cy.xpath(Cypress.env('MedRepVisitScreenCalenderRightClickMoveVisitpath')).rightclick()
        cy.task('log', 'Right Clicked on date on which user want to move visit')
        cy.wait(2000)

        cy.xpath(Cypress.env('MedRepVisitMouseRightClickPasteBtn')).click()
        cy.task('log', 'Clicked on Paste button')
        cy.wait(4000)

        cy.xpath(Cypress.env('MedRepRoghtClickVisitMovedPopUpTxtVerify')).should('be.visible')
        cy.task('log', 'Successfully moved ,text verified on popup')

        cy.xpath(Cypress.env('MedRepVisitCnfrmOkBtn')).click()
        cy.task('log', 'Clicked on Ok button on pop up')
        cy.wait(2000)

        cy.xpath(Cypress.env('MedRepVisitMouseMovedVisitPosition')).contains(this.Visitdata.Visit)
        cy.task('log', 'Verified that visit is moved successfully & visible on Calender on moved date')

        cy.xpath(Cypress.env('MedRepVisitMouseMovedVisitPosition')).rightclick()
        cy.task('log', 'Right Clicked on visit')
        cy.wait(4000)

        cy.xpath(Cypress.env('MedRepVisitMouseRightClickDeleteBtn')).click()
        cy.task('log', 'Clicked on Delete button')
        cy.wait(4000)

        cy.xpath(Cypress.env('MedRepRoghtClickVisitDeletedPopUpTxtVerify')).should('be.visible')
        cy.task('log', 'Successfully Deleted ,text verified on popup')

        cy.xpath(Cypress.env('MedRepVisitCnfrmOkBtn')).click()
        cy.task('log', 'Clicked on Ok button on pop up')
        cy.wait(2000)

        })
            
        })
/*
 * @Author: sachin 
 * @Date: 2021-11-17 11:26:57 
 * @Last Modified by: sachin
 * @Last Modified time: 2021-11-30 22:58:41
 */

/// <reference types="cypress" />
describe('Testing set , copy , move , Delete visit operations', function () {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('MedRep/VisitPlanning/VisitOperation').as('Visitdata')
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })

    })
    it('Testing create visit , move visit , delete visit from pop up', function () {

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

        cy.xpath(Cypress.env('MedRepVisitScreenCalenderDate1Selectpath')).click()
        cy.task('log', 'Clicked on date on calender screen page')
        cy.wait(4000)

        cy.get(Cypress.env('MedRepVisitSelectLocation')).type(this.Visitdata.Location)
        cy.wait(4000)
        cy.get(Cypress.env('MedRepVisitSelectLocation')).type('{downarrow}{enter}')
        cy.task('log', 'Selected Location from Location DropDown')
        cy.wait(7000)

        cy.get(Cypress.env('MedRepVisitSelectDoctor')).type(this.Visitdata.Doctor)
        cy.wait(2000)
        cy.get(Cypress.env('MedRepVisitSelectDoctor')).type('{downarrow}{enter}')
        
        cy.task('log', 'Selected Doctor from Doctor DropDown')
        cy.wait(2000)

        cy.get(Cypress.env('MedRepVisitSelectDemoPlan')).type(this.Visitdata.DemoPlan)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected DemoPlan from DemoPlan DropDown')
        cy.wait(2000)

        cy.get(Cypress.env('MedRepVisitObjectiveField')).type(this.Visitdata.Objective)
        cy.task('log', 'Entered Objective in Field')
        cy.wait(2000)


        cy.xpath(Cypress.env('MedRepVisitSaveVisitBtn')).click()
        cy.task('log', 'Clicked on Save Visit button on PopUp')
        cy.wait(2000)

        cy.xpath(Cypress.env('MedRepVisitSavedPopUpTxtVerify')).should('be.visible')
        cy.task('log', 'Visit successfully saved ,text verified on popup')

        cy.xpath(Cypress.env('MedRepVisitCnfrmOkBtn')).click()
        cy.task('log', 'Clicked on Ok button on pop up')
        cy.wait(2000)

        cy.xpath(Cypress.env('MedRepVisitCreatedVerifyPosition')).contains(this.Visitdata.Visit)
        cy.task('log', 'Verified that visit is created successfully & visible on Calender')

        cy.task('log', 'Now we will ve testing copy this visit to another date')

        cy.xpath(Cypress.env('MedRepVisitCreatedVerifyPosition')).click()
        cy.task('log', 'Clicked on visit')
        cy.wait(4000)


        cy.get(Cypress.env('MedRepVisitCalenderPopUpYearTitleBtn')).click()
        cy.wait(4000)
        
        cy.xpath(Cypress.env('MedRepVisitCalenderYearBtn')).click()
        cy.wait(2000)

        cy.xpath(Cypress.env('MedRepVisitCalenderMonthBtn')).click()
        cy.task('log', 'Selected Year & Month')
        cy.wait(2000)
        
        cy.xpath(Cypress.env('MedRepVisitCalenderOkBtn')).click()
        cy.wait(2000)


        cy.xpath(Cypress.env('MedRepVisitPopUpCalenderCopyDateSelectpath')).click()
        cy.task('log', 'Clicked on date on which we want to copy visit')
        cy.wait(4000)

        cy.get(Cypress.env('MedRepVisitCopyVisitBtn')).click()
        cy.task('log', 'Clicked on Copy Visit button on PopUp')
        cy.wait(2000)

        cy.xpath(Cypress.env('MedRepVisitCopiedPopUpTxtVerify')).should('be.visible')
        cy.task('log', 'Visit successfully copied ,text verified on popup')

        cy.xpath(Cypress.env('MedRepVisitCnfrmOkBtn')).click()
        cy.task('log', 'Clicked on Ok button on pop up')
        cy.wait(2000)

        cy.xpath(Cypress.env('MedRepVisitCopiedVisitPosition')).contains(this.Visitdata.Visit)
        cy.task('log', 'Verified that visit is copied successfully & visible on Calender on copied date')

        cy.xpath(Cypress.env('MedRepVisitCopiedVisitPosition')).click()
        cy.task('log', 'Clicked on Copied visit')
        cy.wait(4000)

        cy.get(Cypress.env('MedRepVisitDeleteVisitBtn')).click()
        cy.task('log', 'Clicked on Delete button on PopUp')
        cy.wait(2000)
        
        cy.xpath(Cypress.env('MedRepVisitDeleteCnfrmTextVerify')).should('be.visible')
        cy.task('log', 'Are you sure you want to delete?,text verified on popup')

        cy.xpath(Cypress.env('MedRepVisitCnfrmOkBtn')).click()
        cy.task('log', 'Clicked on Ok button on pop up')
        cy.wait(2000)

        cy.xpath(Cypress.env('MedRepVisitDeletedTextVerify')).should('be.visible')
        cy.task('log', 'Successfully deleted ,text verified on popup')

        cy.xpath(Cypress.env('MedRepVisitCnfrmOkBtn')).click()
        cy.task('log', 'Clicked on Ok button on pop up')
        cy.wait(2000)

        cy.task('log', 'Now we will be testing move visit to another date')


        cy.xpath(Cypress.env('MedRepVisitCreatedVerifyPosition')).click()
        cy.task('log', 'Clicked on visit')
        cy.wait(4000)

        cy.xpath(Cypress.env('MedRepVisitPopUpCalenderMoveDateSelectpath')).click()
        cy.task('log', 'Clicked on date on which we want to Move visit')
        cy.wait(4000)

        cy.get(Cypress.env('MedRepVisitMoveVisitBtn')).click()
        cy.task('log', 'Clicked on Move Visit button on PopUp')
        cy.wait(2000)

        cy.xpath(Cypress.env('MedRepVisitMovedPopUpTxtVerify')).should('be.visible')
        cy.task('log', 'Visit successfully moved ,text verified on popup')

        cy.xpath(Cypress.env('MedRepVisitCnfrmOkBtn')).click()
        cy.task('log', 'Clicked on Ok button on pop up')
        cy.wait(2000)

        cy.xpath(Cypress.env('MedRepVisitMovedVisitPosition')).contains(this.Visitdata.Visit)
        cy.task('log', 'Verified that visit is copied successfully & visible on Calender on copied date')

        cy.xpath(Cypress.env('MedRepVisitMovedVisitPosition')).click()
        cy.task('log', 'Clicked on Moved visit')
        cy.wait(4000)

        cy.get(Cypress.env('MedRepVisitDeleteVisitBtn')).click()
        cy.task('log', 'Clicked on Delete button on PopUp')
        cy.wait(2000)

        cy.xpath(Cypress.env('MedRepVisitDeleteCnfrmTextVerify')).should('be.visible')
        cy.task('log', 'Are you sure you want to delete?,text verified on popup')

        cy.xpath(Cypress.env('MedRepVisitCnfrmOkBtn')).click()
        cy.task('log', 'Clicked on Ok button on pop up')
        cy.wait(2000)

        cy.xpath(Cypress.env('MedRepVisitDeletedTextVerify')).should('be.visible')
        cy.task('log', 'Successfully deleted ,text verified on popup')

        cy.xpath(Cypress.env('MedRepVisitCnfrmOkBtn')).click()
        cy.task('log', 'Clicked on Ok button on pop up')
        cy.wait(2000)


        })
            
        })
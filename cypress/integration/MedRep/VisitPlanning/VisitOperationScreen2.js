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
        cy.fixture('MedRep/VisitPlanning/VisitOperation2').as('Visitdata')
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })

    })
    it('Testing create visit ,copy vist, move visit , delete visit from 2nd screen', function () {

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
            
        cy.xpath(Cypress.env('MedRepVisitPlanningPlanNewVisitBtn')).click()
        cy.task('log', 'Clicked Plan New Visit button')
        cy.wait(2000)

        cy.get(Cypress.env('MedRepVisitScreen2SelectMedRep')).type(this.Visitdata.MedRep)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected MedRep Type from DropDown')
        cy.wait(15000)

        cy.get(Cypress.env('MedRepVisitScreen2SelectDatePopUpBtn')).click()
        cy.task('log', 'Clicked Select Date Calender button')
        cy.wait(8000)

        cy.xpath(Cypress.env('MedRepVisitScreen2SetVisitDate')).click()
        cy.task('log', 'Selected Date for set visit')
        cy.wait(9000)

        cy.get(Cypress.env('MedRepVisitScreen2DoctorNameFilter')).type(this.Visitdata.Doctor)
        cy.get(Cypress.env('MedRepVisitScreen2DoctorNameFilter')).type('{enter}')
        cy.task('log', 'Entered Doctor name in filter to filter location & Pressed Enter')
        cy.wait(12000)

        cy.get(Cypress.env('MedRepVisitScreen2SelectLocCheckbox')).click()
        cy.task('log', 'Clicked on checkbox to select filtered location')
        cy.wait(5000)

        cy.get(Cypress.env('MedRepVisitScreen2SaveVisitBtn')).click()
        cy.task('log', 'Clicked on save Visit Button')
        cy.wait(2000)

        cy.xpath(Cypress.env('MedRepVisitScreen2VisitSavedTxtVerify')).should('be.visible')
        cy.task('log', 'Visit successfully saved ,text verified on popup')

        cy.xpath(Cypress.env('MedRepVisitCnfrmOkBtn')).click()
        cy.task('log', 'Clicked on Ok button on pop up')
        cy.wait(2000)




        cy.xpath(Cypress.env('MedRepVisitScreen2PlannedVisitTab')).click()
        cy.task('log', 'Clicked on PlannedVisitsTab')
        cy.wait(6000)

        cy.get(Cypress.env('MedRepPlannedVisitScreenDoctorNameFilter')).type(this.Visitdata.Doctor)
        cy.get(Cypress.env('MedRepPlannedVisitScreenDoctorNameFilter')).type('{enter}')
        cy.task('log', 'Entered Doctor name in filter to filter location & Pressed Enter')
        cy.wait(12000)

        cy.get(Cypress.env('MedRepVisitScreen2CreatedVisitVerify')).contains(this.Visitdata.CreatedVisitDate)
        cy.task('log', 'Verified that visit is created successfully & visible in Planned Visits for the date')

        cy.get(Cypress.env('MedRepPlannedVisitCheckbox')).click()
        cy.task('log', 'Clicked on checkbox to select filtered location')
        cy.wait(2000)

        cy.get(Cypress.env('MedRepVisitScreen2MoveBtn')).click()
        cy.task('log', 'Clicked on Move Visit Button')
        cy.wait(9000)

        cy.xpath(Cypress.env('MedRepVisitScreen2MoveVisitDate')).click()
        cy.task('log', 'Clicked on date on popup to select date to Move')
        cy.wait(2000)

        cy.get(Cypress.env('MedRepVisitScreen2PopUpSaveBtn')).click()
        cy.task('log', 'Clicked on save Button on popup')
        cy.wait(2000)

        cy.xpath(Cypress.env('MedRepVisitScreen2VisitSavedTxtVerify')).should('be.visible')
        cy.task('log', 'Visit successfully saved ,text verified on popup')

        cy.xpath(Cypress.env('MedRepVisitCnfrmOkBtn')).click()
        cy.task('log', 'Clicked on Ok button on pop up')
        cy.wait(2000)

        cy.get(Cypress.env('MedRepPlannedVisitScreenDoctorNameFilter')).clear().type(this.Visitdata.Doctor)
        cy.wait(4000)
        cy.get(Cypress.env('MedRepPlannedVisitScreenDoctorNameFilter')).type('{enter}')
        cy.task('log', 'Entered Doctor name in filter to filter location & Pressed Enter')
        cy.wait(4000)

        cy.get(Cypress.env('MedRepVisitScreen2CreatedVisitVerify')).contains(this.Visitdata.MovedVisitDate)
        cy.task('log', 'Verified that visit is Moved successfully & visible in Planned Visits for the date')




        cy.get(Cypress.env('MedRepPlannedVisitCheckbox')).click()
        cy.task('log', 'Clicked on checkbox to select filtered location')
        cy.wait(2000)

        cy.get(Cypress.env('MedRepVisitScreen2CopyBtn')).click()
        cy.task('log', 'Clicked on Copy Visit Button')
        cy.wait(9000)

        cy.xpath(Cypress.env('MedRepVisitScreen2SCopyVisitDate')).click()
        cy.task('log', 'Clicked on date on popup to select date to copy')
        cy.wait(2000)

        cy.get(Cypress.env('MedRepVisitScreen2PopUpSaveBtn')).click()
        cy.task('log', 'Clicked on save Button on popup')
        cy.wait(2000)

        cy.xpath(Cypress.env('MedRepVisitScreen2VisitSavedTxtVerify')).should('be.visible')
        cy.task('log', 'Visit successfully saved ,text verified on popup')

        cy.xpath(Cypress.env('MedRepVisitCnfrmOkBtn')).click()
        cy.task('log', 'Clicked on Ok button on pop up')
        cy.wait(4000)

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

        cy.xpath(Cypress.env('MedRepVisitCopiedVisitPosition')).contains(this.Visitdata.Visit)
        cy.task('log', 'Verified that visit is copied successfully & visible on Calender on copied date')

        cy.xpath(Cypress.env('MedRepVisitCopiedVisitPosition')).click()
        cy.task('log', 'Clicked on Copied visit')
        cy.wait(8000)

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
        cy.wait(4000)

        cy.xpath(Cypress.env('MedRepVisitMovedVisitPosition')).contains(this.Visitdata.Visit)
        cy.task('log', 'Verified that visit is Moved successfully & visible on Calender on Moved date')

        cy.xpath(Cypress.env('MedRepVisitMovedVisitPosition')).click()
        cy.task('log', 'Clicked on Moved visit')
        cy.wait(8000)

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
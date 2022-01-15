/*
 * @Author: sachin 
 * @Date: 2021-11-25 11:25:35 
 * @Last Modified by: sachin
 * @Last Modified time: 2021-11-25 18:25:01
 */


/// <reference types="cypress" />
describe('Create Visit Plan , Approve month visit plan', function () {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('MedRep/CopyMonthlyPlan/CopyMonthlyPlan').as('Visitdata')
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })

    })
    it('Copy ', function () {

        //Fetching the data from Fixture files

        cy.login(this.data.Admin, this.data.password)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')
        cy.task('log', 'Homepage is visible')

        cy.xpath(Cypress.env('MedRepModule')).click()
        cy.task('log', 'MedRep Menu Expanded')

        cy.xpath(Cypress.env('MedRepCopyMonthlyPlanSubmenu')).click()
        cy.task('log', 'Clicked Copy Monthly Plan Submenu')
        cy.wait(4000)

        cy.get(Cypress.env('DoctorsMgtSelectOrgDrpDwn')).click()
        cy.task('log', 'Select Organization DropDown Expanded')
        cy.wait(6000)


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

        cy.get(Cypress.env('MedRepCopyMonthlyPlanFromdatePopUpBtn')).click()
        cy.task('log', 'Clicked on from Date popup button')
        cy.wait(2000)

        cy.xpath(Cypress.env('MedRepCopyMonthlyPlanSelectYearBtn')).click()
        cy.wait(4000)
        
        cy.xpath(Cypress.env('MedRepCopyMonthlyPlanFromMonthBtn')).click()
        cy.wait(2000)

        cy.get(Cypress.env('MedRepUploadMonthlyVisitPlanDatePopUpOkBtn')).click()
        cy.task('log', 'Selected Month from which we want to copy visit')
        cy.wait(7000)

        cy.get(Cypress.env('MedRepCopyMonthlyPlanTodatePopUpBtn')).click()
        cy.task('log', 'Clicked on To Date popup button')
        cy.wait(2000)

        cy.xpath(Cypress.env('MedRepCopyMonthlyPlanSelectYearBtn')).click()
        cy.wait(4000)
        
        cy.xpath(Cypress.env('MedRepCopyMonthlyPlanToMonthBtn')).click()
        cy.wait(2000)

        cy.get(Cypress.env('MedRepUploadMonthlyVisitPlanDatePopUpOkBtn')).click()
        cy.task('log', 'Selected Month to which we want to copy visit')
        cy.wait(7000)


        cy.get(Cypress.env('MedRepCopyMonthlyPlanCopyByDrpDwn')).click()
        cy.wait(2000)
        cy.xpath(Cypress.env('MedRepCopyMonthlyPlanCopyByWeekDays')).click()
        cy.task('log', 'Selected Week days from Copied By Dropdown')
        cy.wait(2000)

        cy.get(Cypress.env('MedRepCopyMonthlyPlanCopyVisitsBtn')).click()
        cy.task('log', 'Clicked on Copy Visit button')
        cy.wait(4000)

        cy.xpath(Cypress.env('MedRepCopyMonthlyPlanCopiedPopUpTxtVerify')).should('be.visible')
        cy.task('log', 'Successfully Copied ,text verified on popup')

        cy.xpath(Cypress.env('MedRepVisitCnfrmOkBtn')).click()
        cy.task('log', 'Clicked on Ok button on pop up')
        cy.wait(2000)

        cy.task('log', 'Now we will go to visit planning module & check that visits copied to month')

         cy.xpath(Cypress.env('MedRepVisitPlanningSubmenu')).click()
        cy.task('log', 'Clicked VisitPlanning Submenu')
        cy.wait(6000)

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
        
        cy.xpath(Cypress.env('MedRepCopyMonthlyPlanToMonthBtn')).click()
        cy.wait(2000)
        
        cy.xpath(Cypress.env('MedRepVisitCalenderOkBtn')).click()
        cy.wait(2000)

        cy.xpath(Cypress.env('MedRepCopyMonthlyPlanCopiedDatePath')).click()
        cy.task('log', 'Clicked on date on calender pop up')
        cy.wait(4000)

        cy.xpath(Cypress.env('MedRepCopyMonthlyPlanCopiedVisitPath')).contains(this.Visitdata.Visit)
        cy.task('log', 'verified that visit copied & visible on copied date on copied month')

        cy.xpath(Cypress.env('MedRepCopyMonthlyPlanCopiedVisitPath')).rightclick()
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
/*
 * @Author: sachin 
 * @Date: 2021-11-23 12:25:35 
 * @Last Modified by: sachin
 * @Last Modified time: 2021-11-23 19:06:09
 */


/// <reference types="cypress" />
describe('Create Visit Plan , Approve month visit plan', function () {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('MedRep/ApproveMonthlyPlan/MonthlyPlan').as('Visitdata')
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })

    })
    it('Create visit from user ', function () {

        //Fetching the data from Fixture files

        cy.login(this.data.email1, this.data.password1)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        // cy.login(this.data.Admin, this.data.password)
        // cy.task('log', 'Login into the website using valid Username and valid Password')

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

        cy.xpath(Cypress.env('MedRepVisitCalenderApproveMonthBtn')).click()
        cy.task('log', 'Selected Year & Month')
        cy.wait(2000)
        
        cy.xpath(Cypress.env('MedRepVisitCalenderOkBtn')).click()
        cy.wait(2000)

        cy.xpath(Cypress.env('MedRepApproveVisitPopUpDatePath')).click()
        cy.task('log', 'Clicked on date on calender pop up')
        cy.wait(4000)

        cy.xpath(Cypress.env('MedRepApproveVisitDate1Selectpath')).click()
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

        cy.xpath(Cypress.env('MedRepApproveVisitCreatedVerifyPosition')).contains(this.Visitdata.Visit)
        cy.task('log', 'Verified that visit is created successfully & visible on Calender')

        cy.task('log', 'Now we will approve this month visit via login from admin')


        })

        it('Approving monthly visit from admin ', function () {

            //Fetching the data from Fixture files

        cy.login(this.data.Admin, this.data.password)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')
        cy.task('log', 'Homepage is visible')

        cy.xpath(Cypress.env('MedRepModule')).click()
        cy.task('log', 'MedRep Menu Expanded')

        cy.xpath(Cypress.env('MedRepApproveMonthlyPlanSubmenu')).click()
        cy.task('log', 'Clicked Approve Monthly Plan Submenu')
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


        cy.get(Cypress.env('MedRepApproveVisitEmpFilter')).type(this.Visitdata.MedRep)
        .type('{enter}')
        cy.task('log', 'Entered EmpName in filter and Press Enter button')
        cy.wait(5000)

        cy.get(Cypress.env('MedRepApproveVisitMonthYearFilter')).type(this.Visitdata.MonthYear)
        .type('{enter}')
        cy.task('log', 'Entered MonthYear in filter and Press Enter button')
        cy.wait(5000)

        cy.get(Cypress.env('MedRepApproveVisitsStatusPosition')).contains('Pending')
        cy.task('log', 'Verified that Month visit status is pending before approving it')

        cy.get(Cypress.env('MedRepApproveVisitViewApproveBtn')).click()
        cy.task('log', 'Clicked ViewApprove Button on Grid')
        cy.wait(4000)

        cy.xpath(Cypress.env('MedRepApproveVisitPlannedVisitTab')).click()
        cy.task('log', 'Clicked Planned Visits Tab')
        cy.wait(2000)

        cy.get(Cypress.env('MedRepApproveVisitSearchedVisitCheckbox')).click()
        cy.task('log', 'Clicked on checkbox to select one visit')
        cy.wait(2000)

        cy.get(Cypress.env('MedRepApproveApproveVisitsBtn')).click()
        cy.task('log', 'Clicked Approve Visits Button')
        cy.wait(4000)

        cy.xpath(Cypress.env('MedRepApproveVisitsCnfrmPopUpTxtVerify')).should('be.visible')
        cy.task('log', 'Would you like to approve the selected visits? ,text verified on popup')

        cy.xpath(Cypress.env('MedRepVisitCnfrmOkBtn')).click()
        cy.task('log', 'Clicked on Ok button on pop up')
        cy.wait(2000)

        cy.xpath(Cypress.env('MedRepApproveVisitsApprovedTxtVerify')).should('be.visible')
        cy.task('log', 'Selected visits are approved successfully ,text verified on popup')

        cy.xpath(Cypress.env('MedRepVisitCnfrmOkBtn')).click()
        cy.task('log', 'Clicked on Ok button on pop up')
        cy.wait(2000)

        cy.get(Cypress.env('MedRepApproveVisitsGoBackBtn')).click()
        cy.task('log', 'Clicked on Go Back Button')
        cy.wait(5000)

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


        cy.get(Cypress.env('MedRepApproveVisitEmpFilter')).type(this.Visitdata.MedRep)
        .type('{enter}')
        cy.task('log', 'Entered EmpName in filter and Press Enter button')
        cy.wait(5000)

        cy.get(Cypress.env('MedRepApproveVisitMonthYearFilter')).type(this.Visitdata.MonthYear)
        .type('{enter}')
        cy.task('log', 'Entered MonthYear in filter and Press Enter button')
        cy.wait(5000)

        cy.get(Cypress.env('MedRepApproveVisitsStatusPosition')).contains('Approved')
        cy.task('log', 'Verified that Month visit status is approved on grid')
        cy.wait(3000)

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

        cy.xpath(Cypress.env('MedRepVisitCalenderApproveMonthBtn')).click()
        cy.task('log', 'Selected Year & Month')
        cy.wait(2000)
        
        cy.xpath(Cypress.env('MedRepVisitCalenderOkBtn')).click()
        cy.wait(2000)

        cy.xpath(Cypress.env('MedRepApproveVisitPopUpDatePath')).click()
        cy.task('log', 'Clicked on date on calender pop up')
        cy.wait(4000)

        cy.xpath(Cypress.env('MedRepApproveVisitCreatedVerifyPosition')).contains(this.Visitdata.Visit)

        cy.xpath(Cypress.env('MedRepApproveVisitCreatedVerifyPosition')).rightclick()
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
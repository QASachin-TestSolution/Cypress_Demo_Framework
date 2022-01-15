/*
 * @Author: sachin 
 * @Date: 2021-11-22 12:52:10 
 * @Last Modified by: sachin
 * @Last Modified time: 2021-11-22 17:21:27
 */


/// <reference types="cypress" />
describe('Testing Upload Monthly Plan', function () {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('MedRep/MonthlyPlan/UploadMonthlyPlan').as('Visitdata')
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })
    })
    it('Upload Upload Monthly Visit Plan & Verify', function () {

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
        
        cy.xpath(Cypress.env('MedRepUploadMonthlyVisitPlanMonthBtn')).click()
        cy.wait(2000)

        cy.get(Cypress.env('MedRepUploadMonthlyVisitPlanDatePopUpOkBtn')).click()
        cy.task('log', 'Selected Year & Month')
        cy.wait(2000)
            
        cy.task('log', 'Uploading LocationCalls Excel File')
        cy.fixture('MedRep/MonthlyPlan/MonthlyPlan.xls', 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then(fileContent => {
                cy.get(Cypress.env('MedRepUploadMonthlyVisitPlanUploadBtn')).attachFile({
                    fileContent,
                    fileName: 'MonthlyPlan.xls',
                    mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    encoding: 'utf8'
                })
            })
        
        cy.wait(7000)

        cy.xpath(Cypress.env('DoctorsMgtUploadCnfrmText')).should('be.visible')
        cy.task('log', 'Successfully updated text verified on pop up')
       
        cy.xpath(Cypress.env('CustGeoLocUploadCnfrmOk')).click()
        cy.task('log', 'Clicked on Ok button of successfully uploaded pop-up')
        cy.wait(2000)

        cy.task('log', 'Now we will verify that uploaded visit is set on calender on specified date')

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
        
        cy.xpath(Cypress.env('MedRepUploadMonthlyVisitPlanYearBtn')).click()
        cy.wait(2000)

        cy.xpath(Cypress.env('MedRepUploadMonthlyVisitPlanMonthBtn')).click()
        cy.task('log', 'Selected Year & Month')
        cy.wait(2000)
        
        cy.xpath(Cypress.env('MedRepVisitCalenderOkBtn')).click()
        cy.wait(2000)

        cy.xpath(Cypress.env('MedRepVisitUploadPopUpCalenderDatePath')).click()
        cy.task('log', 'Clicked on date on calender pop up')
        cy.wait(4000)

        cy.xpath(Cypress.env('MedRepUploadMonthlyVisitPostionOnCalender')).contains(this.Visitdata.Visit)
        cy.task('log', 'Verified that uploaded visit is set successfully & visible on Calender')

        cy.xpath(Cypress.env('MedRepUploadMonthlyVisitPostionOnCalender')).rightclick()
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
/*
 * @Author: sachin 
 * @Date: 2021-11-12 14:30:35 
 * @Last Modified by: sachin
 * @Last Modified time: 2021-11-15 17:16:56
 */

/// <reference types="cypress" />
describe('Testing Upload MedRepDoctorCalls Assignment', function () {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('MedRep/DoctorCallsAssignment/UploadDoctorCalls').as('Doctordata')
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })
    })
    it('Upload MedRep DoctorsCalls & Verify', function () {

        //Fetching the data from Fixture files
        cy.login(this.data.Admin, this.data.password)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')
        cy.task('log', 'Homepage is visible')

        cy.xpath(Cypress.env('MedRepModule')).click()
        cy.task('log', 'MedRep Menu Expanded')

        cy.xpath(Cypress.env('MedRepDoctorcallsAssignment')).click()
        cy.task('log', 'Clicked Med Rep Doctor-Calls--Assignment Submenu')
        cy.wait(4000)

        cy.get(Cypress.env('DoctorsMgtSelectOrgDrpDwn')).click()
        cy.task('log', 'Select Organization DropDown Expanded')
        cy.wait(3000)

        cy.task('log', 'Uploading DoctorCalls Excel File')
        if (this.Doctordata.Organization.toUpperCase() == 'POOJA_20OCT_COMMON') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg1')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)


        }

        else if (this.Doctordata.Organization.toUpperCase() == 'POOJA-20OCT_MARKETING') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg2')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)

        }



        else if (this.Doctordata.Organization.toUpperCase() == 'SITE - 5831') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg3')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
        }


        else if (this.Doctordata.Organization.toUpperCase() == 'SITE - 5800') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg4')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
        }

        cy.get(Cypress.env('LocAssignSelectMedRep')).type(this.Doctordata.MedRep)
            .type('{downarrow}{enter}')
        cy.task('log', 'Selected MedRep Type from DropDown')
        cy.wait(6000)

        cy.get(Cypress.env('MedRepOverriteDoctorAssignCheckBox')).click()
        cy.task('log', 'Overwrite existing assignments checkbox checked')
        cy.wait(2000)
            

        cy.fixture('MedRep/DoctorCallsAssignment/DoctorCallsTemplate.xls', 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then(fileContent => {
                cy.get(Cypress.env('DoctorsMgtDoctorUpload')).attachFile({
                    fileContent,
                    fileName: 'DoctorCallsTemplate.xls',
                    mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    encoding: 'utf8'
                })
            })
        cy.wait(6000)

        cy.xpath(Cypress.env('DoctorsMgtUploadCnfrmText')).should('be.visible')
        cy.task('log', 'Successfully updated text verified on pop up')
       
        cy.xpath(Cypress.env('CustGeoLocUploadCnfrmOk')).click()
        cy.task('log', 'Clicked on Ok button of successfully uploaded pop-up')
        cy.wait(2000)
        cy.reload()
        cy.wait(4000)

        cy.get(Cypress.env('DoctorsMgtSelectOrgDrpDwn')).click()
        cy.task('log', 'Select Organization DropDown Expanded')
        cy.wait(3000)

        if (this.Doctordata.Organization.toUpperCase() == 'POOJA_20OCT_COMMON') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg1')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(8000)


        }

        else if (this.Doctordata.Organization.toUpperCase() == 'POOJA-20OCT_MARKETING') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg2')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(8000)

        }



        else if (this.Doctordata.Organization.toUpperCase() == 'SITE - 5831') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg3')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(8000)
        }


        else if (this.Doctordata.Organization.toUpperCase() == 'SITE - 5800') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg4')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(8000)
        }

        cy.get(Cypress.env('LocAssignSelectMedRep')).type(this.Doctordata.MedRep)
            .type('{downarrow}{enter}')
        cy.task('log', 'Selected MedRep Type from DropDown')
        cy.wait(8000)

        cy.get(Cypress.env('MedRepDoctorcallsFilterDoctorName')).type(this.Doctordata.Doctor)
        .type('{enter}')
        cy.task('log', 'Entered Doctor Name in Filter serach field & Press Enter Button')
        cy.wait(4000)

        cy.get(Cypress.env('MedRepDoctorcallsDoctorNameVerify')).contains(this.Doctordata.Doctor)
        cy.task('log', 'Verified uploaded Doctor Name')
        cy.wait(2000)

        cy.get(Cypress.env('MedRepDoctorcallsDoctorCodeVerify')).contains(this.Doctordata.DoctorCode)
        cy.task('log', 'Verified uploaded Doctor Code')
        cy.wait(2000)

        cy.xpath(Cypress.env('MedRepDoctorcallsRequiredVisitVerify')).contains(this.Doctordata.RequiredVisits)
        cy.task('log', 'Verified uploaded Required Visit')
        cy.wait(2000)

        

    })

})
/*
 * @Author: sachin 
 * @Date: 2021-11-09 13:35:49 
 * @Last Modified by: sachin
 * @Last Modified time: 2021-11-15 17:19:43
 */
/// <reference types="cypress" />
describe('Upload Doctors', function () {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('MedRep/LocationMgt/UploadLocation').as('Locationdata')
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })
    })
    it('Upload & verify Doctor excel file on Doctor Management Screen', function () {

        //Fetching the data from Fixture files
        cy.login(this.data.Admin, this.data.password)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')
        cy.task('log', 'Homepage is visible')

        cy.xpath(Cypress.env('MedRepModule')).click()
        cy.task('log', 'MedRep Menu Expanded')

        cy.xpath(Cypress.env('LocationsMgtSubmenu')).click()
        cy.task('log', 'Clicked LocationsMgt Submenu')
        cy.wait(4000)

        cy.get(Cypress.env('LocationsMgtSelectOrgDrpDwn')).click()
        cy.task('log', 'Select Organization DropDown Expanded')
        cy.wait(3000)


        if (this.Locationdata.Organization.toUpperCase() == 'POOJA_20OCT_COMMON') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg1')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
            
            
        }

        else if (this.Locationdata.Organization.toUpperCase() == 'POOJA-20OCT_MARKETING') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg2')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
            
        }



        else if (this.Locationdata.Organization.toUpperCase() == 'SITE - 5831') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg3')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
        }
    

        else if (this.Locationdata.Organization.toUpperCase() == 'SITE - 5800') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg4')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
            }

    
        cy.task('log', 'Uploading Locations Excel File')
        cy.fixture('MedRep/LocationMgt/Location_Contacts.xls', 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then(fileContent => {
                cy.get(Cypress.env('LocationMgtLocationUpload')).attachFile({
                    fileContent,
                    fileName: 'Location_Contacts.xls',
                    mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    encoding: 'utf8'
                })
            })
        cy.wait(4000)

        cy.xpath(Cypress.env('DoctorsMgtUploadCnfrmText')).should('be.visible')
        cy.task('log', 'Successfully updated text verified on pop up')
       
        cy.xpath(Cypress.env('CustGeoLocUploadCnfrmOk')).click()
        cy.task('log', 'Clicked on Ok button of successfully uploaded pop-up')
        cy.wait(4000)
        cy.reload()

        cy.get(Cypress.env('DoctorsMgtSelectOrgDrpDwn')).click()
        cy.task('log', 'Select Organization DropDown Expanded')
        cy.wait(3000)


        if (this.Locationdata.Organization.toUpperCase() == 'POOJA_20OCT_COMMON') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg1')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
            
            
        }

        else if (this.Locationdata.Organization.toUpperCase() == 'POOJA-20OCT_MARKETING') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg2')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
            
        }



        else if (this.Locationdata.Organization.toUpperCase() == 'SITE - 5831') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg3')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
        }
    

        else if (this.Locationdata.Organization.toUpperCase() == 'SITE - 5800') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg4')).click()
            cy.task('log', 'Selected Organiztion from dropdown')
            cy.wait(6000)
            }

            cy.get(Cypress.env('LocationsMgtLocationNameFilter')).type(this.Locationdata.Name)
            .type('{enter}')
            cy.task('log', 'Entered Name and press enter button')
            cy.wait(5000)
    
            cy.get(Cypress.env('LocationsMgtRoadNameVerify')).contains(this.Locationdata.Road)
            cy.task('log', 'Verified Road name in searched record')
    
            cy.get(Cypress.env('LocationsMgtAreaVerify')).contains(this.Locationdata.Area)
            cy.task('log', 'Verified Area in searched record')
        
    })

})
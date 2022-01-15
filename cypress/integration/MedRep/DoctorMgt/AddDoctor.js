/*
 * @Author: sachin 
 * @Date: 2021-11-09 13:34:51 
 * @Last Modified by:   sachin 
 * @Last Modified time: 2021-11-09 13:34:51 
 */
/// <reference types="cypress" />
describe('Testing Add ,Delete doctor Functionality', function () {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('MedRep/DoctorMgt/AddDoctor').as('Doctordata')
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })
    })
    it('Create Doctor , Verify created , Delete Doctor', function () {

        //Fetching the data from Fixture files
        cy.login(this.data.Admin, this.data.password)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')
        cy.task('log', 'Homepage is visible')

        cy.xpath(Cypress.env('MedRepModule')).click()
        cy.task('log', 'MedRep Menu Expanded')

        cy.xpath(Cypress.env('DoctorsMgtSubmenu')).click()
        cy.task('log', 'Clicked DoctorsMgt Submenu')
        cy.wait(4000)

        cy.get(Cypress.env('DoctorsMgtSelectOrgDrpDwn')).click()
        cy.task('log', 'Select Organization DropDown Expanded')
        cy.wait(3000)


        if (this.Doctordata.Organization.toUpperCase() == 'POOJA_20OCT_COMMON') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg1')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
            
            
        }

        else if (this.Userdata.Organization.toUpperCase() == 'POOJA-20OCT_MARKETING') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg2')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
            
        }



        else if (this.Userdata.Organization.toUpperCase() == 'SITE - 5831') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg3')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
        }
    

        else if (this.Userdata.Organization.toUpperCase() == 'SITE - 5800') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg4')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
            }


        cy.xpath(Cypress.env('DoctorsMgtAddNewDoctorBtn')).click()
        cy.task('log', 'Clicked Add button')
        cy.wait(5000)

        cy.get(Cypress.env('DoctorsMgtAddDoctorTitle')).type(this.Doctordata.DoctorTitle)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected Title from Title DropDown')

        cy.get(Cypress.env('DoctorsMgtAddDoctorSpeciality')).type(this.Doctordata.Speciality)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected Speciality from Speciality DropDown')

        cy.get(Cypress.env('DoctorsMgtAddDoctorClass')).type(this.Doctordata.Class)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected Class from the Class DropDown')

        cy.get(Cypress.env('DoctorsMgtAddDoctorName')).type(this.Doctordata.Name)
        cy.task('log', 'Entered Name in Name field')

        cy.get(Cypress.env('DoctorsMgtAddDoctorEmail')).type(this.Doctordata.Email)
        cy.task('log', 'Entered Email in Email field')
        cy.wait(2000)

        cy.xpath(Cypress.env('DoctorsMgtDoctorAdditionalInfoTab')).click()
        cy.task('log', 'Clicked on AdditionalInfo Tab')



        cy.get(Cypress.env('DoctorsMgtAddDoctorAddress1')).type(this.Doctordata.Address1)
        cy.task('log', 'Entered address in address1 field')

        cy.get(Cypress.env('DoctorsMgtAddDoctorCity')).type(this.Doctordata.City)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected City from City DropDown')

        cy.get(Cypress.env('DoctorsMgtAddDoctorPostalCode')).type(this.Doctordata.PostalCode)
        cy.task('log', 'Entered PostalCode')

        cy.get(Cypress.env('DoctorsMgtAddDoctorState')).type(this.Doctordata.State)
        cy.task('log', 'Entered State')
        cy.wait(2000)

        cy.xpath(Cypress.env('DoctorsMgtDoctorVisitsLocationsTab')).click()
        cy.task('log', 'Clicked on VisitsLocations Tab')

        cy.get(Cypress.env('DoctorsMgtDoctorLocSearchTextField')).type(this.Doctordata.Location)
        cy.task('log', 'Entered Location in location search field')

        cy.get(Cypress.env('DoctorsMgtDoctorLocSearchBtn')).click()
        cy.task('log', 'Clicked on search button ')
        cy.wait(4000)

        cy.get(Cypress.env('DoctorsMgtDoctorAvailableLoc')).click()
        cy.task('log', 'Selected location')
        cy.wait(2000)

        cy.get(Cypress.env('DoctorsMgtAssignLocForwardBtn')).click()
        cy.task('log', 'Click Arrow button to assign location')
        cy.wait(4000)

        cy.get(Cypress.env('DoctorsMgtDoctorAssignedLoc')).should('be.visible')
        cy.task('log', 'Verified that location shifted in assigned location right side window')
        cy.wait(2000)

        cy.get(Cypress.env('DoctorsMgtDoctorSaveBtn')).click()
        cy.task('log', 'Clicked on save Button')
        cy.wait(4000)

        cy.xpath(Cypress.env('DoctorsMgtSavedTextVerify')).should('be.visible')
        cy.task('log', 'Saved successfully text verified on pop up')

        cy.xpath(Cypress.env('ManageUserCnfrmOkBtn')).click()
        cy.task('log', 'Clicked on Ok button on pop up')
        cy.wait(2000)
        cy.reload()
        cy.wait(4000)



        // Verify Doctor via search using filters

        cy.get(Cypress.env('DoctorsMgtSelectOrgDrpDwn')).click()
        cy.task('log', 'Select Organization DropDown Expanded')
        cy.wait(3000)



        if (this.Doctordata.Organization.toUpperCase() == 'POOJA_20OCT_COMMON') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg1')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
            
            
        }

        else if (this.Userdata.Organization.toUpperCase() == 'POOJA-20OCT_MARKETING') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg2')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
            
        }



        else if (this.Userdata.Organization.toUpperCase() == 'SITE - 5831') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg3')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
        }
    

        else if (this.Userdata.Organization.toUpperCase() == 'SITE - 5800') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg4')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
            }


        cy.get(Cypress.env('DoctorsMgtNameSearchFilter')).type(this.Doctordata.Name)
        .type('{enter}')
        cy.task('log', 'Entered Name and press enter button')
        cy.wait(5000)


        cy.get(Cypress.env('DoctorsMgtNameVerify')).contains(this.Doctordata.Name)
        cy.task('log', 'Verified doctor Name in searched record')

        cy.get(Cypress.env('DoctorsMgtSpecialityVerify')).contains(this.Doctordata.Speciality)
        cy.task('log', 'Verified doctor Speciality in searched record')

        cy.get(Cypress.env('DoctorsMgtAddressVerify')).contains(this.Doctordata.Address1)
        cy.task('log', 'Verified doctor Address in searched record')


        //Deleting doctor after verification

        cy.get(Cypress.env('DoctorsMgtOngridDeleteBtn')).click()
        cy.task('log', 'Clicked on delete button on grid')

        cy.xpath(Cypress.env('DoctorsMgtDeleteCnfrmTextVerify')).should('be.visible')
        cy.task('log', 'Are you sure to delete this item? ,text verified on popup')

        cy.xpath(Cypress.env('ManageUserCnfrmOkBtn')).click()
        cy.task('log', 'Clicked on Ok button on pop up')

        cy.xpath(Cypress.env('DoctorsMgtDeletedTextVerify')).should('be.visible')
        cy.task('log', 'Successfully deleted ,text verified on popup')

        cy.xpath(Cypress.env('ManageUserCnfrmOkBtn')).click()
        cy.task('log', 'Clicked on Ok button on pop up')



        })
            
        })
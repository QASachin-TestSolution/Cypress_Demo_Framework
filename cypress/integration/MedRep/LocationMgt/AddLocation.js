/*
 * @Author: sachin 
 * @Date: 2021-11-09 13:35:28 
 * @Last Modified by:   sachin 
 * @Last Modified time: 2021-11-09 13:35:28 
 */
/// <reference types="cypress" />
describe('Testing Add ,Delete Location Functionality', function () {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('MedRep/LocationMgt/AddLocation').as('Locationdata')
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })
    })
    it('Create Location , Verify created , Delete Location', function () {

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


        cy.get(Cypress.env('LocationsMgtAddNewLocationBtn')).click()
        cy.task('log', 'Clicked Add Location button')
        cy.wait(5000)

        cy.get(Cypress.env('LocationsMgtAddLocationTypeDrpDwn')).type(this.Locationdata.LocationType)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected Location Type from DropDown')
        cy.wait(3000)

        cy.get(Cypress.env('LocationsMgtAddLocationPhone')).type(this.Locationdata.Phone)
        cy.task('log', 'Entered Phone Number in Phone Field')
        cy.wait(3000)

        cy.get(Cypress.env('LocationsMgtAddLocationName')).type(this.Locationdata.Name)
        cy.task('log', 'Entered Name in Name field')
        cy.wait(2000)
        cy.get(Cypress.env('LocationsMgtAddLocationEmail')).click()
        cy.wait(4000)
        cy.get(Cypress.env('LocationsMgtAddLocationEmail')).type(this.Locationdata.Email)
        cy.task('log', 'Entered Email in Email field')
        cy.wait(2000)

        cy.get(Cypress.env('LocationsMgtAddLocationSelectArea')).type(this.Locationdata.Area)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected Area from the Area DropDown')
        cy.wait(2000)

        cy.xpath(Cypress.env('LocationsMgtAddLocationRoadField')).type(this.Locationdata.Road)
        cy.task('log', 'Entered Road/St. name in Road field')
        cy.wait(2000)

        cy.xpath(Cypress.env('LocationsMgtAddLocationAdditionalInfoTab')).click()
        cy.task('log', 'Clicked on AdditionalInfo Tab')
        cy.wait(2000)

        cy.get(Cypress.env('LocationsMgtAddLocationLocality')).type(this.Locationdata.Locality)
        cy.task('log', 'Entered Locality in Locality field')

        cy.get(Cypress.env('LocationsMgtAddLocationPostalCode')).type(this.Locationdata.PostalCode)
        cy.task('log', 'Entered PostalCode')

        cy.get(Cypress.env('LocationsMgtAddLocationState')).type(this.Locationdata.State)
        cy.task('log', 'Entered State')
        cy.wait(2000)

        cy.xpath(Cypress.env('LocationsMgtAddLocationGEOLocationTab')).click()
        cy.task('log', 'Clicked on GEOLocation Tab')
        cy.wait(3000)

        function random_value(Latitudes) {

            return Latitudes[Math.floor(Math.random() * Latitudes.length)];

        }

        function random_value(Longitudes) {

            return Longitudes[Math.floor(Math.random() * Longitudes.length)];

        }
  
        const Latitudes = [25.513400000000000,25.375900000000000,26.017600000000000,25.654900000000000];
        let Latitude= random_value(Latitudes)

        const Longitudes = [54.544500000000000,54.198600000000000,54.253600000000000,55.187500000000000];
        let Longitude = random_value(Longitudes)
        
        cy.get(Cypress.env('LocationsMgtLocationLattitudeField')).type(Latitude)
        cy.task('log', 'Latitude Value entered in field')
       
        cy.get(Cypress.env('LocationsMgtLocationLongitudeField')).type(Longitude)
        cy.task('log', 'Longitude Value entered in field')
        cy.wait(3000)

        cy.xpath(Cypress.env('LocationsMgtAddLocationContactsTab')).click()
        cy.task('log', 'Clicked on Contacts Tab')
        cy.wait(3000)

        cy.get(Cypress.env('LocationsMgtAddLocationContactsTitle')).type(this.Locationdata.Title)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected Title from the Title DropDown')
        cy.wait(2000)

        cy.get(Cypress.env('LocationsMgtAddLocationContactsCity')).type(this.Locationdata.City)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected City from the City DropDown')
        cy.wait(2000)

        cy.get(Cypress.env('LocationsMgtAddLocationContactsPhone')).type(this.Locationdata.Phone)
        cy.task('log', 'Entered Phone Number in Phone field')

        cy.get(Cypress.env('LocationsMgtAddLocationContactsName')).type(this.Locationdata.ContactName)
        cy.task('log', 'Entered Name in Name field')

        cy.get(Cypress.env('LocationsMgtAddLocationContactsEmail')).type(this.Locationdata.ContactEmail)
        cy.task('log', 'Entered Email in Email field')

        cy.get(Cypress.env('LocationsMgtAddLocationContactsAddContactBtn')).click()
        cy.task('log', 'Clicked on Add Contact button ')
        cy.wait(4000)

        cy.get(Cypress.env('LocationsMgtAddLocationContactsVerify')).contains(this.Locationdata.ContactEmail)
        cy.task('log', 'Verified Contact is added in list')

        cy.get(Cypress.env('LocationsMgtAddLocationSaveBtn')).click()
        cy.task('log', 'Clicked on save Button')
        cy.wait(4000)

        cy.xpath(Cypress.env('DoctorsMgtSavedTextVerify')).should('be.visible')
        cy.task('log', 'Saved successfully text verified on pop up')

        cy.xpath(Cypress.env('ManageUserCnfrmOkBtn')).click()
        cy.task('log', 'Clicked on Ok button on pop up')
        cy.wait(2000)
        cy.reload()
        cy.wait(4000)



        // Verify Location via search using filters

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


        cy.get(Cypress.env('LocationsMgtLocationNameFilter')).type(this.Locationdata.Name)
        .type('{enter}')
        cy.task('log', 'Entered Name and press enter button')
        cy.wait(5000)


        cy.get(Cypress.env('LocationsMgtNameVerify')).contains(this.Locationdata.Name)
        cy.task('log', 'Verified Location Name in searched record')

        cy.get(Cypress.env('LocationsMgtRoadNameVerify')).contains(this.Locationdata.Road)
        cy.task('log', 'Verified Road name in searched record')

        cy.get(Cypress.env('LocationsMgtAreaVerify')).contains(this.Locationdata.Area)
        cy.task('log', 'Verified Area in searched record')


        //Deleting doctor after verification

        cy.get(Cypress.env('LocationsMgtOngridDeleteBtn')).click()
        cy.task('log', 'Clicked on delete button on grid')

        cy.xpath(Cypress.env('DoctorsMgtDeleteCnfrmTextVerify')).should('be.visible')
        cy.task('log', 'Are you sure to delete this item? ,text verified on popup')

        cy.xpath(Cypress.env('ManageUserCnfrmOkBtn')).click()
        cy.task('log', 'Clicked on Ok button on pop up')

        cy.xpath(Cypress.env('DoctorsMgtDeletedTextVerify')).should('be.visible')
        cy.task('log', 'Successfully deleted ,text verified on popup')

        cy.xpath(Cypress.env('ManageUserCnfrmOkBtn')).click()
        cy.task('log', 'Clicked on Ok button on pop up')

        cy.get(Cypress.env('LocationsMgtGridNoRecordTextVerify')).contains('No records to display.')
        cy.task('log', 'Verified No records to display. text on Grid')

        


        })
            
        })
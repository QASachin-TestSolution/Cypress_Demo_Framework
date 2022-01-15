/*
 * @Author: sachin 
 * @Date: 2021-11-09 13:35:35 
 * @Last Modified by:   sachin 
 * @Last Modified time: 2021-11-09 13:35:35 
 */
/// <reference types="cypress" />
describe('Testing Edit Location Functionality', function () {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('MedRep/LocationMgt/EditLocation').as('Locationdata')
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })
    })
    it('Edit Location details , Verify updated details', function () {

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

        cy.get(Cypress.env('LocationsMgtLocationNameFilter')).type(this.Locationdata.Name)
        .type('{enter}')
        cy.task('log', 'Entered Name and press enter button')
        cy.wait(5000)


        cy.get(Cypress.env('LocationMgtOngridEditBtn')).click()
        cy.task('log', 'Clicked Edit button')
        cy.wait(5000)

        var PhoneNumber = Math.floor(Math.random() * 9000000000) + 1000000000;



        function random_value(Areas) {

            return Areas[Math.floor(Math.random() * Areas.length)];

        }
  
        const Areas = ['Bur dubai','Fujairah','Sharjah','Ajman','Abu Dhabi','Al Ain'];
        let Area= random_value(Areas)


        function random_value(Emails) {

            return Emails[Math.floor(Math.random() * Emails.length)];

        }
  
        const Emails = ['Cy1@mailinator.com','Cy2@mailinator.com','Cy3@mailinator.com','Cy4@mailinator.com'];
        let Email= random_value(Emails)

        cy.get(Cypress.env('LocationsMgtAddLocationPhone')).clear().type(PhoneNumber)
        cy.task('log', 'Entered New Phone Number in Phone Field')
        cy.wait(3000)
        cy.get(Cypress.env('LocationsMgtAddLocationEmail')).clear().type(Email)
        cy.task('log', 'Entered New Email in Email field')
        cy.wait(2000)

        cy.get(Cypress.env('LocationsMgtAddLocationSelectArea')).type(Area)
        .type('{downarrow}{enter}')
        cy.task('log', 'Updated Area from the Area DropDown')
        cy.wait(2000)

        cy.xpath(Cypress.env('LocationsMgtAddLocationRoadField')).clear().type(this.Locationdata.Road)
        cy.task('log', 'Entered New Road/St. name in Road field')
        cy.wait(2000)

        cy.xpath(Cypress.env('LocationsMgtAddLocationAdditionalInfoTab')).click()
        cy.task('log', 'Clicked on AdditionalInfo Tab')
        cy.wait(5000)

        cy.get(Cypress.env('LocationsMgtAddLocationLocality')).clear().type(this.Locationdata.Locality)
        cy.task('log', 'Entered Locality in Locality field')

        cy.get(Cypress.env('LocationsMgtAddLocationPostalCode')).clear().type(this.Locationdata.PostalCode)
        cy.task('log', 'Entered PostalCode')

        cy.get(Cypress.env('LocationsMgtAddLocationState')).clear().type(this.Locationdata.State)
        cy.task('log', 'Entered State')
        cy.wait(3000)

        cy.xpath(Cypress.env('LocationsMgtAddLocationGEOLocationTab')).click()
        cy.task('log', 'Clicked on GEOLocation Tab')
        cy.wait(5000)

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
        
        cy.get(Cypress.env('LocationsMgtLocationLattitudeField')).clear().type(Latitude)
        cy.task('log', 'New Latitude Value entered in field')
       
        cy.get(Cypress.env('LocationsMgtLocationLongitudeField')).clear().type(Longitude)
        cy.task('log', 'New Longitude Value entered in field')
        cy.wait(3000)

        cy.xpath(Cypress.env('LocationsMgtAddLocationContactsTab')).click()
        cy.task('log', 'Clicked on Contacts Tab')
        cy.wait(5000)

        cy.get(Cypress.env('LocationsEditLocMgtEditContact')).click()
        cy.task('log', 'Clicked on Edit Contact Button')
        cy.wait(3000)

        cy.get(Cypress.env('LocationsMgtAddLocationContactsTitle')).clear().type(this.Locationdata.Title)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected Title from the Title DropDown')
        cy.wait(2000)

        cy.get(Cypress.env('LocationsMgtAddLocationContactsCity')).clear().type(Area)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected City from the City DropDown')
        cy.wait(2000)

        cy.get(Cypress.env('LocationsMgtAddLocationContactsPhone')).clear().type(PhoneNumber)
        cy.task('log', 'Entered New Phone Number in Phone field')

        cy.get(Cypress.env('LocationsMgtAddLocationContactsName')).clear().type(this.Locationdata.ContactName)
        cy.task('log', 'Entered Name in Name field')

        cy.get(Cypress.env('LocationsMgtAddLocationContactsEmail')).clear().type(Email)
        cy.task('log', 'Entered Email in Email field')

        cy.get(Cypress.env('LocationsMgtAddLocationContactsAddContactBtn')).click()
        cy.task('log', 'Clicked on Add Contact button ')
        cy.wait(4000)

        cy.get(Cypress.env('LocationsMgtAddLocationContactsVerify')).contains(Email)
        cy.task('log', 'Verified Contact is Updated in list')

        cy.get(Cypress.env('LocationsMgtUpdateChangesBtn')).click()
        cy.task('log', 'Clicked on Update Changes Button')
        cy.wait(3000)

        cy.xpath(Cypress.env('DoctorsMgtUpdatedCnfrmText')).should('be.visible')
        cy.task('log', 'Successfully updated text verified on pop up')

        cy.xpath(Cypress.env('ManageUserCnfrmOkBtn')).click()
        cy.task('log', 'Clicked on Ok button on pop up')
        cy.wait(2000)
        cy.reload()
        cy.wait(4000)
        cy.task('log', 'Now we will Verify updated Doctor details via open view Location details popup')

        // Verify Location details update via search using filters

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
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
            }


        cy.get(Cypress.env('LocationsMgtLocationNameFilter')).type(this.Locationdata.Name)
        .type('{enter}')
        cy.task('log', 'Entered Name and press enter button')
        cy.wait(5000)

        cy.get(Cypress.env('LocationsMgtRoadNameVerify')).contains(this.Locationdata.Road)
        cy.task('log', 'Verified Road name in searched record')

        cy.get(Cypress.env('LocationsMgtAreaVerify')).contains(Area)
        cy.task('log', 'Verified Area in searched record')

        cy.get(Cypress.env('LocationsMgtOngridViewLocationBtn')).click()
        cy.task('log', 'Clicked on view location details button on grid')
        cy.wait(5000)



        cy.get(Cypress.env('LocationsMgtLocationDetailsPhone')).contains(PhoneNumber)
        cy.task('log', 'Verified Updated Number on Detials pop up')

        cy.get(Cypress.env('LocationsMgtLocationDetailsEmail')).contains(Email)
        cy.task('log', 'Verified Updated Email on Detials pop up')

        cy.get(Cypress.env('LocationsMgtLocationDetailsArea')).contains(Area)
        cy.task('log', 'Verified Updated Area on Detials pop up')

        cy.xpath(Cypress.env('DoctorsMgtDoctorAdditionalInfoTab')).click()
        cy.task('log', 'Click on  additional info tab')
        cy.wait(2000)

        cy.get(Cypress.env('LocationsMgtLocationDetailsLocality')).contains(this.Locationdata.Locality)
        cy.task('log', 'Verified Locality on Detials pop up')

        cy.get(Cypress.env('LocationsMgtLocationDetailsPostal')).contains(this.Locationdata.PostalCode)
        cy.task('log', 'Verified Postal on Detials pop up')

        cy.get(Cypress.env('LocationsMgtLocationDetailsState')).contains(this.Locationdata.State)
        cy.task('log', 'Verified State on Detials pop up')

        cy.xpath(Cypress.env('LocationsMgtEditLocationGEOLocationTab')).click()
        cy.task('log', 'Clicked on GEOLocation Tab')
        cy.wait(3000)

        cy.get(Cypress.env('LocationsMgtLocationDetailsLattitude')).contains(Latitude)
        cy.task('log', 'Verified Updated Lattitude on Detials pop up')

        cy.get(Cypress.env('LocationsMgtLocationDetailsLongitude')).contains(Longitude)
        cy.task('log', 'Verified Updated Longitude on Detials pop up')

        cy.xpath(Cypress.env('LocationsMgtEditLocationContactsTab')).click()
        cy.task('log', 'Clicked on Contacts Tab')
        cy.wait(3000)

        cy.get(Cypress.env('LocationsMgtLocationDetailsContactPhone')).contains(PhoneNumber)
        cy.task('log', 'Verified Locality on Detials pop up')

        cy.get(Cypress.env('LocationsMgtLocationDetailsContactEmail')).contains(Email)
        cy.task('log', 'Verified Postal on Detials pop up')
        cy.task('log', 'Verified All updated data on Detials pop up')

        })
            
        })
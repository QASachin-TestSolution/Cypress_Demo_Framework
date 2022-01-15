/*
 * @Author: sachin 
 * @Date: 2021-11-09 13:34:59 
 * @Last Modified by: sachin
 * @Last Modified time: 2021-11-16 16:38:00
 */
/// <reference types="cypress" />
describe('Testing Edit doctor Functionality', function () {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('MedRep/DoctorMgt/EditDoctor').as('Doctordata')
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })
    })
    it('Edit Doctor details , Verify updated details', function () {

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

        cy.get(Cypress.env('DoctorsMgtNameSearchFilter')).type(this.Doctordata.Name)
        .type('{enter}')
        cy.task('log', 'Entered Name and press enter button')
        cy.wait(5000)


        cy.get(Cypress.env('DoctorsMgtOngridEditBtn')).click()
        cy.task('log', 'Clicked Edit button')
        cy.wait(5000)



        function random_value(Titles) {

            return Titles[Math.floor(Math.random() * Titles.length)];

        }
  
        const Titles = ['Mrs','Mr','Ms'];
        let Title= random_value(Titles)


        function random_value(Specialities) {

            return Specialities[Math.floor(Math.random() * Specialities.length)];

        }
  
        const Specialities = ['Cardiology','Dentistry','Emergency','Oncology','Pulmonology','Rheumatology','Surgery'];
        let Speciality= random_value(Specialities)


        function random_value(Classes) {

            return Classes[Math.floor(Math.random() * Classes.length)];

        }
  
        const Classes = ['A','B','C','E'];
        let Selectclass= random_value(Classes)


        function random_value(Emails) {

            return Emails[Math.floor(Math.random() * Emails.length)];

        }
  
        const Emails = ['Cy1@mailinator.com','Cy2@mailinator.com','Cy3@mailinator.com','Cy4@mailinator.com'];
        let Email= random_value(Emails)


        cy.get(Cypress.env('DoctorsMgtAddDoctorTitle')).type(Title)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected Title from Title DropDown')
        cy.wait(5000)

        cy.get(Cypress.env('DoctorsMgtAddDoctorSpeciality')).type(Speciality)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected Speciality from Speciality DropDown')
        cy.wait(8000)

        cy.get(Cypress.env('DoctorsMgtAddDoctorClass')).type(Selectclass)
        cy.wait(5000)
        cy.get(Cypress.env('DoctorsMgtAddDoctorClass')).type('{downarrow}{enter}')
        cy.task('log', 'Selected Class from the Class DropDown')
        cy.wait(3000)

        cy.get(Cypress.env('DoctorsMgtAddDoctorEmail')).clear().type(Email)
        cy.task('log', 'Entered Email in Email field')
        cy.wait(2000)

        cy.xpath(Cypress.env('DoctorsMgtDoctorAdditionalInfoTab')).click()
        cy.task('log', 'Clicked on AdditionalInfo Tab')
        cy.wait(2000)

        cy.get(Cypress.env('DoctorsMgtAddDoctorAddress1')).clear().type(this.Doctordata.Address1)
        cy.task('log', 'Entered address in address1 field')

        cy.get(Cypress.env('DoctorsMgtAddDoctorCity')).type(this.Doctordata.City)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected City from City DropDown')
        cy.wait(2000)

        cy.get(Cypress.env('DoctorsMgtAddDoctorPostalCode')).clear().type(this.Doctordata.PostalCode)
        cy.task('log', 'Entered PostalCode')

        cy.get(Cypress.env('DoctorsMgtAddDoctorState')).clear().type(this.Doctordata.State)
        cy.task('log', 'Entered State')
        cy.wait(2000)

        cy.get(Cypress.env('DoctorsMgtDoctorSaveBtn')).click()
        cy.task('log', 'Clicked on save Button')
        cy.wait(4000)

        cy.xpath(Cypress.env('DoctorsMgtUpdatedCnfrmText')).should('be.visible')
        cy.task('log', 'Successfully updated text verified on pop up')

        cy.xpath(Cypress.env('ManageUserCnfrmOkBtn')).click()
        cy.task('log', 'Clicked on Ok button on pop up')
        cy.wait(2000)
        cy.reload()
        cy.wait(4000)
        cy.task('log', 'Now we will Verify updated Doctor details via open view doctor details popup')



        // Verify Doctor details update via search using filters

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

        cy.get(Cypress.env('DoctorsMgtSpecialityVerify')).contains(Speciality)
        cy.task('log', 'Verified doctor Speciality in searched record')

        cy.get(Cypress.env('DoctorsMgtAddressVerify')).contains(this.Doctordata.Address1)
        cy.task('log', 'Verified doctor Address in searched record')

        cy.get(Cypress.env('DoctorsMgtOngridViewBtn')).click()
        cy.task('log', 'Clicked on view doctor details button on grid')
        cy.wait(5000)



        cy.get(Cypress.env('DoctorsMgtDoctorDetailsTitle')).contains(Title)
        cy.task('log', 'Verified doctor Title on Detials pop up')

        cy.get(Cypress.env('DoctorsMgtDoctorDetailsSpeciality')).contains(Speciality)
        cy.task('log', 'Verified doctor Speciality on Detials pop up')

        cy.get(Cypress.env('DoctorsMgtDoctorDetailsClass')).contains(Selectclass)
        cy.task('log', 'Verified doctor Class on Detials pop up')


        cy.get(Cypress.env('DoctorsMgtDoctorDetailsName')).contains(this.Doctordata.Name)
        cy.task('log', 'Verified doctor Name on Detials pop up')

        cy.get(Cypress.env('DoctorsMgtDoctorDetailsEmail')).contains(Email)
        cy.task('log', 'Verified doctor Name on Detials pop up')

        cy.xpath(Cypress.env('DoctorsMgtDoctorAdditionalInfoTab')).click()
        cy.task('log', 'Click on  additional info tab')
        cy.wait(2000)

        cy.get(Cypress.env('DoctorsMgtDoctorDetailsAddress')).contains(this.Doctordata.Address1)
        cy.task('log', 'Verified Address1 on Detials pop up')

        cy.get(Cypress.env('DoctorsMgtDoctorDetailsCity')).contains(this.Doctordata.City)
        cy.task('log', 'Verified City on Detials pop up')

        cy.get(Cypress.env('DoctorsMgtDoctorDetailsPostal')).contains(this.Doctordata.PostalCode)
        cy.task('log', 'Verified PostalCode on Detials pop up')

       



        })
            
        })
/*
 * @Author: sachin 
 * @Date: 2021-11-24 10:00:47 
 * @Last Modified by: sachin
 * @Last Modified time: 2021-11-24 15:38:14
 */

/// <reference types="cypress" />

const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
const NewTask = `Task${id}`

describe('Testing Add Task , Update task in Task management module', function () {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('MedRep/TaskManagement/TaskManagement').as('Taskdata')
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })

    })
    it('Assgining task to FSR & verify , Updating task & verify updation', function () {

        //Fetching the data from Fixture files
        cy.login(this.data.Admin, this.data.password)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')
        cy.task('log', 'Homepage is visible')

        cy.xpath(Cypress.env('MedRepModule')).click()
        cy.task('log', 'MedRep Menu Expanded')

        cy.xpath(Cypress.env('MedRepTaskMgtSubmenu')).click()
        cy.task('log', 'Clicked Task Management Submenu')
        cy.wait(4000)

        cy.get(Cypress.env('MedRepTaskMgtAddTaskBtn')).click()
        cy.task('log', 'Clicked Add Task Button')
        cy.wait(4000)

        cy.get(Cypress.env('DoctorsMgtSelectOrgDrpDwn')).click()
        cy.task('log', 'Select Organization DropDown Expanded')
        cy.wait(3000)


        if (this.Taskdata.Organization.toUpperCase() == 'POOJA_20OCT_COMMON') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg1')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
            
            
        }

        else if (this.Taskdata.Organization.toUpperCase() == 'POOJA-20OCT_MARKETING') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg2')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
            
        }



        else if (this.Taskdata.Organization.toUpperCase() == 'SITE - 5831') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg3')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
        }
    

        else if (this.Taskdata.Organization.toUpperCase() == 'SITE - 5800') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg4')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
            }

        cy.get(Cypress.env('LocAssignSelectMedRep')).type(this.Taskdata.MedRep)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected MedRep Type from DropDown')
        cy.wait(8000)


        cy.get(Cypress.env('MedRepTaskMgtSelectDoctorDrpDwn')).type(this.Taskdata.Doctor)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected Doctor from DropDown')
        cy.wait(6000)


        cy.get(Cypress.env('MedRepTaskMgtSelectLocDrpDwn')).type(this.Taskdata.Location)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected Location from DropDown')
        cy.wait(4000)

        cy.get(Cypress.env('MedRepTaskMgtTitleField')).type(NewTask)
        cy.task('log', 'Entered Task title in title field')


        cy.get(Cypress.env('MedRepTaskMgtSelectCategoryDrpDwn')).type(this.Taskdata.Category)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected Category from DropDown')
        cy.wait(4000)

        cy.get(Cypress.env('MedRepTaskMgtSelectPriorityDrpDwn')).type(this.Taskdata.Priority)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected Priority from DropDown')
        cy.wait(4000)

        cy.get(Cypress.env('MedRepTaskMgtSelectStatusDrpDwn')).type(this.Taskdata.StatusAtCreate)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected Status from DropDown')
        cy.wait(4000)

        cy.get(Cypress.env('MedRepTaskMgtTaskDescription')).type(NewTask)
        cy.task('log', 'Entered Task Description title in TaskDescription field')

        cy.get(Cypress.env('MedRepTaskMgtAddTaskSaveBtn')).click()
        cy.task('log', 'Clicked on Save button for saving task')
        cy.wait(2000)


        cy.task('log', 'Now will serach that task and verify that task created.')



        cy.get(Cypress.env('DoctorsMgtSelectOrgDrpDwn')).click()
        cy.task('log', 'Select Organization DropDown Expanded')
        cy.wait(3000)


        if (this.Taskdata.Organization.toUpperCase() == 'POOJA_20OCT_COMMON') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg1')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
            
            
        }

        else if (this.Taskdata.Organization.toUpperCase() == 'POOJA-20OCT_MARKETING') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg2')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
            
        }



        else if (this.Taskdata.Organization.toUpperCase() == 'SITE - 5831') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg3')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
        }
    

        else if (this.Taskdata.Organization.toUpperCase() == 'SITE - 5800') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg4')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
            }

        cy.get(Cypress.env('LocAssignSelectMedRep')).type(this.Taskdata.MedRep)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected MedRep Type from DropDown')
        cy.wait(6000)


        cy.get(Cypress.env('MedRepTaskMgtSelectDoctorDrpDwn')).type(this.Taskdata.Doctor)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected Doctor from DropDown')
        cy.wait(6000)


        cy.get(Cypress.env('MedRepTaskMgtSelectLocDrpDwn')).type(this.Taskdata.Location)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected Location from DropDown')
        cy.wait(4000)

        cy.get(Cypress.env('MedRepTaskMgtTitleField')).type(NewTask)
        cy.task('log', 'Entered Task title in title field')

        cy.get(Cypress.env('MedRepTaskMgtSelectStatusDrpDwn')).type(this.Taskdata.StatusAtCreate)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected Status from DropDown')
        cy.wait(4000)

        cy.get(Cypress.env('MedRepTaskMgtAddTaskSearchBtn')).click()
        cy.task('log', 'Clicked on Search button')
        cy.wait(4000)


        cy.get(Cypress.env('MedRepTaskMgtTitleVerifyPosition')).contains(NewTask)
        cy.task('log', 'Verified created task title in searched result')


        cy.get(Cypress.env('MedRepTaskMgtStatusVerifyPosition')).contains(this.Taskdata.StatusAtCreate)
        cy.task('log', 'Verified created task Status in searched result')

        cy.task('log', 'Now we will test Update task')

        cy.get(Cypress.env('MedRepTaskMgtTaskEditBtnOnGrid')).click()
        cy.task('log', 'Clicked on Edit button of task')
        cy.wait(4000)

        cy.get(Cypress.env('MedRepTaskMgtSelectStatusDrpDwn')).type(this.Taskdata.StatusAtUpdate)
        .type('{downarrow}{enter}')
        cy.task('log', 'Updated status of task from dropdown Status from DropDown')
        cy.wait(2000)

        cy.get(Cypress.env('MedRepTaskMgtTaskUpdateBtn')).click()
        cy.task('log', 'Clicked on Update button')
        cy.wait(4000)

        cy.task('log', 'Now will serach that task and verify that task is updated.')

        cy.get(Cypress.env('DoctorsMgtSelectOrgDrpDwn')).click()
        cy.task('log', 'Select Organization DropDown Expanded')
        cy.wait(3000)


        if (this.Taskdata.Organization.toUpperCase() == 'POOJA_20OCT_COMMON') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg1')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
            
            
        }

        else if (this.Taskdata.Organization.toUpperCase() == 'POOJA-20OCT_MARKETING') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg2')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
            
        }



        else if (this.Taskdata.Organization.toUpperCase() == 'SITE - 5831') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg3')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
        }
    

        else if (this.Taskdata.Organization.toUpperCase() == 'SITE - 5800') {

            cy.xpath(Cypress.env('DoctorsMgtSelectOrg4')).click()
            cy.task('log', 'Selected Organization from dropdown')
            cy.wait(6000)
            }

        cy.get(Cypress.env('LocAssignSelectMedRep')).type(this.Taskdata.MedRep)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected MedRep Type from DropDown')
        cy.wait(8000)


        cy.get(Cypress.env('MedRepTaskMgtSelectDoctorDrpDwn')).type(this.Taskdata.Doctor)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected Doctor from DropDown')
        cy.wait(6000)


        cy.get(Cypress.env('MedRepTaskMgtSelectLocDrpDwn')).type(this.Taskdata.Location)
        .type('{downarrow}{enter}')
        cy.task('log', 'Selected Location from DropDown')
        cy.wait(4000)

        cy.get(Cypress.env('MedRepTaskMgtTitleField')).type(NewTask)
        cy.task('log', 'Entered Task title in title field')

        cy.get(Cypress.env('MedRepTaskMgtAddTaskSearchBtn')).click()
        cy.task('log', 'Clicked on Search button')
        cy.wait(4000)

        cy.get(Cypress.env('MedRepTaskMgtTitleVerifyPosition')).contains(NewTask)
        cy.task('log', 'Verified task title in searched result')


        cy.get(Cypress.env('MedRepTaskMgtStatusVerifyPosition')).contains(this.Taskdata.StatusAtUpdate)
        cy.task('log', 'Verified Updated task Status in searched result')
        

        })
            
        })
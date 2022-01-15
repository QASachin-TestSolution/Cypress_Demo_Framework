/// <reference types="cypress" />
describe('Testing Create User functionality', function () {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('UserMgt/createuser').as('Userdata')
        cy.fixture('UserMgt/admin').as('Admindata')
        cy.fixture('UserMgt/manager').as('Managerdata')
        cy.fixture('UserMgt/salesman').as('Salesmandata')
        cy.fixture('UserMgt/supervisor').as('Supervisordata')
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })
    })
    it('Create User', function () {

        //Fetching the data from Fixture files
        cy.login(this.data.Admin, this.data.password)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')
        cy.task('log', 'Homepage is visible')

        cy.xpath(Cypress.env('UserMgtModuleMenu')).click()
        cy.task('log', 'UserManagement Menu Expanded')

        cy.xpath(Cypress.env('ManageUserSubmenu')).click()
        cy.task('log', 'Clicked Manage User Submenu')
        cy.wait(4000)

        cy.get(Cypress.env('ManageUserAddBtn')).click()
        cy.task('log', 'Clicked Add button')

        cy.get(Cypress.env('ManageUserUsername')).type(this.Userdata.Username)
        cy.task('log', 'Entered Username in Username field')

        cy.get(Cypress.env('ManageUserEmailfield')).type(this.Userdata.Email)
        cy.task('log', 'Entered Email in Email field')

        cy.get(Cypress.env('ManageUserPasswordfield')).type(this.Userdata.Password)
        cy.task('log', 'Entered Email in Email field')



        if (this.Userdata.Designation.toUpperCase() == 'ADMIN') {

            cy.get(Cypress.env('ManageUserSelectDesignation')).click()
            .type(this.Userdata.Designation).type('{downarrow}{enter}')
            cy.task('log', 'Selected Designation')
            cy.wait(4000)
            
            cy.get(Cypress.env('ManageUserSelectUsertype')).click()
            .type(this.Admindata.UserType).type('{downarrow}{enter}')
            cy.task('log', 'Selected Usertype') 
            cy.wait(4000)

            cy.get(Cypress.env('ManageUserSelectEmployee')).click()
            .type(this.Admindata.Employee).type('{downarrow}{enter}')
            cy.task('log', 'Selected Employee')
            cy.wait(4000) 

            cy.get(Cypress.env('ManageUserSelectApproval')).click()
            .type(this.Admindata.ApprovalLevel).type('{downarrow}{enter}')
            cy.task('log', 'Selected Usertype') 
            cy.wait(4000)

            cy.get(Cypress.env('ManageUserSelectMarketingApproval')).click()
            .type(this.Admindata.MarketingApprovalLevel).type('{downarrow}{enter}')
            cy.task('log', 'Selected Employee')
        }

        else if (this.Userdata.Designation.toUpperCase() == 'SALES MANAGER') {

            cy.get(Cypress.env('ManageUserSelectDesignation')).click()
            .type(this.Userdata.Designation).type('{downarrow}{enter}')
            cy.task('log', 'Selected Designation')
            cy.wait(4000)

            cy.get(Cypress.env('ManageUserSelectUsertype')).click()
            .type(this.Managerdata.UserType).type('{downarrow}{enter}')
            cy.task('log', 'Selected Usertype') 
            cy.wait(4000)

            cy.get(Cypress.env('ManageUserOperationType')).click()
            .type(this.Managerdata.UserOperationType).type('{downarrow}{enter}')
            cy.task('log', 'Selected User Operation Type') 
            cy.wait(4000)
            
            
            cy.get(Cypress.env('ManageUserOrganizationDrpdwn')).click()
            .type(this.Managerdata.Organization).type('{downarrow}{enter}')
            cy.task('log', 'Selected Organization') 
            cy.wait(4000)

            cy.get(Cypress.env('ManageUserSelectApproval')).click()
            .type(this.Managerdata.ApprovalLevel).type('{downarrow}{enter}')
            cy.task('log', 'Selected ApprovalLevel') 
            cy.wait(4000)

            cy.get(Cypress.env('ManageUserAssignedUsersDrpdwn')).click()
            cy.xpath(Cypress.env('ManageUserAssignUserCheckbox')).click()
            cy.task('log', 'Selected Assigned User value')
            cy.wait(4000)

            cy.get(Cypress.env('ManageUserSelectEmployee')).click()
            .type(this.Managerdata.Employee).type('{downarrow}{enter}')
            cy.task('log', 'Selected Employee') 
            cy.wait(4000)

            
        }



        else if (this.Userdata.Designation.toUpperCase() == 'SUPERVISOR') {

            cy.get(Cypress.env('ManageUserSelectDesignation')).click()
            .type(this.Userdata.Designation).type('{downarrow}{enter}')
            cy.task('log', 'Selected Designation')
            cy.wait(4000)

            cy.get(Cypress.env('ManageUserSelectUsertype')).click()
            .type(this.Supervisordata.UserType).type('{downarrow}{enter}')
            cy.task('log', 'Selected Usertype') 
            cy.wait(4000)

            cy.get(Cypress.env('ManageUserOperationType')).click()
            .type(this.Supervisordata.UserOperationType).type('{downarrow}{enter}')
            cy.task('log', 'Selected User Operation Type') 
            cy.wait(4000)
            
            
            cy.get(Cypress.env('ManageUserOrganizationDrpdwn')).click()
            .type(this.Supervisordata.Organization).type('{downarrow}{enter}')
            cy.task('log', 'Selected Organization') 
            cy.wait(4000)

            cy.get(Cypress.env('ManageUserSelectApproval')).click()
            .type(this.Supervisordata.ApprovalLevel).type('{downarrow}{enter}')
            cy.task('log', 'Selected ApprovalLevel') 
            cy.wait(4000)

            cy.get(Cypress.env('ManageUserAssignedUsersDrpdwn')).click()
            cy.xpath(Cypress.env('ManageUserAssignUserCheckbox')).click()
            cy.task('log', 'Selected Assigned User value')
            cy.wait(4000)

            cy.get(Cypress.env('ManageUserSelectEmployee')).click()
            .type(this.Supervisordata.Employee).type('{downarrow}{enter}')
            cy.task('log', 'Selected Employee') 
            cy.wait(4000)

        }
    

        else if (this.Userdata.Designation.toUpperCase() == 'SALESMAN') {

            cy.get(Cypress.env('ManageUserSelectDesignation')).click()
            .type(this.Userdata.Designation).type('{downarrow}{enter}')
            cy.task('log', 'Selected Designation')
            cy.wait(4000)

            cy.get(Cypress.env('ManageUserSelectUsertype')).click()
            .type(this.Salesmandata.UserType).type('{downarrow}{enter}')
            cy.task('log', 'Selected Usertype') 
            cy.wait(4000)

            cy.get(Cypress.env('ManageUserOperationType')).click()
            .type(this.Salesmandata.UserOperationType).type('{downarrow}{enter}')
            cy.task('log', 'Selected User Operation Type') 
            cy.wait(4000)

            cy.get(Cypress.env('ManageUserSelectFSR')).click()
            .type(this.Salesmandata.Employee).type('{downarrow}{enter}')
            cy.task('log', 'Selected Employee') 
            cy.wait(4000)
            }

            cy.get(Cypress.env('ManageUserSaveBtn')).click()
            cy.task('log', 'Selected Employee') 
            cy.wait(4000)

            cy.xpath(Cypress.env('ManageUserCnfrmOkBtn')).click()
            cy.task('log', 'Click Okay Button on Pop-Up') 
            cy.wait(4000)

            //Verify created User from search filter

            cy.task('log','Verifying created User from search filter')

            cy.reload()
            cy.wait(5000)
            cy.get(Cypress.env('ManageUserUsernameSearch')).type(this.Userdata.Username).type('{enter}')
            cy.task('log', 'Entered Username in filter and click Enter') 
            cy.wait(7000)

            cy.get(Cypress.env('ManageUserUsernameVerify')).contains(this.Userdata.Username)
            cy.task('log','Verified username in searched result')

            cy.get(Cypress.env('ManageUserDesignationVerify')).contains(this.Userdata.Designation)
            cy.task('log','Verified User Designation in searched result')

        })

        it('Verify created User via login', function () {
            // cy.reload()
            cy.login(this.Userdata.Username, this.Userdata.Password)
            cy.task('log', 'Login into the website using newly created Username and Password')
    
            cy.get(Cypress.env('HomepageLogo')).should('be.visible')
            cy.task('log', 'Homepage is visible , Verified that created user can login.')

        })


        it('Delete created user ', function () {
            cy.login(this.data.Admin, this.data.password)
            cy.task('log', 'Login into the website using valid Username and valid Password')
    
            cy.get(Cypress.env('HomepageLogo')).should('be.visible')
            cy.task('log', 'Homepage is visible')
    
            cy.xpath(Cypress.env('UserMgtModuleMenu')).click()
            cy.task('log', 'UserManagement Menu Expanded')
    
            cy.xpath(Cypress.env('ManageUserSubmenu')).click()
            cy.task('log', 'Clicked Manage User Submenu')
            cy.wait(4000)

            cy.get(Cypress.env('ManageUserSelectUserDrpDwn')).type(this.Userdata.Username).type('{downarrow}{enter}')
            cy.task('log', 'Entered Username in filter and click Enter') 
            cy.wait(7000)

            cy.get(Cypress.env('ManageUserSelectDesignation')).should('have.value',this.Userdata.Designation)
            cy.task('log','Verified Designation value')

            cy.get(Cypress.env('ManageUserEmailfield')).should('have.value',this.Userdata.Email)
            cy.task('log','Verified User Email in searched result')

            cy.get(Cypress.env('ManageUserDeleteBtn')).click()
            cy.task('log','Clicked on delete button')

            cy.xpath(Cypress.env('ManageUserCnfrmOkBtn')).click()
            cy.task('log','Clicked Ok button on Delete confirmation pop-up ')

            cy.xpath(Cypress.env('ManageUserDeleteTxtVerify')).should('be.visible')
            cy.task('log','Verified user deleted pop-up message')

            cy.xpath(Cypress.env('ManageUserCnfrmOkBtn')).click()
            cy.task('log','Clicked Ok button on user deleted info. pop-up ')
        })

        it('Test login from Deleted user ', function () {
            cy.login(this.Userdata.Username, this.Userdata.Password)
            cy.task('log', 'Login into the website with Deleted user')

            cy.get(Cypress.env('InvalidLoginmsg')).should('have.text','Invalid user name.') 
            cy.task('log', 'Login prevented via showing : Invalid user name')
    

        })





})
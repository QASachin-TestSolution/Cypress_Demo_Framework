/*
 * @Author: sachin 
 * @Date: 2021-09-06 11:39:17 
 * @Last Modified by: sachin
 * @Last Modified time: 2021-09-07 08:14:18
 */
/// <reference types="cypress" />
describe('Testing Editing Order functionality', function(){
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('OrderData/EditOrder').as('Orderdata')
        cy.on('uncaught:exception', (err, runnable) => {
        
            return false})
    })
    it('Editing Order', function() {
        //Fetching the data from Fixture files
        cy.login(this.data.email1, this.data.password1)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')   
        cy.task('log', 'Homepage is visible')

        cy.xpath(Cypress.env('OrderMenu')).click()
        cy.task('log','Orders Menu Expanded')

        cy.xpath(Cypress.env('EditOrderSubMeenu')).click()
        cy.task('log','Clicked Edit Order Submenu')

        if (this.Orderdata.DoYouHaveDate.toUpperCase()=='YES'){
        cy.get(Cypress.env('EditOrderDateFilter')).invoke('removeAttr', 'readonly').clear()
        .type(this.Orderdata.FilterOrderByDate)
        cy.task('log','Order date seleted in filter')
        }


        cy.get(Cypress.env('EditOrderFilterDrpDwn')).click()
        cy.task('log','Filter Dropdown Opened')

        cy.xpath(Cypress.env('EditOrderFilterAll')).should('be.visible')
        cy.task('log','Ordertype Normal Option is Avaialable in Dropdown')

        cy.xpath(Cypress.env('EditOrderFilterOrderRefNo')).should('be.visible')
        cy.task('log','Order Ref No Option is Avaialable in Dropdown')

        cy.xpath(Cypress.env('EditOrderFilterCreatedBy')).should('be.visible')
        cy.task('log','CreatedBy is Avaialable in Dropdown')
        
        cy.xpath(Cypress.env('EditOrderFilterCustomer')).should('be.visible')
        cy.task('log','Customer Option is Avaialable in Dropdown')

        cy.xpath(Cypress.env('EditOrderFilterCategory')).should('be.visible')
        cy.task('log','Category Option is Avaialable in Dropdown')

        cy.xpath(Cypress.env('EditOrderFilterStatus')).should('be.visible')
        cy.task('log','Status Option is Avaialable in Dropdown')


        if (this.Orderdata.SelectFilterType.toUpperCase()=='ALL'){
        cy.xpath(Cypress.env('EditOrderFilterAll')).click()
        cy.task('log','Selected All from dropdown')
        }

        else if(this.Orderdata.SelectFilterType.toUpperCase()=='ORDER REF NO'){
        cy.xpath(Cypress.env('EditOrderFilterOrderRefNo')).click()
        cy.task('log','Selected Order Ref No from dropdown')
        }

        else if(this.Orderdata.SelectFilterType.toUpperCase()=='CREATED BY')
        {
        cy.xpath(Cypress.env('EditOrderFilterCreatedBy')).click()
        cy.task('log','Selected Created By from dropdown')
        }

        else if(this.Orderdata.SelectFilterType.toUpperCase()=='CUSTOMER')
        {
        cy.xpath(Cypress.env('EditOrderFilterCustomer')).click()
        cy.task('log','Selected Customer from dropdown')
        }

        else if(this.Orderdata.SelectFilterType.toUpperCase()=='CATEGORY')
        {
        cy.xpath(Cypress.env('EditOrderFilterCategory')).click()
        cy.task('log','Selected Category from dropdown')
        }

        else if(this.Orderdata.SelectFilterType.toUpperCase()=='STATUS')
        {
        cy.xpath(Cypress.env('EditOrderFilterStatus')).click()
        cy.task('log','Selected Status from dropdown')
        }
        
        cy.get(Cypress.env('EditOrderFilterTxtField')).type(this.Orderdata.FilterValue)
        cy.task('log','Filter Value Entered in Field')

        cy.get(Cypress.env('EditOrderFilterSearchBtn')).click()
        cy.task('log','Search Button Clicked')

        cy.wait(4000)
        cy.get(Cypress.env('EditOrderRefNoPosition')).contains(this.Orderdata.FilterValue)
        cy.task('log','Order searched and visble in searched result')

        cy.get(Cypress.env('EditOrderPencilButton')).click()
        cy.task('log','Edit Button Clicked')

        cy.get(Cypress.env('EditOrderRefNoPositionIn')).contains(this.Orderdata.FilterValue)
        cy.task('log','Order ref no is verified again in details')
        
        cy.xpath(Cypress.env('OrdersNOEOrderInfo')).click()
        cy.task('log','Clicked on OrderInfo')
        cy.wait(4000)
        
        cy.get(Cypress.env('EditOrderPencilButtonIn')).click()
        cy.task('log','Clicked on edit button of exsting order')
        cy.wait(5000)
        var Qty = Math.floor((Math.random() * 10) + 1);
        cy.get(Cypress.env('OrdersNOEOrderQty')).clear()
        .type(Qty)
        cy.wait(12000)
         
        cy.get(Cypress.env('EditOrderUpdatetoOrderBtn')).click()
        cy.task('log','Clicked on Update to Order Button')
        cy.wait(5000)

        cy.get(Cypress.env('EditOrderUpdateVerify')).contains(Qty)
        cy.task('log','Verified that Qty is updtated in order')

        


    })
    
})
/// <reference types="cypress" />
var itemvalue

describe('Testing Editing Returns functionality', function(){
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('OrderData/EditReturns').as('Orderdata')
        cy.on('uncaught:exception', (err, runnable) => {
        
            return false})
    })
    it('Editing Return', function() {
        //Fetching the data from Fixture files
        cy.login(this.data.email1, this.data.password1)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')   
        cy.task('log', 'Homepage is visible')

        cy.xpath(Cypress.env('OrderMenu')).click()
        cy.task('log','Orders Menu Expanded')

        cy.xpath(Cypress.env('OdersEditReturnsSubmenu')).click()
        cy.task('log','Clicked Edit Returns Submenu')

        if (this.Orderdata.DoYouHaveDate.toUpperCase()=='YES'){
        cy.get(Cypress.env('EditReturnsReturnDate')).invoke('removeAttr', 'readonly').clear()
        .type(this.Orderdata.FilterReturnByDate)
        cy.task('log','Return date seleted in filter')
        }


        cy.get(Cypress.env('EditReturnsReturnFilterby')).click()
        cy.task('log','Filter Dropdown Opened')

        cy.xpath(Cypress.env('EditOrderFilterAll')).should('be.visible')
        cy.task('log','All Option is Avaialable in Dropdown')

        cy.xpath(Cypress.env('EditReturnsFilterReturnRefNo')).should('be.visible')
        cy.task('log','Order Ref No Option is Avaialable in Dropdown')

        cy.xpath(Cypress.env('EditOrderFilterCreatedBy')).should('be.visible')
        cy.task('log','CreatedBy is Avaialable in Dropdown')
        
        cy.xpath(Cypress.env('EditOrderFilterCustomer')).should('be.visible')
        cy.task('log','Customer Option is Avaialable in Dropdown')

        cy.xpath(Cypress.env('EditOrderFilterCategory')).should('be.visible')
        cy.task('log','Category Option is Avaialable in Dropdown')

        cy.xpath(Cypress.env('EditOrderFilterStatus')).should('be.visible')
        cy.task('log','Status Option is Avaialable in Dropdown')

        cy.xpath(Cypress.env('EditReturnFilterReturnType')).should('be.visible')
        cy.task('log','Return type Option is Avaialable in Dropdown')


        if (this.Orderdata.SelectFilterType.toUpperCase()=='ALL'){
        cy.xpath(Cypress.env('EditOrderFilterAll')).click()
        cy.task('log','Selected All from dropdown')
        }

        else if(this.Orderdata.SelectFilterType.toUpperCase()=='RETURN REF NO'){
        cy.xpath(Cypress.env('EditReturnsFilterReturnRefNo')).click()
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

        else if(this.Orderdata.SelectFilterType.toUpperCase()=='RETURN TYPE')
        {
        cy.xpath(Cypress.env('EditReturnFilterReturnType')).click()
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

        cy.get(Cypress.env('EditReturnsReturnRefNoPosition')).contains(this.Orderdata.FilterValue)
        cy.task('log','Return ref no is verified again in details')
        
        cy.get(Cypress.env('EditReturnsProdEditBtn')).click()
        cy.task('log','Clicked on Product Edit button')
        cy.wait(4000)
        
        var Qty = Math.floor((Math.random() * 10) + 1);
        cy.get(Cypress.env('EditReturnsOrderQty')).clear()
        .type(Qty)
        cy.wait(6000)
         
        cy.get(Cypress.env('EditReturnsUpdateProdBtn')).click()
        cy.task('log','Clicked on Update Button')
        cy.wait(5000)

        cy.get(Cypress.env('EditOrderUpdateVerify')).contains(Qty)
        cy.task('log','Verified that Qty is updtated in returns')

        cy.get('#MainContent_RadPanelBar2_i0_LblTotAmt').invoke('text').then((text) => {
        itemvalue = text
        cy.log(itemvalue)

        cy.get(Cypress.env('EditReturnsUpdateReturnBtn')).click()
        cy.task('log','Clicked on Update Return Button')

        cy.xpath(Cypress.env('SalesReturnCnfrmOkay')).click()
        cy.task('log', 'Okay Button clicked On confirmation pop up')

        cy.get(Cypress.env('EditReturnsReturnFilterby')).click()
        cy.task('log','Filter Dropdown Opened')

        if (this.Orderdata.SelectFilterType.toUpperCase()=='ALL'){
        cy.xpath(Cypress.env('EditOrderFilterAll')).click()
        cy.task('log','Selected All from dropdown')
        }

        else if(this.Orderdata.SelectFilterType.toUpperCase()=='RETURN REF NO'){
        cy.xpath(Cypress.env('EditReturnsFilterReturnRefNo')).click()
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

        else if(this.Orderdata.SelectFilterType.toUpperCase()=='RETURN TYPE')
        {
        cy.xpath(Cypress.env('EditReturnFilterReturnType')).click()
        cy.task('log','Selected Status from dropdown')
        }
        
        cy.get(Cypress.env('EditOrderFilterTxtField')).type(this.Orderdata.FilterValue)
        cy.task('log','Filter Value Entered in Field')

        cy.get(Cypress.env('EditOrderFilterSearchBtn')).click()
        cy.task('log','Search Button Clicked')

        cy.wait(5000)

        cy.get('#MainContent_dgv_ctl00__0 > :nth-child(8)').contains(itemvalue)
        cy.task('log', 'Return amount verified according to the updated returns')

            })
        
        

    })
    
})
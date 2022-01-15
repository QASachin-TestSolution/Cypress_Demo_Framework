/*
 * @Author: sachin 
 * @Date: 2021-09-07 17:27:13 
 * @Last Modified by: sachin
 * @Last Modified time: 2021-12-02 18:59:28
 */
/// <reference types="cypress" />
let ordervalue
describe('Testing Order template functionality', function(){
 beforeEach(function () {
        // "this" points at the test context object
    cy.fixture('datafile').as('data')
    cy.fixture('OrderData/OrderTemp').as('Orderdata')
    cy.on('uncaught:exception', (err, runnable) => {
        
            return false})
    })
it('Creating Order using Order Template', function() {
    //Fetching the data from Fixture files
    cy.login(this.data.email1, this.data.password1)
    cy.task('log', 'Login into the website using valid Username and valid Password')

    cy.get(Cypress.env('HomepageLogo')).should('be.visible')   
    cy.task('log', 'Homepage is visible')

    cy.xpath(Cypress.env('OrderMenu')).click()
    cy.task('log','Orders Menu Expanded')

    cy.xpath(Cypress.env('OrderTemplateSubmenu')).click()
    cy.task('log','Clicked Bonus OrderTemplate Submenu')

    cy.get(Cypress.env('OrderTemplateCustomerDrpDwn')).type(this.Orderdata.Customer)
    cy.wait(5000)
    cy.get(Cypress.env('OrderTemplateCustomerDrpDwn')).type('{downarrow}{enter}')
    cy.wait(8000)
    cy.task('log','Selected Customer for Teamplate')
    cy.get(Cypress.env('OrderTemplateSelectTemp')).type(this.Orderdata.Template)
    cy.wait(2000)
    cy.get(Cypress.env('OrderTemplateSelectTemp')).type('{downarrow}{enter}')
    cy.wait(3000)
    cy.task('log','Selected Teamplate')
    cy.get(Cypress.env('OrderTemplateloadBtn')).click()
    cy.task('log','Clicked Load Template Button')
    cy.wait(3000)


    if (this.Orderdata.WantToAddCustomerReamrks.toUpperCase()=='YES'){
    cy.get(Cypress.env('OrdersNOECustRemarks')).type(this.Orderdata.CustomerRemarks)
    cy.task('log','Customer Remarks Entered')
    }
    
    if (this.Orderdata.WantToAddCustomerPNO.toUpperCase()=='YES'){
    cy.get(Cypress.env('OrdersNOECustPONo')).type(this.Orderdata.CustPONo)
    cy.task('log','Customer PO No Entered')
    }
    cy.get(Cypress.env('OrdersNOEOrdersSkipConsolidationDrpDwn')).click()
    cy.task('log','SkipConsolidation DropDown Expanded')

    cy.xpath(Cypress.env('OrdersNOEOrdersSkipConsolidationYes')).should('be.visible')
    cy.task('log','Verified That Yes Option is Avaialable in SkipConsolidation DropDown')

    cy.xpath(Cypress.env('OrdersNOEOrdersSkipConsolidationNo')).should('be.visible')
    cy.task('log','Verified That No Option is Avaialable in SkipConsolidation DropDown')

    if (this.Orderdata.OrdersNOEOrdersSkipConsolidation.toUpperCase()=='YES'){
    cy.xpath(Cypress.env('OrdersNOEOrdersSkipConsolidationYes')).click()
    cy.task('log','Yes Option is Selected in SkipConsolidation DropDown')
    }

    else if(this.Orderdata.OrdersNOEOrdersSkipConsolidation.toUpperCase()=='NO')
    {
    cy.xpath(Cypress.env('OrdersNOEOrdersSkipConsolidationNo')).click()
    cy.task('log','No Option is Selected in SkipConsolidation DropDown')
    }

    if (this.Orderdata.WholesaleOrderCheckbox.toUpperCase()=='YES'){
    cy.xpath(Cypress.env('WholesaleOrderCheckbox')).click()
    cy.task('log','Whole saleOrder Checkbox checked')
    }
    cy.wait(3000)
    cy.xpath(Cypress.env('OrdersNOEOrderInfo')).click()
    cy.task('log','OrderInfo Tab Clicked')
    
    cy.get(Cypress.env('OrdersNOEProduct')).type(this.Orderdata.ProductName)
    cy.wait(4000)
    cy.get(Cypress.env('OrdersNOEProduct')).type('{downarrow}{enter}')
    cy.task('log','Selected Product from dropdown')
    cy.wait(5000)

    cy.get(Cypress.env('OrdersNOEOrderQty')).clear().type(this.Orderdata.OrderQty)
    cy.task('log','Order Quantity Entered')

    if (this.Orderdata.BonusQty==""){
    cy.task('log','Bonus Quantity is Blank as per Order data')
        }
    else{
    cy.get(Cypress.env('OrdersNOEBonusQty')).type(this.Orderdata.BonusQty)
    cy.task('log','Bonus Quantity Entered')    }
    
    if (this.Orderdata.FOCQty==""){
    cy.task('log','FOC Quantity is Blank as per Order data')
    }
    else{
    cy.get(Cypress.env('OrdersNOEFOCQty')).type(this.Orderdata.FOCQty)
    cy.task('log','FOC Quantity Entered')
    }
    
    cy.get(Cypress.env('OrdersNOEOrderRemarks')).type(this.Orderdata.OrderRemarks)
    cy.task('log','Order Remarks Entered')

    cy.get(Cypress.env('OrdersNOEUoM')).should('have.value','CS')
    cy.task('log','Verified that CS value is assigned for UOM Dropdown')
    
    cy.get(Cypress.env('OrdersNOEFOCUOM')).should('have.value','CS')
    cy.task('log','Verified that CS value is assigned for FOC UOM Dropdown')
    
    cy.wait(4000)
    cy.get(Cypress.env('AddOrderBtn')).click()
    cy.task('log','AddToOrder Button Clicked')
    cy.wait(5000)

    let VerifyAddedProd="//td[contains(text(),'DORA')]"
    let VerifyAddedProdxpath=VerifyAddedProd.replace('MINI',this.Orderdata.ProductName).replace('\u00A0','').trim();

    cy.get(Cypress.env('OrdersNOEOrderAmt')).invoke('text').then((text) => {
        // cy.log(ordervalue)
    ordervalue=text
        // cy.writeFile('OrderData/NOrder.json', { OrderAmount: ordervalue})
    });
    cy.wait(4000)
    cy.task('log','Order amount stored')
    cy.xpath(VerifyAddedProdxpath).should('be.visible')
    cy.task('log','Verified that product is added in list')
    
    cy.get(Cypress.env('OrdersNOESaveOrderBtn')).click()
    cy.task('log','Save Order Button Clicked')

    cy.xpath(Cypress.env('BonusOrderConfirmOk')).click()
    cy.task('log','Okay Button Clicked On Confirmation Pop_up')
    cy.wait(5000)
    
    cy.xpath("//div[contains(text(),'Successfully order created. Your Order Ref No is')]").invoke('text').then((text) => {
        // const text = $div.text()
        cy.log(text)
    var temp = text.replace('Successfully order created. Your Order Ref No is', '').replace('\u00A0', '').trim();
    var OrderRefNo = temp.replace('.Would you like to view the order report?', '').replace('\u00A0', '').trim()
    cy.log(OrderRefNo)

    cy.xpath(Cypress.env('BonusOrderConfirmOk')).click()
    cy.task('log','Okay Button Clicked On Confirmation Pop_up')
    cy.wait(5000)

    var ord= "//div[contains(text(),'M_NO00021727S0000000175')]"
    var VerifyOrder=ord.replace('M_NO00021727S0000000175',OrderRefNo).replace('\u00A0','').trim();
    
    cy.xpath(VerifyOrder).should('be.visible')
    cy.task('log','Verified OrderRefNumber on report')

    var productxpath="//div[contains(text(),'MINI')]"
    var VerifyProduct=productxpath.replace('MINI',this.Orderdata.ProductName).replace('\u00A0','').trim();

    cy.xpath(VerifyProduct).should('be.visible')
    cy.task('log','Product name verified in table')
    
    var Ordervaluexpath="//div[contains(text(),'test')]"
    var VerifyOrderValue=Ordervaluexpath.replace('test',ordervalue).replace('\u00A0','').trim();

    cy.xpath(VerifyOrderValue).should('be.visible')
    cy.task('log','Order value verified in table')
 
    cy.xpath("//div[contains(text(),'New')]").should('be.visible')
    cy.task('log','Verified that product order category is new')

    var qtyxpath="//div[contains(text(),'50')]"
    var varifyqtyxpath=qtyxpath.replace('50',this.Orderdata.OrderQty).replace('\u00A0','').trim();
    cy.xpath(varifyqtyxpath).should('be.visible')
    cy.task('log','Product Qty verified in table')
    })
})
})

// })
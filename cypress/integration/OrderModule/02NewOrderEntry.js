/*
 * @Author: sachin 
 * @Date: 2021-09-02 11:42:21 
 * @Last Modified by: sachin
 * @Last Modified time: 2021-11-25 18:50:04
 */
let ordervalue
/// <reference types="cypress" />
describe('Testing create order functionality', function(){
    
    
    beforeEach(function () {
    
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('OrderData/NewOrder').as('Orderdata')
        cy.on('uncaught:exception', (err, runnable) => {
        
            return false})
    })
    it('Creating New Order Entry', function() {
        //Fetching the data from Fixture files
        cy.login(this.data.email1, this.data.password1)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')   
        cy.task('log', 'Homepage is visible')

        cy.xpath(Cypress.env('OrderMenu')).click()
        cy.task('log','Orders Menu Expanded')

        cy.xpath(Cypress.env('NewOrderEntrySubMenu')).click()
        cy.task('log','Clicked New Order Entry')

        cy.get(Cypress.env('OrdersNOEOrderType')).click()
        cy.task('log','Ordertype Dropdown Opened')

        cy.xpath(Cypress.env('OrdersNOEOrderTypeNormal')).should('be.visible')
        cy.task('log','Ordertype Normal Option is Avaialable in Dropdown')

        cy.xpath(Cypress.env('OrdersNOEOrderTypeDonation')).should('be.visible')
        cy.task('log','Ordertype Donation Option is Avaialable in Dropdown')

        cy.xpath(Cypress.env('OrdersNOEOrderTypeFOC')).should('be.visible')
        cy.task('log','Ordertype FOC Option is Avaialable in Dropdown')

        if (this.Orderdata.OrderType.toUpperCase()=='NORMAL'){
        cy.xpath(Cypress.env('OrdersNOEOrderTypeNormal')).click()
        cy.task('log','Selected Normal as an Ordertype')
        }

        else if(this.Orderdata.OrderType.toUpperCase()=='DONATION ORDER')
        {
        cy.xpath(Cypress.env('OrdersNOEOrderTypeDonation')).click()
        cy.task('log','Selected Donation Order as an Ordertype')
        }

        else if(this.Orderdata.OrderType.toUpperCase()=='FOC ORDER')
        {
        cy.xpath(Cypress.env('OrdersNOEOrderTypeFOC')).click()
        cy.task('log','Selected FOC Order as an Ordertype')
        }

        cy.get(Cypress.env('OrdersNOECustomer')).type(this.Orderdata.Customer)
        cy.wait(4000)
        cy.get(Cypress.env('OrdersNOECustomer')).type('{downarrow}{enter}')
        cy.wait(5000)
        cy.task('log','Selected Customer from dropdown')

        cy.get(Cypress.env('OrdersNOEShippingDatePopupBtn')).click()
        cy.get(Cypress.env('OrdersNOEShippingDatePopup')).should('be.visible')
        cy.wait(2000)
        
        if (this.Orderdata.WanttochangeShippingDate.toUpperCase()=='YES'){
        cy.get(Cypress.env('OrdersNOEDate')).invoke('removeAttr', 'readonly').clear()
        .type(this.Orderdata.Date)
        cy.task('log','Selected Shipping date')
        }
        
        cy.task('log','Shipping date selcted by default')
        cy.get(Cypress.env('OrdersNOECategory')).click()
        cy.task('log','Category dropdown opened')

        if (this.Orderdata.Category.toUpperCase()=='GEN - JDS ABD(02)'){
        cy.xpath(Cypress.env('OrdersNOECategory1')).click()
        cy.task('log','Selected "GEN - JDS ABD(02)" Category')
        }

        else if(this.Orderdata.Category.toUpperCase()=='JUL - JDS ABD(02)')
        {
        cy.xpath(Cypress.env('OrdersNOECategory2')).click()
        cy.task('log','Selected "JUL - JDS ABD(02)" Category')
        }

        cy.wait(4000)
        cy.get(Cypress.env('OrdersNOECustRemarks')).type(this.Orderdata.CustomerRemarks)
        cy.task('log','Customer Remarks Entered')

        // cy.get(Cypress.env('OrdersNOECustPONo')).type(this.Orderdata.CustPONo)
        // cy.task('log','Customer PO No Entered')

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



        cy.fixture('OrderData/NewOrderProducts')
        .then((products) => {
        // `products` contains the full contents of the fixture
        products.forEach((product) => {

        /**In this for each loop we are are taking one by one all products from NewOrderProducts 
         *  json file and below lines of code in loop braces will be executed for all products.
         */
                
        
        cy.get(Cypress.env('OrdersNOEProduct')).type(product.productcode)
        cy.wait(4000)
        cy.get(Cypress.env('OrdersNOEProduct')).type('{downarrow}{enter}')
        cy.task('log','Selected Product from dropdown')
        cy.wait(5000)

        cy.get(Cypress.env('OrdersNOEOrderQty')).type(this.Orderdata.OrderQty)
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
        cy.wait(5000)
        cy.get(Cypress.env('AddOrderBtn')).click()
        cy.task('log','AddToOrder Button Clicked')

        cy.wait(4000)
        

        cy.get(Cypress.env('OrdersNOEOrderAmt')).invoke('text').then((text) => {
            // cy.log(ordervalue)
        ordervalue=text
            // cy.writeFile('OrderData/NOrder.json', { OrderAmount: ordervalue})
        });
        cy.wait(4000)
        cy.task('log','Order amount stored')
        
        let currentproductcode=product.productcode
        let productxpath="//td[contains(text(),'UB10')]"
        let newproductxpath=productxpath.replace('UB10',currentproductcode).replace('\u00A0','').trim();


        cy.xpath(newproductxpath).should('be.visible')
        cy.task('log','Verify that product is added in list')

        cy.log(ordervalue)
       })
       })

        cy.get(Cypress.env('OrdersNOESaveOrderBtn')).click()
        cy.task('log','Save Order Button Clicked')

        cy.xpath(Cypress.env('SalesReturnCnfrmOkay')).click()
        cy.task('log', 'Okay Button clicked On confirmation pop up')
    
    })


    it('Verify Order from order reports at admin side', function() {
        cy.log(ordervalue)
        cy.xpath("//div[contains(text(),'Successfully Created')]").invoke('text').then((text) => {
            // const text = $div.text()
        var OrderRefNo = text.replace('Successfully Created. Order Ref No is', '').replace('\u00A0', '').trim();
        cy.log(OrderRefNo)
        cy.login(this.data.Admin, this.data.password)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')   
        cy.task('log', 'Homepage is visible')
       
        cy.xpath(Cypress.env('ReportsMenu')).click()
        cy.task('log','Reports Menu Expanded')

        cy.xpath(Cypress.env('ReportsVisitsSubMenu')).click()
        cy.task('log','Opened Visits Submenu via click on visits')

        cy.xpath(Cypress.env('ReportsVisitsOrderSubMenu')).click()
        cy.task('log','Clicked Orders Submenu')

        cy.get(Cypress.env('ReportsVisitsOrgDrpDwn')).click()
        cy.get(Cypress.env('ReportsVisitsOrgDrpDwn')).type(this.Orderdata.SearchByOrg)
        cy.wait(4000)
        cy.get(Cypress.env('ReportsVisitsOrgDrpDwn')).type('{downarrow}{enter}')
        cy.wait(8000)
        cy.task('log','Organization selected')
        
        cy.get(Cypress.env('ReportsVisitsOrgFsrDrpDwn')).click()
        cy.get(Cypress.env('ReportsVisitsOrgFsrDrpDwn')).type(this.Orderdata.SearchByFSR)
        cy.wait(4000)
        cy.get(Cypress.env('ReportsVisitsOrgFsrDrpDwn')).type('{downarrow}{enter}')
        cy.wait(5000)
        cy.task('log','Organization FSR selected')

        if (this.Orderdata.WantToChangeDefaultStartDateTODate.toUpperCase()=='YES'){

        cy.get(Cypress.env('ReportsVisitsStartDate')).invoke('removeAttr', 'readonly').clear()
        .type(this.Orderdata.StartDate)
        cy.task('log','Selected From date')

        cy.get(Cypress.env('ReportsVisitsToDate')).invoke('removeAttr', 'readonly').clear()
        .type(this.Orderdata.EndDate)
        cy.task('log','Selected To date')
        }

        cy.get(Cypress.env('ReportsVisitsSearchBtn')).click()
        cy.task('log','Search button clicked')
        

        var ord= "//a[contains(text(),'M_NO00021727S0000000175')]"
        var VerifyOrder=ord.replace('M_NO00021727S0000000175',OrderRefNo).replace('\u00A0','').trim();
        
        cy.xpath(VerifyOrder).should('be.visible').click()
        cy.task('log','Clicked on created order')


        cy.fixture('OrderData/NewOrderProducts')
        .then((products) => {
        // `products` contains the full contents of the fixture
        products.forEach((product) => {

        var productxpath="//div[contains(text(),'MINI')]"
        var VerifyProduct=productxpath.replace('MINI',product.productcode).replace('\u00A0','').trim();

        cy.xpath(VerifyProduct).should('be.visible')
        cy.task('log','Product name verified in table')

        })
        })

       /**above lines of for each loop code is for verify all added prducts from json file in reports
         */

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
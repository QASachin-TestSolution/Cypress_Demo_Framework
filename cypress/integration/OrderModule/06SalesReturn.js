/*
 * @Author: sachin 
 * @Date: 2021-09-09 09:25:45 
 * @Last Modified by: sachin
 * @Last Modified time: 2021-11-09 14:23:48
 */
var refno
var returnvalue
/// <reference types="cypress" />
describe('Testing Sales Return functionality', function () {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('OrderData/SalesReturn').as('Orderdata')
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })
    })
    it('Creating Sales return', function () {
        //Fetching the data from Fixture files
        cy.login(this.data.email1, this.data.password1)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')
        cy.task('log', 'Homepage is visible')

        cy.xpath(Cypress.env('OrderMenu')).click()
        cy.task('log', 'Orders Menu Expanded')

        cy.xpath(Cypress.env('SalesReturnSubmenu')).click()
        cy.task('log', 'Clicked Sales Return Submenu')

        cy.get(Cypress.env('SalesReturnTypeDrpDwn')).click()
        cy.task('log', 'Clicked Sales Returntype Drop down')

        if (this.Orderdata.ReturnType.toUpperCase() == 'CREDIT NOTE') {
            cy.xpath(Cypress.env('SalesReturnTypeCreditNote')).click()
            cy.task('log', 'Selected JULPHAR -JDS ABD(02) from dropdown')
        }

        else if (this.Orderdata.ReturnType.toUpperCase() == 'REPLACEMENT') {
            cy.xpath(Cypress.env('SalesReturnTypeReplacement')).click()
            cy.task('log', 'Selected JULPHAR CONSUMER -JDS ABD(02) from dropdown')
        }
        cy.wait(4000)
        cy.get(Cypress.env('SalesReturnGoodsDrpDwn')).click()
        cy.task('log', 'Return Goods Dropdown Opened')

        if (this.Orderdata.GoodsCollected.toUpperCase() == 'YES') {
            cy.xpath(Cypress.env('SalesReturnGoodsCollectedYes')).click()
            cy.task('log', 'Selected Yes from dropdown')
        }

        else if (this.Orderdata.GoodsCollected.toUpperCase() == 'NO') {
            cy.xpath(Cypress.env('SalesReturnGoodsCollectedNo')).click()
            cy.task('log', 'Selected No from dropdown')
        }
        cy.wait(4000)

        cy.get(Cypress.env('BonusOrderCutomer')).type(this.Orderdata.Customer)
        cy.wait(4000)
        cy.get(Cypress.env('BonusOrderCutomer')).type('{downarrow}{enter}')
        cy.task('log', 'Customer selected in Customer Field')
        cy.wait(4000)

        cy.xpath(Cypress.env('BonusOrderDateBtn')).click()
        cy.get(Cypress.env('BonusOrderDatePopupp')).should('be.visible')
        cy.wait(2000)
        
        if (this.Orderdata.WantToChangeDefaultShippingDate.toUpperCase()=='YES'){
        cy.get(Cypress.env('BonusOrderDateselect')).invoke('removeAttr', 'readonly').clear()
            .type(this.Orderdata.ShippingDate)
        cy.task('log', 'Selected Shipping date')
        cy.wait(2000)
        }

        cy.get(Cypress.env('SalesReturnCategoryDrpDwn')).click()
        cy.task('log', 'Category Dropdown Opened')


        if (this.Orderdata.Category.toUpperCase()=='GEN - JDS ABD(02)'){
        cy.xpath(Cypress.env('OrdersNOECategory1')).click()
        cy.task('log','Selected "GEN - JDS ABD(02)" Category')
        }

        else if(this.Orderdata.Category.toUpperCase()=='JUL - JDS ABD(02)')
        {
        cy.xpath(Cypress.env('OrdersNOECategory2')).click()
        cy.task('log','Selected "JUL - JDS ABD(02)" Category')
        }

        cy.wait(5000)

        cy.xpath(Cypress.env('SalesReturnCustomerRefNo')).type(this.Orderdata.CustomerRefNo)
        cy.task('log', 'Customer Ref No is entered')

        cy.get(Cypress.env('BonusOrderRemarks')).type(this.Orderdata.Customeremarks)
        cy.task('log', 'Customer Remarks is entered')

        cy.get(Cypress.env('SalesReturnInvoiceRefNo')).type(this.Orderdata.InvoiceRefNo)
        cy.task('log', 'Invoice Ref No is entered')


        cy.fixture('OrderData/NewOrderProducts')
        .then((products) => {
        // `products` contains the full contents of the fixture
        products.forEach((product) => {
        
        /**In this for each loop we are are taking one by one all products from SalesOrderProducts 
         *  json file and below lines of code in loop braces will be executed for all products.
         */

        cy.get(Cypress.env('BonusOrderProductfield')).type(product.productcode)
        cy.wait(4000)
        cy.get(Cypress.env('BonusOrderProductfield')).type('{downarrow}{enter}')
        cy.task('log', 'Product is selected')
        cy.wait(4000)

        cy.get(Cypress.env('BonusOrderOrderQtyfield')).type(this.Orderdata.OrderQty)
        cy.get(Cypress.env('BonusOrderOrderQtyfield')).type('{enter}')
        cy.task('log', 'Order Qty is entered')
        cy.wait(3000)

        if (this.Orderdata.BounsQtyExist.toUpperCase() == 'YES') {
            cy.get(Cypress.env('SalesReturnBonusQty')).type(this.Orderdata.BonusQty)
            cy.task('log', 'Bonus Qty is entered')
        }
        cy.wait(4000)
        cy.get(Cypress.env('SalesReturnLotNo')).type(this.Orderdata.LotNo)
        cy.task('log', 'Lot No is entered')
        cy.wait(2000)

        cy.xpath(Cypress.env('SalesReturnExpireDatepopUpBtn')).click()
        cy.get(Cypress.env('SalesReturnExpireDatepopUp')).should('be.visible')
        cy.wait(2000)
        
        if (this.Orderdata.WantToChangeDefaultExpiryDate.toUpperCase()=='YES'){
        cy.get(Cypress.env('SalesReturnExpireDate')).invoke('removeAttr', 'readonly').clear()
            .type(this.Orderdata.ExpiryDate)
        cy.task('log', 'Selected Expiry date')
        }

        cy.get(Cypress.env('SalesReturnReasonDrpDwn')).click()
        cy.task('log', 'Return Reason Dropdown Opened')

        if (this.Orderdata.ReturnReason.toUpperCase() == 'DAMAGED') {
            cy.xpath(Cypress.env('SalesReturnReasonDamaged')).click()
            cy.task('log', 'Selected Damaged from dropdown')
        }

        else if (this.Orderdata.ReturnReason.toUpperCase() == 'EXPIRED') {
            cy.xpath(Cypress.env('SalesReturnReasonExpired')).click()
            cy.task('log', 'Selected Expired from dropdown')
        }

        else if (this.Orderdata.ReturnReason.toUpperCase() == 'RESELLABLE') {
            cy.xpath(Cypress.env('SalesReturnReasonResellable')).click()
            cy.task('log', 'Selected Resellable from dropdown')
        }

        cy.wait(3000)

        cy.get(Cypress.env('SalesReturnInvoice')).type(this.Orderdata.invoiceNo)
        cy.get(Cypress.env('SalesReturnInvoice')).type('{enter}')
        cy.task('log', 'invoice No is entered')
        cy.wait(3000)
        cy.get(Cypress.env('BonusOrderProductUom')).should('have.value', 'CS')
        cy.task('log', 'Verified that EA value is assigned for Product UOM Dropdown')
        cy.wait(3000)

        cy.get(Cypress.env('SalesReturnReason')).type(this.Orderdata.Reason)
        cy.task('log', 'Reason is entered')
        cy.wait(3000)

        cy.get(Cypress.env('BonusOrderAddProductBtn')).click()
        cy.task('log', 'Add product button clicked')
        cy.wait(4000)
        
       })
       })
        cy.get(Cypress.env('SalesReturnValuePosition')).invoke('text').then((text) => {
        returnvalue=text
        });

        cy.get(Cypress.env('SalesReturnProductAddedPlace')).contains(this.Orderdata.Productverify)
        cy.task('log', 'Verified that Product is added')

        cy.get(Cypress.env('SalesReturnAdd')).click()
        cy.task('log', 'Save Return button clicked')
        cy.wait(4000)

        cy.xpath(Cypress.env('SalesReturnCnfrmOkay')).click()
        cy.task('log', 'Okay Button clicked On confirmation pop up')
        
        cy.xpath("//div[contains(text(),'Successfully Created')]").invoke('text').then((text) => {
        refno = text.replace('Successfully Created. Return Ref No is', '').replace('\u00A0', '').trim();
    })

    })




    it('Verify Order from order reports at admin side', function() {
        cy.log(returnvalue)
        cy.log(refno)
        cy.login(this.data.Admin, this.data.password)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')   
        cy.task('log', 'Homepage is visible')
       
        cy.xpath(Cypress.env('ReportsMenu')).click()
        cy.task('log','Reports Menu Expanded')

        cy.xpath(Cypress.env('ReportsVisitsSubMenu')).click()
        cy.task('log','Opened Visits Submenu via click on visits')

        cy.xpath(Cypress.env('ReportsCreditNoteSubmenu')).click()
        cy.task('log','Clicked Credit note Submenu')

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
        var VerifyOrder=ord.replace('M_NO00021727S0000000175',refno).replace('\u00A0','').trim();
        
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
        var VerifyOrderValue=Ordervaluexpath.replace('test',returnvalue).replace('\u00A0','').trim();

        cy.xpath(VerifyOrderValue).should('be.visible')
        cy.task('log','Product return value verified in table')
     
        cy.xpath("//div[contains(text(),'New')]").should('be.visible')
        cy.task('log','Verified that product order category is new')
  
        var qtyxpath="//div[contains(text(),'50')]"
        var varifyqtyxpath=qtyxpath.replace('50',this.Orderdata.OrderQty).replace('\u00A0','').trim();
        cy.xpath(varifyqtyxpath).should('be.visible')
        cy.task('log','Product Qty verified in table')
        })

    })


/*
 * @Author: sachin 
 * @Date: 2021-09-07 07:51:36 
 * @Last Modified by: sachin
 * @Last Modified time: 2021-12-02 16:17:34
 */
/// <reference types="cypress" />
describe('Testing Bonus Order functionality', function(){
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
        cy.fixture('OrderData/BonusOrder').as('Orderdata')
        cy.on('uncaught:exception', (err, runnable) => {
        
            return false})
    })
    it('Creatng Bonus Order', function() {
        //Fetching the data from Fixture files
        cy.login(this.data.email1, this.data.password1)
        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')   
        cy.task('log', 'Homepage is visible')

        cy.xpath(Cypress.env('OrderMenu')).click()
        cy.task('log','Orders Menu Expanded')

        cy.xpath(Cypress.env('BonusOrderSubmenu')).click()
        cy.task('log','Clicked Bonus Order Submenu')

        cy.get(Cypress.env('BonusOrderCutomer')).type(this.Orderdata.Customer)
        cy.wait(4000)
        cy.get(Cypress.env('BonusOrderCutomer')).type('{downarrow}{enter}')
        cy.task('log','Customer selected in Customer Field')
        cy.wait(4000)
        cy.get(Cypress.env('BonusOrderCategoryDrpDwn')).click()
        cy.task('log','Catrgory Dropdown Opened')

        if (this.Orderdata.Categgory.toUpperCase()=='JUL -JDS ABD(02)'){
        cy.xpath(Cypress.env('BonusOrderCategoryOption1')).click()
        cy.task('log','Selected JULPHAR -JDS ABD(02) from dropdown')
        }

        else if(this.Orderdata.Categgory.toUpperCase()=='JULPHAR CONSUMER -JDS ABD(02)'){
        cy.xpath(Cypress.env('BonusOrderCategoryOption2')).click({force: true})
        cy.task('log','Selected JULPHAR CONSUMER -JDS ABD(02) from dropdown')
        }

        cy.wait(3000)
        cy.xpath(Cypress.env('BonusOrderDateBtn')).click()
        cy.get(Cypress.env('BonusOrderDatePopupp')).should('be.visible')
        cy.wait(2000)
        
        if (this.Orderdata.WantToChangeDefaultDate.toUpperCase()=='YES'){
        cy.get(Cypress.env('BonusOrderDateselect')).invoke('removeAttr', 'readonly').clear()
        .type(this.Orderdata.NewDate)
        cy.task('log','Selected Shipping date')
        }

        cy.task('log','By Default date Selected Shipping date')

        cy.get(Cypress.env('BonusOrderCustomerPoNo')).type(this.Orderdata.CustomerPoNo)
        cy.task('log','Customer Po No is entered')

        cy.get(Cypress.env('BonusOrderRemarks')).type(this.Orderdata.Customeremarks)
        cy.task('log','Customer Remarks is entered')

        cy.get(Cypress.env('BonusOrderSkipConsolidationDrpDwn')).click()
        cy.task('log','SkipConsolidation DropDown Expanded')

        cy.xpath(Cypress.env('BonusOrderSkipConsolidationYes')).should('be.visible')
        cy.task('log','Verified That Yes Option is Avaialable in SkipConsolidation DropDown')

        cy.xpath(Cypress.env('BonusOrderSkipConsolidationNo')).should('be.visible')
        cy.task('log','Verified That No Option is Avaialable in SkipConsolidation DropDown')

        if (this.Orderdata.SkipConsolidation.toUpperCase()=='YES'){
        cy.xpath(Cypress.env('BonusOrderSkipConsolidationYes')).click()
        cy.task('log','Yes Option is Selected in SkipConsolidation DropDown')
        }
    
        else if(this.Orderdata.SkipConsolidation.toUpperCase()=='NO')
        {
        cy.xpath(Cypress.env('BonusOrderSkipConsolidationNo')).click()
        cy.task('log','No Option is Selected in SkipConsolidation DropDown')
        }

        if (this.Orderdata.WholeSaleOrder.toUpperCase()=='YES'){
        cy.get(Cypress.env('BonusOrderWholeSaleOrdercheckbox')).click()
        cy.task('log','Whole saleOrder Checkbox checked')
        }

        cy.fixture('OrderData/BonusOrderProducts')
        .then((products) => {
        // `products` contains the full contents of the fixture
        products.forEach((product) => {

        /**In this for each loop we are are taking one by one all products from BonusOrderProducts 
         *  json file and below lines of code in loop braces will be executed for all products.
         */
        
        cy.get(Cypress.env('BonusOrderProductfield')).type(product.productcode)
        cy.wait(3000)
        cy.get(Cypress.env('BonusOrderProductfield')).type('{downarrow}{enter}')
        cy.task('log','Product is selected')
        cy.wait(5000)

        cy.get(Cypress.env('BonusOrderProdRemarks')).type(this.Orderdata.ProductRemark)
        cy.task('log','Product Remark is entered')
        
        cy.get(Cypress.env('BonusOrderOrderQtyfield')).type(this.Orderdata.OrderQty)
        cy.task('log','Bonus Order Qty is entered')

        cy.get('#MainContent_RadPanelBar2_i0_QOH > .form-group > label').click()
        /**above one line is just for start processing after entering Order Qty via
         * click anywhere on screen
         */

        cy.wait(5000)
        cy.get(Cypress.env('BonusOrderProductUom')).should('have.value','CS')
        cy.task('log','Verified that EA value is assigned for Product UOM Dropdown')
        cy.wait(4000)
        cy.get(Cypress.env('BonusOrderAddProductBtn')).click()

        let currentproductcode=product.productcode
        let productxpath="//td[contains(text(),'UB10')]"
        let newproductxpath=productxpath.replace('UB10',currentproductcode).replace('\u00A0','').trim();

        cy.xpath(newproductxpath).should('be.visible')
        cy.task('log','Verified that product is added in list')


        })
    })

        cy.get(Cypress.env('BonusOrderSaveBtn')).click()
        cy.task('log','Clicked On save button')

        cy.xpath(Cypress.env('BonusOrderConfirmOk')).click()
        cy.task('log','Okay Button Clicked On Confirmation Pop_up')

    })


    it('Verify Order from order reports at admin side', function() {
        cy.xpath("//div[contains(text(),'Successfully Created')]").invoke('text').then((text) => {
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
        cy.wait(10000)
        cy.task('log','Organization selected')
        
        cy.get(Cypress.env('ReportsVisitsOrgFsrDrpDwn')).click()
        cy.get(Cypress.env('ReportsVisitsOrgFsrDrpDwn')).type(this.Orderdata.SearchByFSR)
        cy.wait(4000)
        cy.get(Cypress.env('ReportsVisitsOrgFsrDrpDwn')).type('{downarrow}{enter}')
        cy.wait(10000)
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
        cy.wait(10000)
        

        var ord= "//a[contains(text(),'M_NO00021727S0000000175')]"
        var VerifyOrder=ord.replace('M_NO00021727S0000000175',OrderRefNo).replace('\u00A0','').trim();
        
        cy.xpath(VerifyOrder).click({force: true})
        cy.task('log','Clicked on created order')
        
        cy.fixture('OrderData/BonusOrderProducts')
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
     
        cy.xpath("//div[contains(text(),'New')]").should('be.visible')
        cy.task('log','Verified that product order category is new')
  
        var qtyxpath="//div[contains(text(),'50')]"
        var varifyqtyxpath=qtyxpath.replace('50',this.Orderdata.OrderQty).replace('\u00A0','').trim();
        cy.xpath(varifyqtyxpath).should('be.visible')
        cy.task('log','Product Qty verified in table')
        })

    })
    
})
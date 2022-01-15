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

   


//     let originalWindow = null;

// Cypress.Commands.add('openWindow', (url, features) => {
//   if(!originalWindow){
//     originalWindow = cy.state('window');
//     originalWindow.APP_ID = 1; // depth 1
//   }
//   const w = Cypress.config('viewportWidth')
//   const h = Cypress.config('viewportHeight')
//   if (!features) {
//     features = `width=${w}, height=${h}`
//   }
//   console.log('openWindow %s "%s"', url, features)

//   return new Promise(resolve => {
//     if (window.top.MyAltWindow && window.top.MyAltWindow.close) {
//       console.log('window exists already')
//       window.top.MyAltWindow.close()
//     }
//     // https://developer.mozilla.org/en-US/docs/Web/API/Window/open
//     window.top.MyAltWindow = window.top.open(url, 'MyAltWindow', features)
//     window.top.MyAltWindow.APP_ID = 2; // TODO: make this support n-many

//     // letting page enough time to load and set "document.domain = localhost"
//     // so we can access it
//     setTimeout(() => {
//       cy.state('document', window.top.MyAltWindow.document)
//       cy.state('window', window.top.MyAltWindow)
//       resolve()
//     }, 500)
//   })
// })

// /* toggle between 2 for now, could set this up to handle N-many windows */
// Cypress.Commands.add('switchWindow', ()=>{
//   return new Promise(resolve=>{
//     if(cy.state('window').APP_ID === 1){
//       // switch to our ALT window
//       console.log('switching to alt popup window...')
//       cy.state('document', originalWindow.top.MyAltWindow.document)
//       cy.state('window', originalWindow.top.MyAltWindow)
//       originalWindow.blur()
//     }else{
//       console.log('switching back to original window')
//       // switch back to originalWindow
//       cy.state('document', originalWindow.document)
//       cy.state('window', originalWindow)
//       originalWindow.top.MyAltWindow.blur()
//     }
//     window.blur();

//     cy.state('window').focus()

//     resolve();
//   })
// })

// Cypress.Commands.add('closeWindow', ()=>{
//   return new Promise(resolve=>{
//     if(window.top.MyAltWindow && window.top.MyAltWindow.close){
//       window.top.MyAltWindow.close() // close popup
//       window.top.MyAltWindow = null
//     }
//     if(originalWindow){
//       cy.state('document', originalWindow.document)
//       cy.state('window', originalWindow)
//     }
//     cy.state('window').focus()
//   resolve()
//   })
// })

// it('counts clicks', () => {
//   cy.visit('/')
//   cy.get('#clicked').should('have.text', '0')
  
//   cy.openWindow('/')
//   cy.contains('Page body')

//   cy.get('button')
//     .click()
//     .click()
//   cy.get('#clicked').should('have.text', '2')
  
//   cy.switchWindow()
//   cy.get('#clicked').should('have.text', '0')
  
//   cy.switchWindow()
//   cy.get('#clicked').should('have.text', '2')
  
//   cy.closeWindow()
//   // continue testing in original window
//   cy.get('button')
//     .click()
//   cy.get('#clicked').should('have.text', '1')
// })







    it('Creating New Order Entry', function() {
        //Fetching the data from Fixture files
        cy.login(this.data.Admin, this.data.password)

        cy.task('log', 'Login into the website using valid Username and valid Password')

        cy.get(Cypress.env('HomepageLogo')).should('be.visible')   
        cy.task('log', 'Homepage is visible')

        cy.get('#M5 > .title').click()
        cy.get('#P65 > .title').click()
        cy.get('#MainContent_ddSite_Input').type('5831{downarrow}{enter}')
        cy.get('#MainContent_RP_ID_Input').click()
        cy.get('.rcbList > :nth-child(8)').click()
        cy.get('#MainContent_ModBtn_input').click()
        // cy.window().then((win) => {
        //     cy.spy(win, 'open').as('windowOpen'); // 'spy' vs 'stub' lets the new tab still open if you are visually watching it
        //   });
        cy.get('[title="9-1-2023"]').invoke('removeAttr', 'onclick')

        cy.get('[title="9-1-2023"]').click({force:true})

        // cy.get('@windowOpen').get('#ResetBtn')
        // .click()

        // cy.openWindow('/')
        // cy.switchWindow()



})
})
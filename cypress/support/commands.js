// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
require('cypress-downloadfile/lib/downloadFileCommand')
Cypress.Commands.add('login', (email, pw) => {
    cy.visit(Cypress.env('login_url'))
    cy.task('log', 'Website Launched')
    cy.get(Cypress.env('UsernameTextbox')).type(email)
    cy.get(Cypress.env('PasswordTextbox')).type(pw)
    cy.get(Cypress.env('LoginButton')).click()     
    

})


Cypress.Commands.add('forceVisit', url => {
    cy.window().then(win => {
        return win.open(url, '_self'); 
      });
})


Cypress.Commands.add("clickRecaptcha", () => {
    cy.window().then(win => {
      win.document
        .querySelector("iframe[src*='recaptcha']")
        .contentDocument.getElementById("recaptcha-token")
        .click();
    });
  });


  Cypress.Commands.add('sqlServerDB', (query) => {
    if (!query) {
        throw new Error('Query must be set');
    }

    cy.task('sqlServerDB', query).then(response => {
        let result = [];
        

        const flatten = r => Array.isArray(r) && r.length === 1 ? flatten(r[0]) : r;

        if (response) {
            for (let i in response) {
                result[i] = [];
                for (let c in response[i]) {
                    result[i][c] = response[i][c].value;
                }
            }
            result = flatten(result);
        } else {
            result = response;
        }
        console.log('RES',result)
        return result;
    });
});



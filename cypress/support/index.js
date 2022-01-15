// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import './commands'
require('cypress-xpath')
import '@shelex/cypress-allure-plugin';
import 'cypress-mochawesome-reporter/register';

// Alternatively you can use CommonJS syntax:
// require('./commands')
// import sqlServer from 'cypress-sql-server';
// sqlServer.loadDBCommands();

before(() => {
    cy.log('Global Before Hook');
    cy.sqlServerDB("update TBL_App_Control set Control_Value='N' where Control_Key='ENABLE_LOGIN_CAPTCHA'")
        .then(result => 
            cy.log(result)
            
            )
  });
  
  after(() => {
    cy.log('Global After Hook');
    cy.sqlServerDB("update TBL_App_Control set Control_Value='Y' where Control_Key='ENABLE_LOGIN_CAPTCHA'")
        .then(result => 
            cy.log(result)
            
            )
  });
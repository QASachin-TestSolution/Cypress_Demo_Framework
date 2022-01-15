/*
 * @Author: sachin 
 * @Date: 2021-09-09 09:26:22 
 * @Last Modified by:   sachin 
 * @Last Modified time: 2021-09-09 09:26:22 
 */
/// <reference types="cypress" />
describe('Testing Login Functionality of Salesworx', function(){
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('datafile').as('data')
    })

    it('Testing Valid Login', function() {
            //Fetching the data from Fixture file
            cy.login(this.data.email1, this.data.password1)
            cy.task('log', 'Login into the website using valid Username and valid Password')
            cy.get(Cypress.env('HomepageLogo')).should('be.visible')   
            cy.task('log', 'Homepage is visible')
        })

    it('Testing Invalid Password', function() {
            //Fetching the data from Fixture file
            cy.login(this.data.email2, this.data.password2)
            cy.task('log', 'Login into the website using valid Username and Invalid Password')
            cy.get(Cypress.env('InvalidLoginmsg')).should('have.text','Invalid password.')   
            cy.task('log', 'Invalid password text is visible')
        })

    it('Testing Invalid Username', function() {
            //Fetching the data from Fixture file
            cy.login(this.data.email3, this.data.password3)
            cy.task('log', 'Login into the website using Invalid Username and valid Password')
            cy.get(Cypress.env('InvalidLoginmsg')).should('have.text','Invalid user name.')   
            cy.task('log', 'Invalid user name text is visible')
        })    
    })   
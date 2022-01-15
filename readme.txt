SalesworxBO (SWBO): This repo contains cypress scripts for the SWBO modules functionality.

SWBO/allure-report: In this folder index.html report will be generated when we execute cypress test in headless mode.this report can only be opened on server.

Integration :  In this folder test scripts are stored for each module in relevant modules folder.

fixture : In this folder test data is stored in the form of json file for each script .

Plugins :  In this folder, Plugins configuration will be done in index.js file.

Support : In this folder , index.js file will be used of import plugins. And in commands.js , we can write generic function which we are using repeatedly.

Common configuration file :

cypress.json : Here we will do common configuration for all over framework. like :

"baseUrl": "http://ucssolutions.no-ip.biz:3222/MedRep_CS/html" 
 
 This url will be used commonly for all cy.visit command by default. we can append this url via adding ./ in visit. 
 like for login page:   cy.visit(/login)


"chromeWebSecurity": false,

By setting chrome websecurity false can prevent cypress script failing in case of some chrome chromeWebSecurity issues.

"defaultCommandTimeout": 50000,

defaultCommandTimeout , cypress command will wait 'Value' milliseconds before failing a script.

"pageLoadTimeout": 60000,

pageLoadTimeout , cypress will wait 'Value' milliseconds for pageload before failing it.


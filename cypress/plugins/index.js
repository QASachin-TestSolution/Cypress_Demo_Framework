/// <reference types="cypress" />
/// <reference types="@shelex/cypress-allure-plugin" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}

const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = (on) => {
  on('before:run', async (details) => {
    console.log('override before:run');
    await beforeRunHook(details);
  });

  on('after:run', async () => {
    console.log('override after:run');
    await afterRunHook();
  });
};
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
  
    
module.exports = (on, config) => {
  on('task', {downloadFile})
// import allureWriter from "@shelex/cypress-allure-plugin/writer";
   
const fs = require('fs');

on('task', {
  downloads:  (downloadspath) => {
    return fs.readdirSync(downloadspath)
  }
})
  

  on('task', {
    log(message) {
      console.log(message)
      return null
    },
  })
   
 
  //  return config;
  

  on('task', {
    sqlServerDB: sql => {
      return execSQL(sql, config.env.db)
    },
  })
  allureWriter(on, config);
  return config

  
  
  

  
}








const tedious = require('tedious')
function execSQL(sql, config) {
  const connection = new tedious.Connection(config);
  return new Promise((res, rej) => {
    connection.on('connect', err => {
      if (err) {
        console.log(err)
        rej(err);
      }

      const request = new tedious.Request(sql, function (err, rowCount, rows) {
        return err ? rej(err) : res(rows);
      });

      connection.execSql(request);
    });
  })
}



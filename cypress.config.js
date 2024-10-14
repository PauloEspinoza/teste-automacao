const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bqksba',
  viewportHeight: 880,
  viewportWidth: 1280,

  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJunitReporterReporterOption: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml'
    },
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: 'Relatório de Testes',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false
    }
  },

  e2e: {
    pageLoadTimeout: 120000,
    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on)

      // implement node event listeners here
      specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}"
  },

  baseUrl: 'https://portalrdvqa.azurewebsites.net/Account/Login',

 },
});
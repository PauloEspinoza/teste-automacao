const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bqksba',
  viewportHeight: 880,
  viewportWidth: 1280,

  e2e: {
    pageLoadTimeout: 120000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}"
  },

  baseUrl: 'https://portalrdvqa.azurewebsites.net/Account/Login',

 },
});
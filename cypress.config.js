const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://snatchbot.me/',
    chromeWebSecurity: false,
    includeShadowDom: true,
    "screenshotOnRunFailure": true,
    "reporter": "cypress-multi-reporters",
    "reporterOptions": {
      "reporterEnabled": "mochawesome",
      "mochawesomeReporterOptions": {
        "reportDir": "cypress/reports/mocha",
        "overwrite": false,
        "html": true,
        "json": true
      }
    }
  }
})
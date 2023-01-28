const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://snatchbot.me/',
    chromeWebSecurity: false,
    includeShadowDom: true
  },
})
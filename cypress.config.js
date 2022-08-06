const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ja7pd3',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  e2e: {
    // Test will not run after a change automatically
    watchForFileChanges:false,
    // Default timeout changes to 4000ms 
    defaultCommandTimeout:6000,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile})
    },
  },
});

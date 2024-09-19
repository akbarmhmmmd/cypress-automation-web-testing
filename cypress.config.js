const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "asq5b6",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: false,
  },
});

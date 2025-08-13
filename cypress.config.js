const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://kanban-dusky-five.vercel.app",
    viewportWidth: 1366,
    viewportHeight: 768,
    video: false,
    setupNodeEvents(on, config) {},
  },
});

const { defineConfig } = require('cypress');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        createBundler({
          plugins: [preprocessor.default(config)]
        })
      );

      return config;
    },
    stepDefinitions: 'cypress/support/step_definitions/**/*.js',
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'https://uatgosaas.app/login'
  }
});
exports.config = {

  // address of the running server.
  seleniumAddress: 'http://localhost:4444/wd/hub/',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['*/*Spec.js'],

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome'
    // ,chromeOptions: {args: ["--headless", "--disable-gpu", "--window-size=800,600"]}
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',
  // framework: 'mocha',

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.  
    defaultTimeoutInterval: 90000, // Default time to wait in ms before a test fails.
    includeStackTrace: true,
    isVerbose: true
  },

  mochaOpts: {
    reporter: 'spec',
    timeout: 30000
  }

};
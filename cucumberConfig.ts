import {Config} from "protractor";
import { protractor } from "protractor/built/ptor";
import { JsonFormatter } from "cucumber";
import * as reporter from "cucumber-html-reporter";

export let config : Config = { 
    // The address of a running selenium server.
   // seleniumAddress: 'http://localhost:4444/wd/hub',

   directConnect:true,
   framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },
    cucumberOpts: {
        // tags:"@angular",
        format:'json:./cucumberReport.json',
       
        // require step definitions
        require: [
          './stepFiles/*.js' // accepts a glob
        ]
      },
      onComplete: ()=>{


        var options = {
          theme: 'bootstrap',
          jsonFile: './cucumberReport.json',
          output: './cucumberReport.html',
          reportSuiteAsScenarios: true,
          scenarioTimestamp: true,
          launchReport: true,
          metadata: {
              "App Version":"0.3.2",
              "Test Environment": "Internal",
              "Browser": "Chrome  54.0.2840.98",
              "Platform": "Windows 10",
              "Parallel": "Scenarios",
              "Executed": "Remote"
          }
      };
   
      reporter.generate(options);

      },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/demo.feature'],



  
  
  };
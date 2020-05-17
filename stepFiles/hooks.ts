import {Before,After, Status} from "cucumber";
import { browser } from "protractor";



Before({tags: "angular"}, function () {
  // This hook will be executed before scenarios tagged with @foo
  browser.manage().window().maximize();
  console.log("Angular Testing");
});

Before({tags: "@foo and @bar"}, function () {
  // This hook will be executed before scenarios tagged with @foo and @bar
});

Before({tags: "@foo or @bar"}, function () {
  // This hook will be executed before scenarios tagged with @foo or @bar
});

// You can use the following shorthand when only specifying tags
Before("@foo", function () {
});

After(async function(scenario) {

    console.log("Test is completed");
    if(scenario.result.status === Status.FAILED){
        //code to take SS
     const screenshot =  await browser.takeScreenshot();
     this.attach(screenshot,"image/png");
    }
});
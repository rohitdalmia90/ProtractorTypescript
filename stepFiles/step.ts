import { Given, When, Then, After } from "cucumber";
import { protractor } from "protractor/built/ptor";
import { link } from "fs";
import { calculator } from "../PageObj/pageObjects/calculator";
import { browser, element, by } from "protractor";
import chai from "chai";

let calc = new calculator();
var expect = chai.expect;



Given('I will navigate to {string} site', async (string) => {
    if (string =="calculator")
    await browser.get('https://juliemr.github.io/protractor-demo/');
    else (string =="angularJS")
    await browser.get("https://angularjs.org");


});


When('I add two numbers {string} and {string}', async (string, string2) => {
    await calc.firstEditBox.sendKeys(string);
    await calc.secondEditBox.sendKeys(string2);
});


Then('the output displayed should be {string}', function (string) {
    calc.go.click();

    calc.getResult.getText().then(function (text) {
        expect(text).to.equal(string);
        console.log(text);
    })
});




When('I click on header link', async () => {
    await element(by.linkText("angular.io")).click();

});

Then('I will enter {string} in searchBox', async (string) => {
    await element(by.css("input[type='search']")).sendKeys("hello");

});




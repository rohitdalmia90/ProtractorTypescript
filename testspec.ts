import { browser } from "protractor";
import { element, by } from "protractor";
import { calculator } from "./PageObj/pageObjects/calculator";
import { angularHomePage } from "./PageObj/pageObjects/angularHomePage";

describe('ChainLocators', () => {

	it('chainLocatorTech', async () => {
		let calc = new calculator();

		browser.get('https://juliemr.github.io/protractor-demo/');
		await calc.firstEditBox.sendKeys("3");
		await calc.secondEditBox.sendKeys("5");
		calc.go.click();

		calc.getResult.getText().then(function (text) {
			console.log(text);
		})

		element(by.model("operator")).element(by.css("option:nth-child(4)")).click();

		element.all(by.repeater("result in memory")).count()

	})



	it('angular home page title validation', async () => {

		let angular = new angularHomePage();

		await browser.get("https://angularjs.org");
		await element(by.linkText("angular.io")).click();
		await element(by.css("input[type='search']")).sendKeys("hello");
	})



})
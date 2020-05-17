"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const calculator_1 = require("../PageObj/pageObjects/calculator");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
let calc = new calculator_1.calculator();
var expect = chai_1.default.expect;
cucumber_1.Given('I will navigate to {string} site', (string) => __awaiter(void 0, void 0, void 0, function* () {
    if (string == "calculator")
        yield protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
    else
        (string == "angularJS");
    yield protractor_1.browser.get("https://angularjs.org");
}));
cucumber_1.When('I add two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.firstEditBox.sendKeys(string);
    yield calc.secondEditBox.sendKeys(string2);
}));
cucumber_1.Then('the output displayed should be {string}', function (string) {
    calc.go.click();
    calc.getResult.getText().then(function (text) {
        expect(text).to.equal(string);
        console.log(text);
    });
});
cucumber_1.When('I click on header link', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.element(protractor_1.by.linkText("angular.io")).click();
}));
cucumber_1.Then('I will enter {string} in searchBox', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.element(protractor_1.by.css("input[type='search']")).sendKeys("hello");
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBGaWxlcy9zdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQW9EO0FBR3BELGtFQUErRDtBQUMvRCwyQ0FBa0Q7QUFDbEQsZ0RBQXdCO0FBRXhCLElBQUksSUFBSSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBQzVCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFJekIsZ0JBQUssQ0FBQyxrQ0FBa0MsRUFBRSxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBQ3ZELElBQUksTUFBTSxJQUFHLFlBQVk7UUFDekIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDOztRQUMzRCxDQUFDLE1BQU0sSUFBRyxXQUFXLENBQUMsQ0FBQTtJQUMzQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFHL0MsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyx5Q0FBeUMsRUFBRSxDQUFPLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRTtJQUN0RSxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyx5Q0FBeUMsRUFBRSxVQUFVLE1BQU07SUFDNUQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUVoQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7UUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDO0FBS0gsZUFBSSxDQUFDLHdCQUF3QixFQUFFLEdBQVMsRUFBRTtJQUN0QyxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRXJELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsb0NBQW9DLEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUN4RCxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRXBFLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==
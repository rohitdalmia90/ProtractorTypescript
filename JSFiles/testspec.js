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
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const protractor_2 = require("protractor");
const calculator_1 = require("./PageObj/pageObjects/calculator");
const angularHomePage_1 = require("./PageObj/pageObjects/angularHomePage");
describe('ChainLocators', () => {
    it('chainLocatorTech', () => __awaiter(void 0, void 0, void 0, function* () {
        let calc = new calculator_1.calculator();
        protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
        yield calc.firstEditBox.sendKeys("3");
        yield calc.secondEditBox.sendKeys("5");
        calc.go.click();
        calc.getResult.getText().then(function (text) {
            console.log(text);
        });
        protractor_2.element(protractor_2.by.model("operator")).element(protractor_2.by.css("option:nth-child(4)")).click();
        protractor_2.element.all(protractor_2.by.repeater("result in memory")).count();
    }));
    it('angular home page title validation', () => __awaiter(void 0, void 0, void 0, function* () {
        let angular = new angularHomePage_1.angularHomePage();
        yield protractor_1.browser.get("https://angularjs.org");
        yield protractor_2.element(protractor_2.by.linkText("angular.io")).click();
        yield protractor_2.element(protractor_2.by.css("input[type='search']")).sendKeys("hello");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFxQztBQUNyQywyQ0FBeUM7QUFDekMsaUVBQThEO0FBQzlELDJFQUF3RTtBQUV4RSxRQUFRLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtJQUU5QixFQUFFLENBQUMsa0JBQWtCLEVBQUUsR0FBUyxFQUFFO1FBQ2pDLElBQUksSUFBSSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBRTVCLG9CQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7UUFDMUQsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO1lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUE7UUFFRixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFN0Usb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFFckQsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUlGLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRSxHQUFTLEVBQUU7UUFFbkQsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7UUFFcEMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakQsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqRSxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBSUgsQ0FBQyxDQUFDLENBQUEifQ==
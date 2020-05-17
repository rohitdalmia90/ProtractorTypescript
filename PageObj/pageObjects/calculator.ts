import { ElementFinder, element, by} from "protractor";

export class calculator
{
    firstEditBox:ElementFinder;
    secondEditBox:ElementFinder;
    go:ElementFinder;
    getResult:ElementFinder;

    constructor(){
        this.firstEditBox=element(by.model("first"));
        this.secondEditBox=element(by.model("second"));
        this.go=element(by.id("gobutton"));
        this.getResult=element(by.repeater("result in memory")).element(by.css("td:nth-child(2)"));
    }



}
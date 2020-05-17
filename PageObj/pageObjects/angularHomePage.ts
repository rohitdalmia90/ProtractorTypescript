import { ElementFinder,element,by } from "protractor";

export class angularHomePage{

angularlnk:ElementFinder;
search:ElementFinder;

constructor(){
    this.angularlnk=element(by.linkText("angular.io"));
    this.search=element(by.css("input[type='search']"));
}

}
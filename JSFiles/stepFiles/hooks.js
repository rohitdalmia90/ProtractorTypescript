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
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before({ tags: "angular" }, function () {
    // This hook will be executed before scenarios tagged with @foo
    protractor_1.browser.manage().window().maximize();
    console.log("Angular Testing");
});
cucumber_1.Before({ tags: "@foo and @bar" }, function () {
    // This hook will be executed before scenarios tagged with @foo and @bar
});
cucumber_1.Before({ tags: "@foo or @bar" }, function () {
    // This hook will be executed before scenarios tagged with @foo or @bar
});
// You can use the following shorthand when only specifying tags
cucumber_1.Before("@foo", function () {
    // This hook will be executed before scenarios tagged with @foo
});
cucumber_1.After((scenario) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Test is completed");
    if (scenario.result.status === cucumber_1.Status.FAILED) {
        //code to take SS
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    }
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRmlsZXMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBOEM7QUFDOUMsMkNBQXFDO0FBSXJDLGlCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDLEVBQUU7SUFDeEIsK0RBQStEO0lBQy9ELG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2pDLENBQUMsQ0FBQyxDQUFDO0FBRUgsaUJBQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxlQUFlLEVBQUMsRUFBRTtJQUM5Qix3RUFBd0U7QUFDMUUsQ0FBQyxDQUFDLENBQUM7QUFFSCxpQkFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBQyxFQUFFO0lBQzdCLHVFQUF1RTtBQUN6RSxDQUFDLENBQUMsQ0FBQztBQUVILGdFQUFnRTtBQUNoRSxpQkFBTSxDQUFDLE1BQU0sRUFBRTtJQUNiLCtEQUErRDtBQUNqRSxDQUFDLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsQ0FBTyxRQUFRLEVBQUMsRUFBRTtJQUVwQixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDakMsSUFBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSSxpQkFBTSxDQUFDLE1BQU0sRUFBQztRQUN2QyxpQkFBaUI7UUFDcEIsTUFBTSxVQUFVLEdBQUksTUFBTyxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ3BDO0FBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9
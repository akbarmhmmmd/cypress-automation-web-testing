import { HerokuPage } from "../pages/heroku_page";

const page = {
  herokuPage: new HerokuPage(),
};

describe("Heroku App Web Automation Testing", () => {
  it("Loaded Hidden Element in Dynamic Loading menu", () => {
    page.herokuPage.visitUrl();
    page.herokuPage.clickMenu("Dynamic Loading");
    page.herokuPage.verifyMenu("Dynamic")
    page.herokuPage.clickMenu("hidden");
    page.herokuPage.verifyMenu("hidden")
    page.herokuPage.loadingElement();
  });
});

import { HerokuPage } from "../pages/heroku_page";

const page = {
  herokuPage: new HerokuPage(),
};

describe("Heroku App Web Automation Testing", () => {
  it("Click Checkbox and Add/Remove in Dynamic Controls menu", () => {
    page.herokuPage.visitUrl();
    page.herokuPage.goToMenu("Dynamic Controls");
    page.herokuPage.checkedCheckbox();
    page.herokuPage.removeAndAdd();
  });

  it("Enable/Disabled Field in Dynamic Controls menu", () => {
    page.herokuPage.visitUrl();
    page.herokuPage.goToMenu("Dynamic Controls");
    page.herokuPage.enableDisabledField("Test");
  });
});

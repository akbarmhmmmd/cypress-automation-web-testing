import { HerokuPage } from "../pages/heroku_page";

const page = {
  herokuPage: new HerokuPage(),
};

describe("Heroku App Web Automation Testing", () => {
  it("Click Add Element in Add/Remove Elements menu", () => {
    page.herokuPage.visitUrl();
    page.herokuPage.clickMenu("Add/Remove");
    page.herokuPage.verifyMenu("Add/Remove");
    page.herokuPage.addRemoveElement();
  });

  it("Click Checkboxes in Checkboxes menu", () => {
    page.herokuPage.visitUrl();
    page.herokuPage.clickMenu("Checkboxes");
    page.herokuPage.verifyMenu("Checkboxes");
    page.herokuPage.checkboxes();
  });

  it("Click Hot Spot in Context menu", () => {
    page.herokuPage.visitUrl();
    page.herokuPage.clickMenu("Context Menu");
    page.herokuPage.verifyMenu("Context Menu");
    page.herokuPage.hotspot();
  });

  it("Fill Authentication in Digest Authentication Menu", () => {
    page.herokuPage.digestAuth();
  });

  it("Select Options in Dropdown menu", () => {
    page.herokuPage.visitUrl();
    page.herokuPage.clickMenu("Dropdown");
    page.herokuPage.verifyMenu("Dropdown");
    page.herokuPage.selectDropdown("1");
    page.herokuPage.selectDropdown("2");
  });

  it("Click Checkbox and Add/Remove in Dynamic Controls menu", () => {
    page.herokuPage.visitUrl();
    page.herokuPage.clickMenu("Dynamic Controls");
    page.herokuPage.verifyMenu("Dynamic Controls");
    page.herokuPage.checkedCheckbox();
    page.herokuPage.removeAndAdd();
  });

  it("Enable/Disabled Field in Dynamic Controls menu", () => {
    page.herokuPage.visitUrl();
    page.herokuPage.clickMenu("Dynamic Controls");
    page.herokuPage.verifyMenu("Dynamic Controls");
    page.herokuPage.enableDisabledField("Test");
  });

  it("Loaded Hidden Element in Dynamic Loading menu", () => {
    page.herokuPage.visitUrl();
    page.herokuPage.clickMenu("Dynamic Loading");
    page.herokuPage.verifyMenu("Dynamic")
    page.herokuPage.clickMenu("hidden");
    page.herokuPage.verifyMenu("hidden")
    page.herokuPage.loadingElement();
  });
});

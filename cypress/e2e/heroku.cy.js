import { HerokuPage } from "../pages/heroku_page";

const page = {
  herokuPage: new HerokuPage(),
};

describe("Heroku App Web Automation Testing", () => {
  it("Click Add Element in Add/Remove Elements menu", () => {
    page.herokuPage.visitUrl();
    page.herokuPage.goToMenu("Add/Remove");
    page.herokuPage.addRemoveElement();
  });

  it("Click Checkboxes in Checkboxes menu", () => {
    page.herokuPage.visitUrl();
    page.herokuPage.goToMenu("Checkboxes");
    page.herokuPage.checkboxes();
  });

  it("Click Hot Spot in Context menu", () => {
    page.herokuPage.visitUrl();
    page.herokuPage.goToMenu("Context Menu");
    page.herokuPage.hotspot();
  });

  it("Fill Authentication in Digest Authentication Menu", () => {
    page.herokuPage.digestAuth();
  });

  it("Select Options in Dropdown menu", () => {
    page.herokuPage.visitUrl();
    page.herokuPage.goToMenu("Dropdown");
    page.herokuPage.selectDropdown("1");
    page.herokuPage.selectDropdown("2");
  });

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

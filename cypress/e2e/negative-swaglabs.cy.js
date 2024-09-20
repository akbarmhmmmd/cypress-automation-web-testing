import { SwagLabsPage } from "../pages/swaglabs_page";

const page = {
  swagLabs: new SwagLabsPage(),
};

describe("Swaglabs Web Automation Testing - Negative", () => {
  beforeEach(() => {
    page.swagLabs.visitLoginPage();
  });

  it("User login with locked out user", () => {
    page.swagLabs.lockedUser();
  });

  it("User login with problem user", () => {
    page.swagLabs.problemUser();
  });

  it("User do not enter First Name in Checkout Information Menu", () => {
    page.swagLabs.standardUser();
    page.swagLabs.goToCheckout();
    page.swagLabs.fillData("First");
    page.swagLabs.continueAndError("required");
  });

  it("User do not enter Last Name in Checkout Information Menu", () => {
    page.swagLabs.standardUser();
    page.swagLabs.goToCheckout();
    page.swagLabs.fillData("Last");
    page.swagLabs.continueAndError("required");
  });

  it("User do not enter Postal Code in Checkout Information Menu", () => {
    page.swagLabs.standardUser();
    page.swagLabs.goToCheckout();
    page.swagLabs.fillData("Post");
    page.swagLabs.continueAndError("required");
  });
});

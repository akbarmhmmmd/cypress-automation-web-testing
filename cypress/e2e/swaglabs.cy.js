import { SwagLabsPage } from "../pages/swaglabs_page";

const page = {
  swagLabsPage: new SwagLabsPage(),
};

describe("Swaglabs Web Automation Testing", () => {
  beforeEach(() => {
    page.swagLabsPage.visitUrl();
  });

  it("User success login", () => {});

  it("User success add Backpack item to the cart", () => {
    page.swagLabsPage.addItem(1);
  });

  it("User success add Bike Light item to the cart", () => {
    page.swagLabsPage.addItem(2);
  });

  it("User success add Bolt T-Shirt item to the cart", () => {
    page.swagLabsPage.addItem(3);
  });

  it("User success add Fleece Jacket item to the cart", () => {
    page.swagLabsPage.addItem(4);
  });

  it("User success add Onesie item to the cart", () => {
    page.swagLabsPage.addItem(5);
  });

  it("User success add T-Shirt (Red) item to the cart", () => {
    page.swagLabsPage.addItem(6);
  });

  it("User success add All items to the cart", () => {
    page.swagLabsPage.addAllItems();
  });

  it("User success remove All items to the cart", () => {
    page.swagLabsPage.addAllItems();
    page.swagLabsPage.removeAllItems();
  });
});

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

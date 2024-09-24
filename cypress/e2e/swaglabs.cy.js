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

  it("User success Checkout product", () => {
    page.swagLabsPage.addItem(1);
    page.swagLabsPage.goToCheckout();
    page.swagLabsPage.fillData("Success");
    page.swagLabsPage.finishCheckout();
  });
});

describe("Swaglabs Web Automation Testing - Negative", () => {
  beforeEach(() => {
    page.swagLabsPage.visitLoginPage();
  });

  it("User login with locked out user", () => {
    page.swagLabsPage.lockedUser();
  });

  it("User login with problem user", () => {
    page.swagLabsPage.problemUser();
  });

  it("User do not enter First Name in Checkout Information Menu", () => {
    page.swagLabsPage.standardUser();
    page.swagLabsPage.goToCheckout();
    page.swagLabsPage.fillData("First");
    page.swagLabsPage.continueAndError("required");
  });

  it("User do not enter Last Name in Checkout Information Menu", () => {
    page.swagLabsPage.standardUser();
    page.swagLabsPage.goToCheckout();
    page.swagLabsPage.fillData("Last");
    page.swagLabsPage.continueAndError("required");
  });

  it("User do not enter Postal Code in Checkout Information Menu", () => {
    page.swagLabsPage.standardUser();
    page.swagLabsPage.goToCheckout();
    page.swagLabsPage.fillData("Post");
    page.swagLabsPage.continueAndError("required");
  });
});

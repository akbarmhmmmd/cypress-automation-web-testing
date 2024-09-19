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
    page.swagLabsPage.addItemToCart(1);
  });

  it("User success add Bike Light item to the cart", () => {
    page.swagLabsPage.addItemToCart(2);
  });

  it("User success add Bolt T-Shirt item to the cart", () => {
    page.swagLabsPage.addItemToCart(3);
  });

  it("User success add Fleece Jacket item to the cart", () => {
    page.swagLabsPage.addItemToCart(4);
  });

  it("User success add Onesie item to the cart", () => {
    page.swagLabsPage.addItemToCart(5);
  });

  it("User success add T-Shirt (Red) item to the cart", () => {
    page.swagLabsPage.addItemToCart(6);
  });

  it("User success add All items to the cart", () => {
    page.swagLabsPage.addAllItems();
  });

  it("User success remove All items to the cart", () => {
    page.swagLabsPage.addAllItems();
    page.swagLabsPage.removeAllItems();
  });
});

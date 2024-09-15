describe("Swaglabs Web Automation Testing", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/v1/index.html");
    cy.url().should("include", "saucedemo");
    cy.get('[data-test="username"]')
      .should("be.visible")
      .and("not.be.disabled")
      .type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.contains("LOGIN").should("be.visible").and("not.be.disabled").click();
    cy.url().should("include", "inventory");
    cy.get(".app_logo").should("be.visible");
  });

  const addItemToCart = (nthChild) => {
    cy.get(".inventory_list")
      .children(`:nth-child(${nthChild})`)
      .should("be.visible")
      .then(($item) => {
        cy.wrap($item)
          .find(".pricebar > .btn_primary")
          .click()
          .should("contain", "REMOVE");
      });
  };

  const removeItemFromCart = (nthChild) => {
    cy.get(`:nth-child(${nthChild})`)
      .children(".cart_item_label")
      .should("be.visible")
      .then(($item) => {
        cy.wrap($item).find(".item_pricebar > .btn_secondary").click();
      });
  };

  it("User success login", () => {});

  it("User success add Backpack item to the cart", () => {
    addItemToCart(1);
  });

  it("User success add Bike Light item to the cart", () => {
    addItemToCart(2);
  });

  it("User success add Bolt T-Shirt item to the cart", () => {
    addItemToCart(3);
  });

  it("User success add Fleece Jacket item to the cart", () => {
    addItemToCart(4);
  });

  it("User success add Onesie item to the cart", () => {
    addItemToCart(5);
  });

  it("User success add T-Shirt (Red) item to the cart", () => {
    addItemToCart(6);
  });

  it("User success add All items to the cart", () => {
    let i = 1;
    let totalItem = 6;
    for (i; i <= totalItem; i++) {
      addItemToCart(i);
    }
    cy.get('[data-icon="shopping-cart"]').click();
    cy.url().should("include", "cart");
    cy.get(".shopping_cart_badge")
      .invoke("text")
      .then((cartItemCount) => {
        cy.log(cartItemCount);
        expect(cartItemCount).to.eq(`${totalItem}`);
      });
  });

  it("User success remove All items to the cart", () => {
    let i = 1;
    let totalItem = 6;
    for (i; i <= totalItem; i++) {
      addItemToCart(i);
    }
    cy.get('[data-icon="shopping-cart"]').click();
    cy.url().should("include", "cart");
    cy.get(".shopping_cart_badge")
      .invoke("text")
      .then((cartItemCount) => {
        cy.log(cartItemCount);
        expect(cartItemCount).to.eq("6");
      });

    for (let i = 3; i < totalItem + 3; i++) {
      removeItemFromCart(i);
    }
    cy.get(".cart_item_label").should("not.exist");
  });
});

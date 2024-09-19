export class SwagLabsPage {
  swaglabs_url = "https://www.saucedemo.com/v1/index.html";
  userField = '[data-test="username"]';
  passField = '[data-test="password"]';
  pass = "secret_sauce";
  standard = "standard_user";

  visitUrl() {
    cy.visit(this.swaglabs_url);
    cy.url().should("include", this.swaglabs_url);
    cy.get(this.userField)
      .should("be.visible")
      .and("not.be.disabled")
      .type(this.standard);
    cy.get(this.passField).type(this.pass);
    cy.contains("LOGIN").should("be.visible").and("not.be.disabled").click();
    cy.url().should("include", "inventory");
    cy.get(".app_logo").should("be.visible");
  }

  addItemToCart(nthChild) {
    cy.get(".inventory_list")
      .children(`:nth-child(${nthChild})`)
      .should("be.visible")
      .then(($item) => {
        cy.wrap($item)
          .find(".pricebar > .btn_primary")
          .click()
          .should("contain", "REMOVE");
      });
  }

  removeItemFromCart(nthChild) {
    cy.get(`:nth-child(${nthChild})`)
      .children(".cart_item_label")
      .should("be.visible")
      .then(($item) => {
        cy.wrap($item).find(".item_pricebar > .btn_secondary").click();
      });
  }

  addAllItems() {
    let i = 1;
    let totalItem = 6;
    for (i; i <= totalItem; i++) {
      this.addItemToCart(i);
    }
    cy.get('[data-icon="shopping-cart"]').click();
    cy.url().should("include", "cart");
    cy.get(".shopping_cart_badge")
      .invoke("text")
      .then((cartItemCount) => {
        cy.log(cartItemCount);
        expect(cartItemCount).to.eq(`${totalItem}`);
      });
  }

  removeAllItems() {
    let i = 1;
    let totalItem = 6;
    for (let i = 3; i < totalItem + 3; i++) {
      this.removeItemFromCart(i);
    }
    cy.get(".cart_item_label").should("not.exist");
  }
}

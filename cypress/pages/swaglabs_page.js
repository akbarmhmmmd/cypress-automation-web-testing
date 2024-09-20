export class SwagLabsPage {
  swaglabs_url = "https://www.saucedemo.com/v1/index.html";
  content = "#contents_wrapper";
  userField = "#user-name";
  passField = "#password";
  firstNameField = "#first-name";
  lastNameField = "#last-name";
  postCodeField = "#postal-code";
  pass = "secret_sauce";
  standard = "standard_user";
  lockedOut = "locked_out_user";
  problem = "problem_user";
  firstName = "First";
  lastName = "Last";
  postCode = "123";
  screenshotPath = "/swaglabs/";
  element = {
    cartBtn: ".shopping_cart_container",
    checkoutBtn: ".btn_action",
    continueBtn: ".btn_primary",
  };

  click(btn) {
    const clickButton = (btn.charAt(0).toLowerCase() + btn.slice(1)).replace(
      /\s+/g,
      ""
    );
    cy.get(`${this.element[`${clickButton}Btn`]}`).click();
  }

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

  visitLoginPage() {
    cy.visit("https://www.saucedemo.com/v1/index.html");
    cy.url().should("include", "saucedemo");
    cy.get('[data-test="username"]')
      .should("be.visible")
      .and("not.be.disabled");
  }

  standardUser() {
    cy.get(this.userField).type(this.standard);
    cy.get(this.passField).type(this.pass);
    cy.contains("LOGIN").should("be.visible").and("not.be.disabled").click();
    cy.url().should("include", "inventory");
    cy.get(".app_logo").should("be.visible");
  }

  lockedUser() {
    cy.get(this.userField).type(this.lockedOut);
    cy.get(this.passField).type(this.pass);
    cy.contains("LOGIN").should("be.visible").and("not.be.disabled").click();
    cy.get('[data-test="error"]')
      .should("exist")
      .should("contain", "locked out")
      .then(($locked) => {
        if ($locked) {
          cy.screenshot(this.screenshotPath + "Locked Out User");
        }
      });
  }

  problemUser() {
    cy.get(this.userField).type(this.problem);
    cy.get(this.passField).type(this.pass);
    cy.contains("LOGIN").should("be.visible").and("not.be.disabled").click();
    cy.url().should("include", "inventory");
    cy.get(".app_logo").should("be.visible");
    cy.get(
      'img[src="./img/sauce-backpack-1200x1500.jpgWithGarbageOnItToBreakTheUrl"]'
    )
      .should("exist")
      .then(($problem) => {
        if ($problem) {
          cy.screenshot(this.screenshotPath + "Problem User");
        }
      });
  }

  addItem(nthChild) {
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

  removeItem(nthChild) {
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
      this.addItem(i);
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
      this.removeItem(i);
    }
    cy.get(".cart_item_label").should("not.exist");
  }

  goToCheckout() {
    this.click("Cart");
    this.click("Checkout");
  }

  fillData(error) {
    cy.get(this.firstNameField).type(this.firstName);
    cy.get(this.lastNameField).type(this.lastName);
    cy.get(this.postCodeField).type(this.postCode);
    switch (error) {
      case "First":
        cy.get(this.firstNameField).clear().should("not.have.value");
        break;
      case "Last":
        cy.get(this.lastNameField).clear().should("not.have.value");
        break;
      case "Post":
        cy.get(this.postCodeField).clear().should("not.have.value");
        break;
      default:
        throw new Error("Option not found" + error);
    }
  }

  continueAndError(msg) {
    this.click("Continue");
    this.errorMsg(msg);
  }

  errorMsg(msg) {
    cy.get(this.content)
      .should("contain", msg)
      .then(($failed) => {
        if ($failed) {
          cy.screenshot(this.screenshotPath + "Error Message");
        }
      });
  }
}

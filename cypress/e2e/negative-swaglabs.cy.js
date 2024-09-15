describe("Swaglabs Web Automation Testing - Negative", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/v1/index.html");
    cy.url().should("include", "saucedemo");
    cy.get('[data-test="username"]')
      .should("be.visible")
      .and("not.be.disabled");
  });

  it("User login with locked out user", () => {
    cy.get('[data-test="username"]').type("locked_out_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.contains("LOGIN").should("be.visible").and("not.be.disabled").click();
    cy.get('[data-test="error"]')
      .should("exist")
      .should("contain", "locked out")
      .then(($locked) => {
        if ($locked) {
          cy.screenshot();
        }
      });
  });

  it("User login with problem user", () => {
    cy.get('[data-test="username"]').type("problem_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.contains("LOGIN").should("be.visible").and("not.be.disabled").click();
    cy.url().should("include", "inventory");
    cy.get(".app_logo").should("be.visible");
    cy.get(
      'img[src="./img/sauce-backpack-1200x1500.jpgWithGarbageOnItToBreakTheUrl"]'
    )
      .should("exist")
      .then(($problem) => {
        if ($problem) {
          cy.screenshot();
        }
      });
  });
});

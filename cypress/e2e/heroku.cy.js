describe("Heroku App Web Automation Testing", () => {
  it("Click Add Element in Add/Remove Elements menu", () => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.contains("Add/Remove").click();
    cy.url().should("include", "/add_remove_elements");
    cy.get("h3").should("contain", "Add/Remove");
    cy.get("button")
      .should("contain", "Add Element")
      .then(($button) => {
        if ($button) {
          cy.wrap($button).click();
        }
      });
    cy.get(".added-manually")
      .should("contain", "Delete")
      .then(($deleteButton) => {
        if ($deleteButton) {
          cy.wrap($deleteButton).click();
          cy.wrap($deleteButton)
            .should("not.exist")
            .then(($verifyDeleteDisappear) => {
              if ($verifyDeleteDisappear) {
                cy.screenshot();
              }
            });
        }
      });
  });

  it("Click Checkboxes in Checkboxes menu", () => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.contains("Checkboxes").click();
    cy.get("h3").should("contain", "Checkboxes");
    cy.get("#checkboxes > :nth-child(1)")
      .should("exist")
      .check()
      .should("be.checked")
      .uncheck()
      .should("not.checked")
      .then(($verifyNotChecked) => {
        if ($verifyNotChecked) {
          cy.screenshot();
        }
      });
  });

  it("Click Hot Spot in Context menu", () => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.contains("Context Menu").click();
    cy.get("h3").should("contain", "Context Menu");
    cy.get("#hot-spot").rightclick();
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("context menu");
    });
  });

  it("Fill Authentication in Digest Authentication Menu", () => {
    cy.visit("https://the-internet.herokuapp.com/basic_auth", {
      auth: {
        username: "admin",
        password: "admin",
      },
    });
    cy.contains("Congratulations").then(($verifySuccess) => {
      cy.screenshot();
    });
  });
});

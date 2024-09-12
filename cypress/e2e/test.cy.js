describe("My First Test", () => {
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
          cy.get(".added-manually").should("not.exist");
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
      .should("not.checked");
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
});

export class HerokuPage {
  heroku_url = "https://the-internet.herokuapp.com/";
  user = "admin";
  pass = "admin";
  field = 'input[type="text"]';
  content = "#content";
  finish = "#finish";
  helloWorld = "Hello World";

  visitUrl() {
    cy.visit(this.heroku_url);
    cy.url().should("include", this.heroku_url);
  }

  visitAuth() {
    cy.visit(this.heroku_url + "/basic_auth", {
      auth: {
        username: this.user,
        password: this.pass,
      },
    });
  }

  click(button) {
    cy.xpath(`//button[contains(text(), '${button}')]`).click();
  }

  clickMenu(menu) {
    cy.xpath(`//a[contains(text(), '${menu}')]`).click();
  }

  verifyMenu(menu) {
    cy.get(this.content).should("contain", menu);
  }

  addRemoveElement() {
    this.click("Add Element");
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
  }

  checkboxes() {
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
  }

  hotspot() {
    cy.get("#hot-spot").rightclick();
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("context menu");
    });
  }

  digestAuth() {
    this.visitAuth();
    cy.contains("Congratulations").then(($verifySuccess) => {
      if ($verifySuccess) {
        cy.screenshot();
      }
    });
  }

  selectDropdown(option) {
    cy.get("#dropdown")
      .should("contain", "Please select an option")
      .select(`Option ${option}`)
      .should("have.value", `${option}`)
      .then(($selected) => {
        if ($selected) {
          cy.screenshot();
        }
      });
  }

  checkedCheckbox() {
    cy.get("#checkbox > input")
      .check()
      .then(($checked) => {
        if ($checked) {
          cy.screenshot();
        }
      });
  }

  removeAndAdd() {
    this.click("Remove");
    cy.get(this.content)
      .should("contain", "It's gone")
      .then(($verify) => {
        if ($verify) {
          cy.screenshot();
        }
      });
    this.click("Add");
    cy.get(this.content)
      .should("contain", "It's back")
      .then(($verify) => {
        if ($verify) {
          cy.screenshot();
        }
      });
  }

  enableDisabledField(text) {
    cy.get(this.field)
      .should("have.attr", "disabled")
      .then(($disabled) => {
        if ($disabled) {
          cy.screenshot();
        }
      });
    this.click("Enable");
    cy.get(this.field).should("not.have.attr", "disabled");
    cy.get(this.field)
      .type(text)
      .should("have.value", text)
      .then(($enabled) => {
        if ($enabled) {
          cy.screenshot();
        }
      });
    this.click("Disable");
    cy.get(this.field).should("have.attr", "disabled");
  }

  loadingElement() {
    this.click("Start");
    cy.get(this.finish, { timeout: 10000 })
      .should("be.visible")
      .and("contain", this.helloWorld);
  }
}

export class HerokuPage {
  heroku_url = "https://the-internet.herokuapp.com/";
  user = "admin";
  pass = "admin";
  field = 'input[type="text"]';
  content = "#content";
  finish = "#finish";
  helloWorld = "Hello World";
  uploadField = "#file-upload";
  uploadBtn = "#file-submit";
  filePath = "cypress/files/test.jpg";
  screenshotPath = "/heroku/";

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
                this.takeScreenshot("Delete Button Disappear");
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
          this.takeScreenshot("Checkbox not Checked");
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
        this.takeScreenshot("Auth Success");
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
          this.takeScreenshot("Option Selected = " + option);
        }
      });
  }

  checkedCheckbox() {
    cy.get("#checkbox > input")
      .check()
      .then(($checked) => {
        if ($checked) {
          this.takeScreenshot("Checkbox Checked");
        }
      });
  }

  removeAndAdd() {
    this.click("Remove");
    cy.get(this.content)
      .should("contain", "It's gone")
      .then(($verify) => {
        if ($verify) {
          this.takeScreenshot("Element Removed");
        }
      });
    this.click("Add");
    cy.get(this.content)
      .should("contain", "It's back")
      .then(($verify) => {
        if ($verify) {
          this.takeScreenshot("Element is back");
        }
      });
  }

  enableDisabledField(text) {
    cy.get(this.field)
      .should("have.attr", "disabled")
      .then(($disabled) => {
        if ($disabled) {
          this.takeScreenshot("Field Disabled");
        }
      });
    this.click("Enable");
    cy.get(this.field).should("not.have.attr", "disabled");
    cy.get(this.field)
      .type(text)
      .should("have.value", text)
      .then(($enabled) => {
        if ($enabled) {
         this.takeScreenshot("Field Enabled");
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

  upload() {
    cy.get(this.uploadField)
      .selectFile(this.filePath)
      .then(($uploaded) => {
        if ($uploaded) {
          this.takeScreenshot("File Uploaded");
        }
      });
    cy.get(this.uploadBtn).click();
    cy.get(this.content)
      .should("contain", "Uploaded")
      .then(($successUpload) => {
        if ($successUpload) {
          this.takeScreenshot("Success Upload File");
        }
      });
  }

  takeScreenshot(name){
    cy.screenshot(this.screenshotPath + name)
  }
}

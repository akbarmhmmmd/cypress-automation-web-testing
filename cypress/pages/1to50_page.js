export class oneToFifty {
  oneToFifty_url = "https://zzzscore.com/1to50/en/";
  content = ".wrap";
  restartBtn = ".resetBtn";
  adFrame = "#ad_iframe";
  dismissAd = "#dismiss-button";
  resultContent = ".resultContent";
  score = ".level";
  screenshotPath = "/1to50/";

  visitUrl() {
    cy.visit(this.oneToFifty_url);
    cy.url().should("include", this.oneToFifty_url);
  }

  clickNumbers() {
    cy.get(this.restartBtn).scrollIntoView().focus();
    for (let i = 1; i <= 50; i++) {
      cy.xpath(`//*[@class="grid x5"]//div[text()="${i}"]`).click();
    }
  }

  validateSuccess() {
    cy.get(this.resultContent).should("exist").and("contain", "score");
    cy.get(this.score)
      .should("exist")
      .invoke("text")
      .then((scoreText) => {
        if (scoreText != null) {
          cy.screenshot(this.screenshotPath + `1to50, Your Score = ${scoreText}`);
        }
      });
  }
}

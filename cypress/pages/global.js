module.exports = {
  customScreenshot(path, name) {
    cy.screenshot(`${path}/${name}`);
  },
};

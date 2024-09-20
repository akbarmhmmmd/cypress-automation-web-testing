import { oneToFifty } from "../pages/1to50_page";

const page = {
  oneToFifty: new oneToFifty(),
};

describe("1to50", () => {
  it("Click 1 to 50", () => {
    page.oneToFifty.visitUrl();
    page.oneToFifty.clickNumbers();
    page.oneToFifty.validateSuccess();
  });
});

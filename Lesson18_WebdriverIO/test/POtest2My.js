const { expect } = require("chai");
const footer = require("../pageobjects/components/footer");
const header = require("../pageobjects/components/header");
const contributePage = require("../pageobjects/contributePage");
const gettingStartedPage = require("../pageobjects/gettingStartedPage");
const homePage = require("../pageobjects/homePage");
const searchResultPage = require("../pageobjects/searchResultPage");

describe("Verify webdriverio site", function () {
  beforeEach(async () => {
    await browser.url("https://webdriver.io/");
  });

  it("should go to Docs - Getting Started", async () => {
    await header.goToGettingStartedPage();
    await browser.pause(3000);
    const titleTextGettingStarted = await gettingStartedPage.getTitleText();
    await expect(titleTextGettingStarted).to.contain("Getting Started");
  });

  it("should go to Contribute footer", async () => {
    await footer.goToContributeFooter();
    await browser.pause(3000);
    const titleTextContribute = await contributePage.getTitleText();
    await expect(titleTextContribute).to.contain("Contribute");
  });

  it("search browser", async () => {
    await homePage.search("browser");
    const suggestedFirstResult = await searchResultPage.getFirstResultText();
    await expect(suggestedFirstResult.toLowerCase()).to.include("browser");
  });
  it("should clear value after search", async () => {
    await homePage.search("test");
    const suggestedFirstResultTwo = await searchResultPage.getFirstResultText();
    await expect(suggestedFirstResultTwo.toLowerCase()).to.include("test");
    await homePage.clearSearchInput();
    const valueCleared = await homePage.searchInput.getValue();
    await expect(valueCleared === "");
  });
  it("should navigate to github", async () => {
    await header.goToGithub();
    await expect(
      await $("//strong/a[@data-pjax='#repo-content-pjax-container']").getText()
    ).to.contain("webdriverio");
  });
});

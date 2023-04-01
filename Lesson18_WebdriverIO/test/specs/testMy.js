const { expect } = require("chai");

describe("Verify webdriverio site", () => {
  beforeEach(async () => {
    await browser.url("https://webdriver.io/");
  });
  //test1
  it("should go to Docs - Getting Started", async () => {
    await $(
      "//div[@class='navbar__items']/a[@class='navbar__item navbar__link'][1]"
    ).click();
    await $("//div[@class='theme-doc-markdown markdown']").waitForDisplayed();
    await expect(await $("//h1").getText()).to.contain("Getting Started");
  });
  //test2
  it("should go to Contribute footer", async () => {
    await $("//a[@class='footer__link-item']").waitForDisplayed();
    const footerContribute = await $(
      "//div[@class='navbar__items']/a[@class='navbar__item navbar__link'][1]"
    );
    await footerContribute.scrollIntoView();
    await $(
      "//li[@class='footer__item'][3]/a[contains(text(),'Contribute')]"
    ).click();
    await $("//h1").waitForDisplayed();
    await expect(await $("//h1").getText()).to.contain("Contribute");
  });

  //test3
  it("search browser", async () => {
    await $(".DocSearch-Button-Placeholder").waitForDisplayed();
    await $(".DocSearch-Button-Placeholder").click();
    await $(".DocSearch-Input").setValue("Browser");
    await $("//*[@class='DocSearch-Hit']/a").waitForDisplayed();
    const suggestedResults = await $$(".DocSearch-Hit-title");
    const firstResult = await suggestedResults[0];
    await expect(await firstResult.getText()).to.include("Browser");
  });
});

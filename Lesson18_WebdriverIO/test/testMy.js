const { expect } = require("chai");

describe.skip("Verify webdriverio site", () => {
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
    await $(".DocSearch-Input").setValue("browser");
    await $("//*[@class='DocSearch-Hit']/a").waitForDisplayed();
    const suggestedResults = await $$(".DocSearch-Hit-title");
    const firstResult = await suggestedResults[0];
    const firstResultText = await firstResult.getText();
    await expect(firstResultText.toLowerCase()).to.include("browser");
  });

  //test4
  it("should clear value after search", async () => {
    await $(".DocSearch-Button-Placeholder").waitForDisplayed();
    await $(".DocSearch-Button-Placeholder").click();
    await $(".DocSearch-Input").setValue("test");
    await $("//*[@class='DocSearch-Hit']/a").waitForDisplayed();
    const suggestedResults = await $$(".DocSearch-Hit-title");
    const firstResult = await suggestedResults[0];
    const firstResultText = await firstResult.getText();
    console.log(firstResultText);
    await expect(firstResultText.toLowerCase()).to.contain("test");
    await $(".DocSearch-Input").clearValue();
    const valueCleared = await $(".DocSearch-Input").getValue();
    console.log(valueCleared);
    await expect(valueCleared === "");
  });

  //test5
  it("should navigate to github", async () => {
    await $(".navbar__item.navbar__link.header-github-link").waitForDisplayed();
    await $(".navbar__item.navbar__link.header-github-link").click();
    await browser.switchWindow("github.com/webdriverio/webdriverio");
    await $(".mr-2.flex-self-stretch").waitForDisplayed();
    await expect(
      await $("//strong/a[@data-pjax='#repo-content-pjax-container']").getText()
    ).to.contain("webdriverio");
  });
});

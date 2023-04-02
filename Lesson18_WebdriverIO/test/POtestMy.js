const mainPage = require('../pageobjects/mainPage');
const topNavigation = require('../pageobjects/components/topNavigation');
const productListingPage = require('../pageobjects/productListingPage');
const { expect } = require("chai");

describe('Verify webdriverio site', function () {
    beforeEach(async () => {
        await browser.url("https://webdriver.io/");
      });
    it('should go to Docs - Getting Started', async () => {
        await mainPage.navigate('https://webdriver.io/');
        await $(
            "//div[@class='navbar__items']/a[@class='navbar__item navbar__link'][1]"
          ).click();
          await $("//div[@class='theme-doc-markdown markdown']").waitForDisplayed();
          await expect(await $("//h1").getText()).to.contain("Getting Started");
    })
})

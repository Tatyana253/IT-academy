const { expect } = require("chai");
const basePage = require("../pageobjects/basePage");
const footer = require('../pageobjects/components/footer');
const header = require('../pageobjects/components/header');
const contributePage = require("../pageobjects/contributePage");
const gettingStartedPage = require('../pageobjects/gettingStartedPage');

describe("Verify webdriverio site", function() {
    beforeEach(async () => {
        await browser.url("https://webdriver.io/");
      });

    it("should go to Docs - Getting Started", async () => {
        await header.goToGettingStartedPage();
        await browser.pause(3000);
        const titleTextGettingStarted = await gettingStartedPage.getTitleText();
        await expect (titleTextGettingStarted).to.contain("Getting Started");
    });

    it("should go to Contribute footer", async () => {
        await footer.goToContributeFooter();
        await browser.pause(3000);
        const titleTextContribute = await contributePage.getTitleText();
        await expect (titleTextContribute).to.contain("Contribute");
    });





        
     
});
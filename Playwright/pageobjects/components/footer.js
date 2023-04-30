class Footer {
    constructor(page) {
        this.page = page;
        this.findShopButton = "//div/a[@href='/store-locator']";
        this.helpButton = "//div/a[@href='/help/']";
        this.askHelpButton = "//div/a[@href='/landing/pomocspecjalisty/_/R-a-pomocSpecjalisty']";


    }
    
    async click(locator) {
        await this.page.click(locator);
    }
    async wait(locator) {
        await this.page.waitForSelector(locator);
    }
}

module.exports = Footer;
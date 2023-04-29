class BasePage {
    async navigate(url) {
        await browser.url(url);
    }
    async click(locator) {
        await this.page.click(locator);
      }
}

module.exports = BasePage;
class helpPage {
  constructor(page) {
    this.page = page;
    this.searchHelpInputField = "form.search-box.margin-t-26>input";
    this.searchButton =
      "//form[@class='search-box margin-t-26']/button[@type='submit']";
    this.suggestedResults = "//h4";
  }
  async getTextOfItem(item) {
    await this.page.textContent(item);
  }
  async click(locator) {
    await this.page.click(locator);
  }
  async wait(locator) {
    await this.page.waitForSelector(locator);
  }
}

module.exports = helpPage;

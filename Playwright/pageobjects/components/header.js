class Header {
  constructor(page) {
    this.page = page;
    this.homeButton = ".decathlon-logo ";
    this.searchField = "form>input.svelte-6rfhji";
    this.searchButton = ".svg-icon.search-icon";
    this.catalogButton =
      "//button[@class='menu-button svelte-1k36ljj']/*[@class = 'svg-icon']";
    this.cartButton = "//span/*[@class = 'svg-icon']";
    this.myAccountButton = "//span/*[@class = 'svg-icon svelte-1yt38il']";
    this.myShopButton = "//*[@class = 'svelte-8a4xex']";
    this.topNavTabs = "//button [@class='svelte-1h83edz']";
    let tabName = "";
    this.anyTopNavTab = `//div/button[@class='svelte-1h83edz'][@data-name='${tabName}']`;
    this.topNavMenu = "button.menu-button.svelte-1k36ljj";
    let sport = "";
    this.typeOfSport = `//button[@class='svelte-11jd0m6'][contains (text(),'${sport}')]`;
    this.accountName = "//a[@class='account-button svelte-1yt38il']/span[2]";
  }

  async click(locator) {
    await this.page.click(locator);
  }
  async wait(locator) {
    await this.page.waitForSelector(locator);
  }
}

module.exports = Header;

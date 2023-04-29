
class Header {
    constructor(page) {
      this.page = page;
      this.homeButton = '.decathlon-logo ';
      this.searchField = '.svelte-6rfhji.searchFocused';
      this.searchButton = ".svg-icon.search-icon";
      this.catalogButton = "//button[@class='menu-button svelte-1k36ljj']/*[@class = 'svg-icon']";
      this.cartButton = "//span/*[@class = 'svg-icon']";
      this.myAccountButton = "//span/*[@class = 'svg-icon svelte-1yt38il']";
      this.myShopButton = "//*[@class = 'svelte-8a4xex']";
      this.topNavTabs = "//button [@class='svelte-1h83edz']";

    }
  /*
      async goToPageWithTopNavTabs(itemLink) {
        await this.page.click(itemLink);
      }
      */
      async click(locator) {
        await this.page.click(locator);
      }
  }
  
  module.exports = Header;
  
/*
    async waitProductInCart(numberOfProducts) {
        await this.headerCartCount.getText();
        await element.waitUntilTextChanges(this.headerCartCount, numberOfProducts)
    }

    async goToCart() {
        await element.click(this.cartButton);
    }

*/





class Header {
    constructor(page) {
      this.page = page;
      this.homeButton = '.decathlon-logo ';
      this.searchField = 'form>input.svelte-6rfhji';
      this.searchButton = ".svg-icon.search-icon";
      this.catalogButton = "//button[@class='menu-button svelte-1k36ljj']/*[@class = 'svg-icon']";
      this.cartButton = "//span/*[@class = 'svg-icon']";
      this.myAccountButton = "//span/*[@class = 'svg-icon svelte-1yt38il']";
      this.myShopButton = "//*[@class = 'svelte-8a4xex']";
      this.topNavTabs = "//button [@class='svelte-1h83edz']";
      //this.topNavTabSporty = "//div/button[@class='svelte-1h83edz'][@data-name = 'Sporty']";
      let tabName = '';
      this.anyTopNavTab = `//div/button[@class='svelte-1h83edz'][@data-name='${tabName}']`;
      this.topNavMenu = 'button.menu-button.svelte-1k36ljj';
      //let menuTabName = 'Wszystkie sporty';
      //this.tabFromTopNavMenu = `//button/span[@class='svelte-1qog25o'][contains (text(),'${menuTabName}')]`;
      //this.tabFromTopNavMenu = `//button/span[@class='svelte-1qog25o'][contains (text(),'Wszystkie sporty')]`;
      let sport = '';
      this.typeOfSport = `//button[@class='svelte-11jd0m6'][contains (text(),'${sport}')]`;
      
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




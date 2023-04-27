
class BasePage {
    constructor() {
      this.navbarGettingStartedLink = "//div[@class='navbar__items']/a[@class='navbar__item navbar__link'][1]";
      this.footerContributeLink = "//li[@class='footer__item'][3]/a[contains(text(),'Contribute')]";
      this.searchInput = ".DocSearch-Input";
      this.searchButton = ".DocSearch-Button-Placeholder";
    }
  
    async clickNavbarGettingStartedLink() {
      await $(this.navbarGettingStartedLink).click();
    }
  
    async clickFooterContributeLink() {
      await $(this.footerContributeLink).scrollIntoView();
      await $(this.footerContributeLink).click();
    }
  
    async setSearchInputValue(value) {
      await $(this.searchInput).setValue(value);
    }
  
    async clickSearchButton() {
      await $(this.searchButton).click();
    }
    async navigate(url) {
      await browser.url(url);
  }
  }

  module.exports = BasePage;
  
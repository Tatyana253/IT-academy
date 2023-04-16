class Header {
    constructor(page) {
      this.page = page;
      this.topNavLinks = '.navbar__item';
      this.docsLink = '//*[@class="navbar__item navbar__link"] [@href="/docs/intro"]';
      this.apiLink = "//*[@class = 'navbar__item navbar__link'] [contains (text(), 'API')]";
      this.programmLanguagesLink = ".navbar__item.dropdown.dropdown--hoverable";
      this.communityLink = "//*[@class = 'navbar__item navbar__link'] [contains (text(), 'Community')]";
    }
  
      async goToPageWithTopNavMenu(itemLink) {
        await this.page.click(itemLink);
      }
  }
  
  module.exports = Header;
  


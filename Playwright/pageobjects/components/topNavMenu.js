class TopNavMenu {
    constructor(page) {
      this.page = page;
      this.topNavMenu = 'button.menu-button.svelte-1k36ljj';
      this.allSportsLink = '#allSports';
      this.womenLink = '#cat-00';
      this.menLink = '#cat-01';
      this.kidsLink = '#cat-02';
      this.accessoryLink = '#cat-03';
      this.supplementsLink = '#cat-04';
      this.ecodesignLink = "//span[contains (text(), 'Ecodesign')]";
      this.otherThigsLink = "//span[contains (text(), 'Ostatnie sztuki')]";
      this.titleFromTopNavMenu = '//h5';
      this.titleFromTopNavMenuChild = "//div[@class='sublevel svelte-11jd0m6']/header[@class='svelte-10z05qh']/h5";
      this.titleFromTopNavMenuChildSecond = "//div[@class='sublevel svelte-13cos0r sublevel--first']/header[@class='svelte-10z05qh']/h5";
      this.h1Title = "//div[@class='category-header__title svelte-viz8qm']/h1";

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
  
  module.exports = TopNavMenu;
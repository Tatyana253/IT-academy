class HomePage {
  get gettingStartedLink() {
    return $(
      "//div[@class='navbar__items']/a[@class='navbar__item navbar__link'][1]"
    );
  }

  get contributeFooterLink() {
    return $("//li[@class='footer__item'][3]/a[contains(text(),'Contribute')]");
  }

  get searchInput() {
    return $(".DocSearch-Input");
  }

  get searchButton() {
    return $(".DocSearch-Button-Placeholder");
  }

  get githubLink() {
    return $(".navbar__item.navbar__link.header-github-link");
  }

  async goToGettingStarted() {
    await this.gettingStartedLink.click();
    await $("//div[@class='theme-doc-markdown markdown']").waitForDisplayed();
  }

  async goToContributeFooter() {
    await this.contributeFooterLink.waitForDisplayed();
    await this.contributeFooterLink.scrollIntoView();
    await this.contributeFooterLink.click();
    await $("//h1").waitForDisplayed();
  }

  async search(query) {
    await this.searchButton.waitForDisplayed();
    await this.searchButton.click();
    await this.searchInput.setValue(query);
    await $("//*[@class='DocSearch-Hit']/a").waitForDisplayed();
  }

  async clearSearchInput() {
    await this.searchInput.clearValue();
  }

  async goToGithub() {
    await this.githubLink.waitForDisplayed();
    await this.githubLink.click();
    await browser.switchWindow("github.com/webdriverio/webdriverio");
    await $(".mr-2.flex-self-stretch").waitForDisplayed();
  }

  async getSearchInputValue() {
    return await this.searchInput.getValue();
  }
}

module.exports = new HomePage();

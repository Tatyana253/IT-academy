const BasePage = require("../basePage");
class Header extends BasePage {
  get logo() {
    return $(
      ".navbar__brand > .navbar__logo > .themedImage_ToTc.themedImage--light_HNdA"
    );
  }

  get gettingStartedLink() {
    return $(
      "//a[@class='navbar__item navbar__link'][@href='/docs/gettingstarted']"
    );
  }

  get apiLink() {
    return $("//a[@class='navbar__item navbar__link'][@href='/docs/api']");
  }

  get blogLink() {
    return $("//a[@class='navbar__item navbar__link'][@href='/blog']");
  }

  get contributeLink() {
    return $(
      "//a[@class='navbar__item navbar__link'][@href='/docs/contribute/']"
    );
  }

  get communityLink() {
    return $(
      "//a[@class='navbar__item navbar__link'][@href='/community/support']"
    );
  }
  get versionsLink() {
    return $("//div[@class='navbar__items navbar__items--right'] /a[1]");
  }

  get githubLink() {
    return $("//div[@class='navbar__items navbar__items--right'] /a[2]");
  }
  get twitterLink() {
    return $(
      "//a[@class='navbar__item navbar__link'][@href='https://twitter.com/webdriverio']"
    );
  }
  get searchLink() {
    return $(".DocSearch-Button-Placeholder");
  }

  async goToGettingStartedPage() {
    await this.gettingStartedLink.waitForDisplayed();
    await this.gettingStartedLink.click();
  }

  async goToGithub() {
    await this.githubLink.waitForDisplayed();
    await this.githubLink.click();
    await browser.switchWindow("github.com/webdriverio/webdriverio");
    await $(".mr-2.flex-self-stretch").waitForDisplayed();
  }
}
module.exports = new Header();

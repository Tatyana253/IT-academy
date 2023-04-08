class Header {
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
    return $("//a[@class='navbar__item navbar__link'][@href='/versions']");
  }

  get githubLink() {
    return $(
      "//a[@class='navbar__item navbar__link'][@href='https://github.com/webdriverio/webdriverio']"
    );
  }
  get twitterLink() {
    return $(
      "//a[@class='navbar__item navbar__link'][@href='https://twitter.com/webdriverio']"
    );
  }
  get searchLink() {
    return $(".DocSearch-Button-Placeholder");
  }
}
module.exports = new Header();

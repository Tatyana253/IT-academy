const BasePage = require("../basePage");

class Footer extends BasePage {
  get openJslogo() {
    return $(".themedImage_ToTc.themedImage--light_HNdA.footer__logo");
  }

  get gettingStartedLink() {
    return $("//a[@class='footer__link-item'][@href='/docs/gettingstarted']");
  }

  get apiLink() {
    return $("//a[@class='footer__link-item'][@href='/docs/api']");
  }

  get contributeLink() {
    return $("//a[@class='footer__link-item'][@href='/docs/contribute/']");
  }

  get helpLink() {
    return $("//a[@class='footer__link-item'][@href='/community/support']");
  }

  get stackOverflowLink() {
    return $(
      "//a[@class='footer__link-item'][@href='https://stackoverflow.com/questions/tagged/webdriver-io']"
    );
  }

  get supportChatLink() {
    return $(
      "//a[@class='footer__link-item'][@href='https://matrix.to/#/#webdriver.io:gitter.im']"
    );
  }
  get slackLink() {
    return $(
      "//a[@class='footer__link-item'][@href='https://seleniumhq.slack.com/join/shared_invite/zt-f7jwg1n7-RVw4v4sMA7Zjufira_~EVw#/']"
    );
  }
  get twitterLink() {
    return $(
      "//a[@class='footer__link-item'][@href='https://twitter.com/webdriverio']"
    );
  }
  get tideliftSubscriptionLink() {
    return $("//a[@class='footer__link-item'][@href='/docs/enterprise/']");
  }

  get donateLink() {
    return $(
      "//a[@class='footer__link-item'][@href='https://opencollective.com/webdriverio']"
    );
  }

  get blogLink() {
    return $("//a[@class='footer__link-item'][@href='/blog']");
  }

  get githubLink() {
    return $(
      "//a[@class='footer__link-item'][@href='https://github.com/webdriverio/webdriverio']"
    );
  }

  async goToContributeFooter() {
    await this.contributeLink.waitForDisplayed();
    await this.contributeLink.scrollIntoView();
    await this.contributeLink.click();
  }
}
module.exports = new Footer();

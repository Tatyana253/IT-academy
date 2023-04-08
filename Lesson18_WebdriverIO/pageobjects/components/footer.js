// footer.page.js
class Footer {
    get logo() {
      return $('img[src="/images/webdriverio.png"]');
    }
  
    get gettingStartedLink() {
      return $('=Getting Started');
    }
  
    get apiLink() {
      return $('=API');
    }
  
    get blogLink() {
      return $('=Blog');
    }
  
    get helpLink() {
      return $('=Help');
    }
  
    get githubLink() {
      return $('[href="https://github.com/webdriverio/webdriverio"]');
    }
  
    get twitterLink() {
      return $('[href="https://twitter.com/webdriverio"]');
    }
  
    get chatLink() {
      return $('[href="https://gitter.im/webdriverio/webdriverio"]');
    }
  
    get documentationLink() {
      return $('[href="https://webdriver.io/docs/"]');
    }
  
    get wdioBlogLink() {
      return $('[href="https://webdriver.io/blog/"]');
    }
  
    get seleniumConfLink() {
      return $('[href="https://seleniumconf.com/"]');
    }
  }
  
  module.exports = new Footer();
  
  
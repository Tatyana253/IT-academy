// header.page.js
class Header {
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
  }
  
  module.exports = new Header();
  
  
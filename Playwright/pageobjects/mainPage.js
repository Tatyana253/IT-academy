class MainPage {
  constructor(page) {
    this.page = page;
    this.acceptCookiesButton =
      ".didomi-components-button.didomi-button.didomi-dismiss-button.didomi-components-button--color.didomi-button-highlight.highlight-button";
    this.title = "div>.logo.svelte-1k36ljj";
    this.mainSliderMenuLink =
      ".slide.snap.fluid.dkt-item.loop-start.svelte-67bs5b>a.svelte-7v8p0t";
    this.productFromSliderMenu = ".single-product.glider-slide.center.visible";
  }

  async navigate(url) {
    await this.page.goto(url);
  }
  async scroll(locator) {
    await this.page.scrollIntoViewIfNeeded(locator);
  }
  async click(locator) {
    await this.page.click(locator);
  }
  async sendKeys(input) {
    await this.page.type(input);
  }
}

module.exports = MainPage;

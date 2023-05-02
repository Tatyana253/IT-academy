class CartPage {
  constructor(page) {
    this.page = page;
    this.emptyCartNotification = "//h2";
    this.emptyCartNotificationWithText =
      "//h2[@class='svelte-11o9gok'][contains(text(),'Twój koszyk jest pusty.')]";
    this.addedToCartItem = ".cart-line.svelte-2faiun";
    this.nameOfAddedItem = "div>a.product-name.svelte-2faiun";
    this.deleteItemButton =
      "//button[@aria-label='Remove product in cart page']";
    this.logInButton =
      "//a[@class='cta cta--big cta--primary cta--block svelte-11o9gok']";
    this.goToDeliveryButton = ".cta.cta--big.svelte-12c47jm";
    this.takeFromShopCheckbox =
      "//*[@id='app']/main/div/article/section[1]/section/article/section[2]/header/label/div";
    this.selectShopCheckbox = "div>label.svelte-1qrbjun";
    this.inputDataButton = "a.cta.cta--big.svelte-1c95w6l";
    this.goToPaymentButton = ".cta.cta--big.svelte-z2hwn2";
  }
  async getTextOfItem(item) {
    await this.page.textContent(item);
  }
  async click(locator) {
    await this.page.click(locator);
  }
  async wait(locator) {
    await this.page.waitForSelector(locator);
  }
}

module.exports = CartPage;

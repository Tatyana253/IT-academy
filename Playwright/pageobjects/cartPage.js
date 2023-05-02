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
    this.deliverygToHomeheckbox = 'label>div.svelte-1u80c5s';
    this.addAddressButton = '.cta.cta--alt';
    this.selectShopCheckbox = "div>label.svelte-1qrbjun";
    this.inputDataButton = "a.cta.cta--big.svelte-1c95w6l";
    this.goToPaymentButton = ".cta.cta--big.svelte-z2hwn2";
    this.addressNameInputForDelivery = '#address-name-1026f6fb-2977-4065-95c3-9f400739334a';
    this.firstNameInput = '#first-name-1026f6fb-2977-4065-95c3-9f400739334a';
    this.lastNameInput = '#last-name-1026f6fb-2977-4065-95c3-9f400739334a';
    this.streetInput = 'l#ine1-1026f6fb-2977-4065-95c3-9f400739334a';
    this.postalCodeInput = '#postalCode-1026f6fb-2977-4065-95c3-9f400739334a';
    this.cityDropdown = '#cityGeoId-1026f6fb-2977-4065-95c3-9f400739334a';
    this.selectedCityFromCityDropdown = "//*[@id='cityGeoId-1026f6fb-2977-4065-95c3-9f400739334a']/option[@value='PL-80-180-32441']";
    this.mobileNumberInput = '#address-mobile-1026f6fb-2977-4065-95c3-9f400739334a';
    this.submitAddressButton = '.vtmn-btn.vtmn-btn_variant--primary.vtmn-btn_size--medium';
    this.selectAddressRadiobutton = 'div>.svelte-1qrbjun';
    this.anotherAddressButton = 'div>button.svelte-153o10m';
    this.selectAddressForCourierRadiobutton = 'label>div.svelte-1qrbjun';
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

class DeliveryDataPage {
  constructor(page) {
    this.page = page;
    this.genderCheckbox = "label.radio-inline>span.indicator";
    this.mobileNumberInput = "#mobile";
    this.streetInput = "#line1";
    this.postalCodeInput = "input#postalCode";
    this.cityDropdown =
      "//*[@class='btn dropdown-toggle bs-placeholder btn-default bs-invalid']";
    this.cityFromCityDropdown =
      "//*[@id='addressFormGenerator']/div[4]/div/div/div[1]/div/ul/li[3]/a/span[1]";
    this.noCheckboxProgramDecathlon =
      "//*[@id='js-optin-data']/div/div/div/div[2]/label/span";
    this.noToSubscriptionForNewsLetter =
      '//*[@id="js-optin-data"]/div/div/div/div[2]/label/span';
    this.acceptRulesCheckbox =
      "//div[@class='checkbox']/label/input[@class='checkbox-input'][@name='newsletter-agreement']/following-sibling:: span";
    this.submitButton = "#js-complete-account-button";
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

module.exports = DeliveryDataPage;

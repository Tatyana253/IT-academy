class LoginPage {
  constructor(page) {
    this.page = page;
    this.title = "//h3";
    this.emailInput = "#input-email";
    this.submitButton =
      ".vtmn-btn.vtmn-btn_variant--primary.vtmn-btn_size--stretched";
    this.logInSubmitButton = "#signin-button";
    this.createNewUserButton =
      ".vtmn-btn.sign-up-btn.vtmn-btn_variant--secondary.vtmn-btn_size--stretched";
    this.errorMessage =
      ".vtmn-typo_font-weight--regular.vtmn-typo_text-3.textfield-error-message";
    this.passwordInput = "#input-password";
    this.invalidPasswordErrorMessage =
      "//p[@class='vtmn-typo_font-weight--regular vtmn-typo_text-3 textfield-error-message']";
  }
  async click(locator) {
    await this.page.click(locator);
  }
  async wait(locator) {
    await this.page.waitForSelector(locator);
  }
}

module.exports = LoginPage;

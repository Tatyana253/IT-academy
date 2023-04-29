

class LoginPage {
    constructor(page) {
        this.page = page;
        this.title = "//h3";
        this.emailInput = 'div.textfield-input-container>input.vtmn-text-input.textfield-input#input-email';
        this.submitButton = '.vtmn-btn.vtmn-btn_variant--primary.vtmn-btn_size--stretched';
        this.createNewUserButton = '.vtmn-btn.sign-up-btn.vtmn-btn_variant--secondary.vtmn-btn_size--stretched';
        this.errorMessage = '.vtmn-typo_font-weight--regular.vtmn-typo_text-3.textfield-error-message'
    }
    async click(locator) {
        await this.page.click(locator);
      }

}

module.exports = LoginPage;
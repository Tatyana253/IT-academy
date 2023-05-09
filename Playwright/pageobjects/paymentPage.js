class PaymentPage {
  constructor(page) {
    this.page = page;
    this.blikNumberInput = "div>p.dkt-description";
    this.goHomeButton = ".decathlon-logo ";
  }
  async wait(locator) {
    await this.page.waitForSelector(locator);
  }
}

module.exports = PaymentPage;

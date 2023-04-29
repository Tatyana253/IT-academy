

class CartPage {
    constructor(page) {
        this.page = page;
        this.emptyCartNotification = "//h2";
        this.addedToCartItem  = ".cart-line.svelte-2faiun";
        this.nameOfAddedItem = 'div>a.product-name.svelte-2faiun';
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
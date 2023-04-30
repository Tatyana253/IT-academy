class CartPage {
    constructor(page) {
        this.page = page;
        this.emptyCartNotification = "//h2";
        this.emptyCartNotificationWithText = "//h2[@class='svelte-11o9gok'][contains(text(),'Twój koszyk jest pusty.')]";
        this.addedToCartItem = ".cart-line.svelte-2faiun";
        this.nameOfAddedItem = 'div>a.product-name.svelte-2faiun';
        this.deleteItemButton = "//button[@aria-label='Remove product in cart page']";
        this.logiInButton = "//a[@class='cta cta--big cta--primary cta--block svelte-11o9gok']";
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
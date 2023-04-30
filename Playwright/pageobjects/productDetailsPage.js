class ProductDetailsPage {
    constructor(page) {
        this.page = page;
        this.addToCartButton = "//button[@class ='cta add-to-cart cta--primary cta--big cta--block svelte-slh13v']";
        this.goToCartButton = "//a[@class ='cta cta--primary svelte-r0gvyp']";
        this.toContinueShoppinButton = "//div/button[@class='cta cta--alt svelte-r0gvyp']";
        this.titleOfItem = 'h1.title.svelte-1i7tvft';
        this.itemAddedToCartNotification = "//h2[@class='svelte-r0gvyp'][contains(text(),'Produkt dodany do koszyka!')]";

    }
    async click(locator) {
        await this.page.click(locator);
    }
    async wait(locator) {
        await this.page.waitForSelector(locator);
    }


}

module.exports = ProductDetailsPage;
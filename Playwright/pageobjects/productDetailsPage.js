class ProductDetailsPage {
    constructor(page) {
        this.page = page;
        this.addToCartButton = "//button[@class ='cta add-to-cart cta--primary cta--big cta--block svelte-slh13v']";
        this.goToCartButton = "//a[@class ='cta cta--primary svelte-r0gvyp']";
        this.titleOfItem = 'h1.title.svelte-1i7tvft';
   
    }
    async click(locator) {
        await this.page.click(locator);
      }

    
}

module.exports = ProductDetailsPage;
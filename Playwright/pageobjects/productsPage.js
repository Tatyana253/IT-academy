class ProductsPage {
    constructor(page) {
        this.page = page;
        this.productItem = 'div>a.svelte-188lqn5';
        this.productName = 'a.dpb-product-link.svelte-pbo8nu>span';
   
    }
    async click(locator) {
        await this.page.click(locator);
      }
   
}

module.exports = ProductsPage;


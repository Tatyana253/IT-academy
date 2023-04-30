class ProductsPage {
    constructor(page) {
        this.page = page;
        this.productItem = 'div>a.svelte-188lqn5';
        this.productItemFounded = 'a.category-link.svelte-b8sjzf';
        this.productName = 'a.dpb-product-link.svelte-pbo8nu>span';
        this.addToCartItemButton = "//button[@class='button cta--primary svelte-1286sr cta cta--block']";
        this.imageOfFoundedItem = "//a[@class='svelte-188lqn5']";
    }
    async click(locator) {
        await this.page.click(locator);
    }
    async scroll(locator) {
        await this.page.scrollIntoViewIfNeeded(locator);
    }
}

module.exports = ProductsPage;
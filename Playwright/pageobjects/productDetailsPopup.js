class ProductDetailsPopup {
    constructor(page) {
        this.page = page;
        this.titleOfItem = '.vtmn-typo_text-3.vtmn-my-0';
        this.sizeDropdown = '#product-size-selection';
        this.itemSize = 'button>.label-container.svelte-19253cd';
        this.addToCartButton = "//div/button[@class='button svelte-1286sr cta']";

    }
    async click(locator) {
        await this.page.click(locator);
    }


}

module.exports = ProductDetailsPopup;
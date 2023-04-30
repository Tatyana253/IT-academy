class FindShopPage {
    constructor(page) {
        this.page = page;
        this.inputCity = ".svelte-1i9aly6>div>input";
        this.searchShopInputField = "div>input.svelte-4hbuwy";
        this.foundShops = "li>h4.svelte-1sd86t2";
        this.listOfSuggestedResults = '.svelte-1i9aly6>button';
        this.shopsList = 'div.header.svelte-q48w7x';
        this.suggestedResultsFromSearchField = "div>ul.svelte-4hbuwy>li>a";

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

module.exports = FindShopPage;
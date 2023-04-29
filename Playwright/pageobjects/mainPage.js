class MainPage {
    constructor(page) {
        this.page = page;
        this.acceptCookiesButton = '.didomi-components-button.didomi-button.didomi-dismiss-button.didomi-components-button--color.didomi-button-highlight.highlight-button';
        this.title = 'div>.logo.svelte-1k36ljj';
    }

    async navigate(url) {
        await this.page.goto(url);
    }
}

module.exports = MainPage;


class SportyTab {
    constructor(page) {
        this.page = page;
        this.title = "//h3";
        this.sportTabClicked = 'a>span.svelte-13cos0r';
        this.toolsForAquafitnes = "//a/span[@class='svelte-13cos0r'][contains (text(), 'Stroje do Aquafitnessu')]";
        
    
    }
    async click(locator) {
        await this.page.click(locator);
      }

}

module.exports = SportyTab;
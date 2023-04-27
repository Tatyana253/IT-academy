class SearchPage {
    constructor(page) {
        this.page = page;
        this.searchInput = '.DocSearch-Input';
        this.searchResult =  "//span[@class='DocSearch-Hit-title']/mark";
    }
}

module.exports = SearchPage;
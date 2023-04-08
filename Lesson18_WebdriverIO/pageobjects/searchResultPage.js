class SearchResultPage {
    get results() {
      return $$(".DocSearch-Hit-title");
    }
  
    async getFirstResultText() {
      const firstResult = await this.results[0];
      return firstResult.getText();
    }
  }
  
  module.exports = new SearchResultPage();
  
  

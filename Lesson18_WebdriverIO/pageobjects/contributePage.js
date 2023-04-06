class ContributePage {
    get title() {
      return $("//h1");
    }
  
    async getTitleText() {
      return this.title.getText();
    }
  }
  
  module.exports = new ContributePage();
  




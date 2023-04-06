class GithubPage {
    get title() {
      return $("//strong/a[@data-pjax='#repo-content-pjax-container']");
    }
  
    async getTitleText() {
      return this.title.getText();
    }
  }
  
  module.exports = new GithubPage();
  
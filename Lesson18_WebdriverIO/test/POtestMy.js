const { expect } = require("chai");
const HomePage = require("../pageobjects/homePage");
const GettingStartedPage = require('../pageobjects/gettingStartedPage');
const ContributePage = require('../pageobjects/contributePage');
const SearchResultPage = require ('../pageobjects/searchResultPage');

describe.skip("Verify webdriverio site", () => {
  let homePage, gettingStartedPage, contributePage, searchResultPage;

  beforeEach(async () => {
    homePage = new HomePage();
    gettingStartedPage = new GettingStartedPage();
    contributePage = new ContributePage();
    searchResultPage = new SearchResultPage();
    await homePage.open();
  });

  //test1
  it("should go to Docs - Getting Started", async () => {
    await homePage.goToGettingStarted();
    await expect(gettingStartedPage.title.getText()).to.contain("Getting Started");
  });

  //test2
  it("should go to Contribute footer", async () => {
    await homePage.goToContribute();
    await expect(contributePage.title.getText()).to.contain("Contribute");
  });

  //test3
  it("search browser", async () => {
    await homePage.search("browser");
    await expect(searchResultPage.getFirstResultText()).to.include("browser");
  });

  //test4
  it("should clear value after search", async () => {
    await homePage.search("test");
    await expect(searchResultPage.getFirstResultText()).to.contain("test");
    await homePage.clearSearch();
    await expect(homePage.getSearchValue()).to.equal("");
  });

  //test5
  it("should navigate to github", async () => {
    await homePage.goToGitHub();
    await expect(await homePage.getPageTitle()).to.contain("webdriverio");
  });
});


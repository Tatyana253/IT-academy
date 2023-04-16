const { test } = require('@playwright/test');
const MainPage = require('../pageObjects/mainPage');
const Header = require('../pageObjects/pageComponents/header');
const DocPage = require('../pageObjects/docPage');
const ApiPage = require('../pageObjects/apiPage');
const CommunityPage = require('../pageObjects/communityPage');
const SearchPage = require('../pageObjects/searchPage')
const {expect} = require('chai');

test.describe('test Playwright website', async function() {
    let mainPage;
    let header;
    let docPage;
    let apiPage;
    let communityPage;
    let searchPage;
    test.beforeEach(async ({page}) => {
        mainPage = new MainPage(page);
        header = new Header(page);
        docPage = new DocPage(page);
        communityPage = new CommunityPage(page);
        apiPage = new ApiPage(page);
        searchPage = new SearchPage(page);
    });

    test('should navigate to Docs page', async ({page}) => {
        await mainPage.navigate('https://playwright.dev/');
        await header.goToPageWithTopNavMenu(header.docsLink);
        expect(await docPage.page.textContent(docPage.title)).to.equal('Installation');
    });

    test('should navigate to API page', async ({page}) => {
        await mainPage.navigate('https://playwright.dev/');
        await header.goToPageWithTopNavMenu(header.apiLink);
        expect(await apiPage.page.textContent(apiPage.title)).to.equal('Playwright Library');
    });

    test('should navigate to Community page', async ({page}) => {
        await mainPage.navigate('https://playwright.dev/');
        await header.goToPageWithTopNavMenu(header.communityLink);
        expect(await communityPage.page.textContent(communityPage.title)).to.equal('Welcome');
    });

    test('verify that first search result contains input value', async ({page}) => {
        await mainPage.navigate('https://playwright.dev/');
        await header.goToPageWithTopNavMenu(header.searchLink);
        await page.type(searchPage.searchInput, 'Installation');
        expect(await searchPage.page.textContent(searchPage.searchResult)).to.equal('Installation');
    });
})

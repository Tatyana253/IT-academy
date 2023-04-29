const { test } = require('@playwright/test');
const MainPage = require('../pageobjects/mainPage');
const Header = require('../pageobjects/components/header');
//const DocPage = require('../pageobjects/docPage');
//const ApiPage = require('../pageobjects/apiPage');
//const CommunityPage = require('../pageobjects/communityPage');
//const SearchPage = require('../pageobjects/searchPage')
const {expect} = require('chai');
const CartPage = require('../pageobjects/cartPage');

test.describe('Cart tests for Decathlon website', async function() {
    let mainPage;
    let header;
    let cartPage;
    //let docPage;
    //let apiPage;
    //let communityPage;
    //let searchPage;
    test.beforeEach(async ({page}) => {
        mainPage = new MainPage(page);
        header = new Header(page);
        cartPage = new CartPage(page);
        //docPage = new DocPage(page);
        //communityPage = new CommunityPage(page);
        //apiPage = new ApiPage(page);
        //searchPage = new SearchPage(page);
    });
    //await mainPage.navigate('https://www.decathlon.pl/');
    //await I.click(mainPage.acceptCookiesButton);
    test('cart should be empty', async ({page}) => {
        //await mainPage.navigate('https://www.decathlon.pl/');
        //await header.click(mainPage.acceptCookiesButton);
        await mainPage.navigate('https://www.decathlon.pl/');
        await header.click(mainPage.acceptCookiesButton);
        await header.click(header.cartButton);
        expect(await cartPage.page.textContent(cartPage.emptyCartNotification)).to.equal('Twój koszyk jest pusty.');
    });


/*
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

    */
});

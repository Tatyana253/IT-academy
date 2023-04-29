const { test } = require('@playwright/test');
const MainPage = require('../pageobjects/mainPage');
const Header = require('../pageobjects/components/header');
const ProductDetailsPage = require('../pageobjects/productDetailsPage');
const {expect} = require('chai');
const CartPage = require('../pageobjects/cartPage');
const LoginPage = require('../pageobjects/loginPage');
const ProductsPage = require('../pageobjects/productsPage');
const SportyTab = require('../pageobjects/components/sportyTab');

test.describe('Cart tests for Decathlon website', async function() {
    let mainPage;
    let header;
    let cartPage;
    let loginPage;
    let productDetailsPage;
    let productsPage;
    let sportyTab;
    test.beforeEach(async ({page}) => {
        mainPage = new MainPage(page);
        header = new Header(page);
        cartPage = new CartPage(page);
        loginPage = new LoginPage(page);
        productsPage = new ProductsPage(page);
        productDetailsPage = new ProductDetailsPage(page);
        sportyTab = new SportyTab(page);
        await mainPage.navigate('https://www.decathlon.pl/');
        await header.click(mainPage.acceptCookiesButton);
    });
    
    test('cart should be empty', async ({page}) => {
        await header.click(header.cartButton);
        expect(await cartPage.page.textContent(cartPage.emptyCartNotification)).to.equal('Twój koszyk jest pusty.');
    });

    test ('item should be added to the cart from main slide content', async ({page}) => {
    
        await mainPage.click(mainPage.mainSliderMenuLink);
        const itemText = await cartPage.page.textContent(productDetailsPage.titleOfItem);
        await productDetailsPage.click(productDetailsPage.addToCartButton);
        await productDetailsPage.click(productDetailsPage.goToCartButton);
        await cartPage.wait(cartPage.nameOfAddedItem);
        expect(await cartPage.page.textContent(cartPage.nameOfAddedItem)).to.equal(itemText);
    });

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


const { test } = require('@playwright/test');
const MainPage = require('../pageobjects/mainPage');
const Header = require('../pageobjects/components/header');
const {expect} = require('chai');
const CartPage = require('../pageobjects/cartPage');
const LoginPage = require('../pageobjects/loginPage');
const ProductsPage = require('../pageobjects/productsPage');

test.describe('search page tests for Decathlon website', async function() {
    let mainPage;
    let header;
    let cartPage;
    let loginPage;
    let productsPage;
    
    test.beforeEach(async ({page}) => {
        mainPage = new MainPage(page);
        header = new Header(page);
        cartPage = new CartPage(page);
        loginPage = new LoginPage(page);
        productsPage = new ProductsPage(page);
        await mainPage.navigate('https://www.decathlon.pl/');
        await header.click(mainPage.acceptCookiesButton);
    });
    
    test('should search via search in header', async ({page}) => {
        await header.click(header.searchField);
        await page.type(header.searchField, 'rower');
        await header.click(header.searchButton);
        expect(await productsPage.page.textContent(productsPage.productName)).to.include('Rower');
    });
});
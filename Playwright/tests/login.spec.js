const { test } = require('@playwright/test');
const MainPage = require('../pageobjects/mainPage');
const Header = require('../pageobjects/components/header');
const {expect} = require('chai');
const CartPage = require('../pageobjects/cartPage');
const LoginPage = require('../pageobjects/loginPage');

test.describe('Login page tests for Decathlon website', async function() {
    let mainPage;
    let header;
    let cartPage;
    let loginPage;
    
    test.beforeEach(async ({page}) => {
        mainPage = new MainPage(page);
        header = new Header(page);
        cartPage = new CartPage(page);
        loginPage = new LoginPage(page);
        
        await mainPage.navigate('https://www.decathlon.pl/');
        await header.click(mainPage.acceptCookiesButton);
    });
    
    test('should go to login page', async ({page}) => {
        //await mainPage.navigate('https://www.decathlon.pl/');
        //await header.click(mainPage.acceptCookiesButton);
        //await mainPage.navigate('https://www.decathlon.pl/');
        //await header.click(mainPage.acceptCookiesButton);
        await header.click(header.myAccountButton);
        expect(await loginPage.page.textContent(loginPage.title)).to.be.oneOf(["Login",'Zaloguj się']);
    });

//'Zaloguj się'||


    test('sign in with existed account -  should be triggered notification that entered email was registered already', async ({page}) => {
        await header.click(header.myAccountButton);
        await loginPage.click(loginPage.createNewUserButton);
        await page.type(loginPage.emailInput, 'tdancenko31@gmail.com');
        await page.click(loginPage.submitButton);
        expect(await loginPage.page.textContent(loginPage.errorMessage)).to.equal(" To konto już istnieje ");
    })
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

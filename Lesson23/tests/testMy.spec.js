const { test } = require('@playwright/test');
const MainPage = require('../pageObjects/mainPage');
const Header = require('../pageObjects/pageComponents/header');
const DocPage = require('../pageObjects/docPage');
const {expect} = require('chai');

test.describe('test Playwright website', async function() {
    let mainPage;
    let header;
    let docPage;
    test.beforeEach(async ({page}) => {
        mainPage = new MainPage(page);
        header = new Header(page);
        docPage = new DocPage(page);
    });

    test('should navigate to Docs page', async ({page}) => {
        await mainPage.navigate('https://playwright.dev/');
        await header.goToPageWithTopNavMenu(header.docsLink);
        expect(await docPage.page.textContent(docPage.title)).to.equal('Installation');
    });
})

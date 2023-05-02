const { test } = require("@playwright/test");
const MainPage = require("../pageobjects/mainPage");
const Header = require("../pageobjects/components/header");
const { expect } = require("chai");
const CartPage = require("../pageobjects/cartPage");
const LoginPage = require("../pageobjects/loginPage");
const MyAccountPage = require("../pageobjects/myAccountPage");
const ProductsPage = require("../pageobjects/productsPage");
const ProductDetailsPage = require("../pageobjects/productDetailsPage");
test.describe("E2E tests for Login page for Decathlon website", async function () {
  let mainPage;
  let header;
  let cartPage;
  let loginPage;
  let myAccountPage;
  let productsPage;
  let productDetailsPage;

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    header = new Header(page);
    cartPage = new CartPage(page);
    loginPage = new LoginPage(page);
    myAccountPage = new MyAccountPage(page);
    productsPage = new ProductsPage(page);
    productDetailsPage = new ProductDetailsPage(page);

    await mainPage.navigate("https://www.decathlon.pl/");
    await header.click(mainPage.acceptCookiesButton);
  });

  test.afterEach(async ({ page }) => {
    await header.click(header.myAccountButton);
    await header.click(myAccountPage.logOutButton);
  });

  test("should log in with valid credentials from header", async ({ page }) => {
    await header.click(header.myAccountButton);
    await page.type(loginPage.emailInput, "testdanchi@gmail.com");
    await page.click(loginPage.submitButton);
    await page.click(loginPage.passwordInput);
    await page.type(loginPage.passwordInput, "7795797Martik");
    await page.click(loginPage.submitButton);
    await header.wait(header.myAccountButton);
    await header.click(header.myAccountButton);
    expect(
      await myAccountPage.page.textContent(myAccountPage.greetingsMessage)
    ).to.include("testname");
  });

  test("should log in with valid credentials from cart after addiing and deleting item from cart", async ({
    page,
  }) => {
    await header.click(header.searchField);
    await page.type(header.searchField, "rower");
    await header.click(header.searchButton);
    const itemText = await cartPage.page.textContent(productsPage.productName);
    await productsPage.click(productsPage.imageOfFoundedItem);
    await productDetailsPage.click(productDetailsPage.addToCartButton);
    await productDetailsPage.click(productDetailsPage.goToCartButton);
    await cartPage.wait(cartPage.nameOfAddedItem);
    await cartPage.click(cartPage.deleteItemButton);
    await cartPage.click(cartPage.logInButton);
    await page.type(loginPage.emailInput, "testdanchi@gmail.com");
    await page.click(loginPage.submitButton);
    await page.click(loginPage.passwordInput);
    await page.type(loginPage.passwordInput, "7795797Martik");
    await page.click(loginPage.submitButton);
    await header.wait(header.myAccountButton);
    await header.click(header.myAccountButton);
    expect(
      await myAccountPage.page.textContent(myAccountPage.greetingsMessage)
    ).to.include("testname");
  });
});

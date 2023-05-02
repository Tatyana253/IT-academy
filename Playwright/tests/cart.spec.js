const { test } = require("@playwright/test");
const MainPage = require("../pageobjects/mainPage");
const Header = require("../pageobjects/components/header");
const ProductDetailsPage = require("../pageobjects/productDetailsPage");
const LoginPage = require("../pageobjects/loginPage");
const PaymentPage = require("../pageobjects/paymentPage");
const { expect } = require("chai");
const CartPage = require("../pageobjects/cartPage");
const ProductsPage = require("../pageobjects/productsPage");

test.describe("Cart tests for Decathlon website", async function () {
  let mainPage;
  let header;
  let cartPage;
  let productDetailsPage;
  let productsPage;
  let loginPage;
  let paymentPage;
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    header = new Header(page);
    cartPage = new CartPage(page);
    productsPage = new ProductsPage(page);
    productDetailsPage = new ProductDetailsPage(page);
    loginPage = new LoginPage(page);
    paymentPage = new PaymentPage(page);
    await mainPage.navigate("https://www.decathlon.pl/");
    await header.click(mainPage.acceptCookiesButton);
  });

  test("cart should be empty", async ({ page }) => {
    await header.click(header.cartButton);
    expect(
      await cartPage.page.textContent(cartPage.emptyCartNotification)
    ).to.equal("Twój koszyk jest pusty.");
  });

  test("item should be added to the cart from main slide content", async ({
    page,
  }) => {
    await mainPage.click(mainPage.mainSliderMenuLink);
    const itemText = await cartPage.page.textContent(
      productDetailsPage.titleOfItem
    );
    await productDetailsPage.click(productDetailsPage.addToCartButton);
    await productDetailsPage.click(productDetailsPage.goToCartButton);
    await cartPage.wait(cartPage.nameOfAddedItem);
    expect(await cartPage.page.textContent(cartPage.nameOfAddedItem)).to.equal(
      itemText
    );
  });

  test("should add to cart found via search item and from productDetails popup", async ({
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
    expect(await cartPage.page.textContent(cartPage.nameOfAddedItem)).to.equal(
      itemText
    );
  });

  test("should delete added item from cart", async ({ page }) => {
    await header.click(header.searchField);
    await page.type(header.searchField, "rower");
    await header.click(header.searchButton);
    const itemText = await cartPage.page.textContent(productsPage.productName);
    await productsPage.click(productsPage.imageOfFoundedItem);
    await productDetailsPage.click(productDetailsPage.addToCartButton);
    await productDetailsPage.click(productDetailsPage.goToCartButton);
    await cartPage.click(cartPage.deleteItemButton);
    await cartPage.wait(cartPage.emptyCartNotificationWithText);
    expect(
      await cartPage.page.textContent(cartPage.emptyCartNotification)
    ).to.equal("Twój koszyk jest pusty.");
  });

  test("should continue shopping after adding item to cart", async ({
    page,
  }) => {
    await header.click(header.searchField);
    await page.type(header.searchField, "rower");
    await header.click(header.searchButton);
    const itemText = await cartPage.page.textContent(productsPage.productName);
    await productsPage.click(productsPage.imageOfFoundedItem);
    await productDetailsPage.click(productDetailsPage.addToCartButton);
    await productDetailsPage.wait(
      productDetailsPage.itemAddedToCartNotification
    );
    await productDetailsPage.click(productDetailsPage.toContinueShoppinButton);
    expect(
      await productDetailsPage.page.textContent(productDetailsPage.titleOfItem)
    ).to.equal(itemText);
  });

  test("should login, add item to cart, select 'delivery to home' and go to payment page", async ({
    page,
  }) => {
    await header.click(header.searchField);
    await page.type(header.searchField, "rower");
    await header.click(header.searchButton);
    await productsPage.click(productsPage.imageOfFoundedItem);
    await productDetailsPage.click(productDetailsPage.addToCartButton);
    await productDetailsPage.click(productDetailsPage.goToCartButton);
    await cartPage.click(cartPage.goToDeliveryButton);
    await page.type(loginPage.emailInput, "testdanchi@gmail.com");
    await page.click(loginPage.submitButton);
    await page.click(loginPage.passwordInput);
    await page.type(loginPage.passwordInput, "7795797Martik");
    await page.click(loginPage.logInSubmitButton);
    await header.click(header.cartButton);
    await cartPage.click(cartPage.goToDeliveryButton);
    await cartPage.click(cartPage.deliverygToHomeheckbox);
    await cartPage.click(cartPage.selectAddressForCourierRadiobutton);
    await cartPage.click(cartPage.goToPaymentButton);
    expect(
      await paymentPage.page.textContent(paymentPage.blikNumberInput)
    ).to.equal(
      "Wpisz wygenerowany w aplikacji banku kod BLIK (Kod musi zawierać 6 cyfr)"
    );
  });
});

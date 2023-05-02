const { test } = require("@playwright/test");
const MainPage = require("../pageobjects/mainPage");
const Header = require("../pageobjects/components/header");
const { expect } = require("chai");
const LoginPage = require("../pageobjects/loginPage");

test.describe.skip("Login page tests for Decathlon website", async function () {
  let mainPage;
  let header;
  let loginPage;

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    header = new Header(page);
    loginPage = new LoginPage(page);

    await mainPage.navigate("https://www.decathlon.pl/");
    await header.click(mainPage.acceptCookiesButton);
  });

  test("should go to login page", async ({ page }) => {
    await header.click(header.myAccountButton);
    expect(await loginPage.page.textContent(loginPage.title)).to.be.oneOf([
      "Login",
      "Zaloguj się",
    ]);
  });

  test("sign in with existed account -  should be triggered notification that entered email was registered already", async ({
    page,
  }) => {
    await header.click(header.myAccountButton);
    await loginPage.click(loginPage.createNewUserButton);
    await page.type(loginPage.emailInput, "tdancenko31@gmail.com");
    await page.click(loginPage.submitButton);
    expect(await loginPage.page.textContent(loginPage.errorMessage)).to.equal(
      " To konto już istnieje "
    );
  });

  test("error message should be triggered while log in with invalid credentials from header", async ({
    page,
  }) => {
    await header.click(header.myAccountButton);
    await page.type(loginPage.emailInput, "tdancenko31@gmail.com");
    await page.click(loginPage.submitButton);
    await page.click(loginPage.passwordInput);
    await page.type(loginPage.passwordInput, "7795797Mart");
    await page.click(loginPage.submitButton);
    await header.wait(loginPage.invalidPasswordErrorMessage);
    expect(
      await loginPage.page.textContent(loginPage.invalidPasswordErrorMessage)
    ).to.equal(" Nieprawidłowe hasło ");
  });
});

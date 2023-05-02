const { test } = require("@playwright/test");
const MainPage = require("../pageobjects/mainPage");
const Header = require("../pageobjects/components/header");
const { expect } = require("chai");
const SportyTab = require("../pageobjects/components/sportyTab");
const TopNavMenu = require("../pageobjects/components/topNavMenu");
const CartPage = require("../pageobjects/cartPage");

test.describe.skip("TopNavMenu tests for Decathlon website", async function () {
  let mainPage;
  let header;
  let sportyTab;
  let topNavMenu;
  let cartPage;
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    header = new Header(page);
    cartPage = new CartPage(page);
    sportyTab = new SportyTab(page);
    topNavMenu = new TopNavMenu(page);
    cartPage = new CartPage(page);
    await mainPage.navigate("https://www.decathlon.pl/");
    await header.click(mainPage.acceptCookiesButton);
  });

  test("should go to all sports tab through TopNavMenu", async ({ page }) => {
    await topNavMenu.click(header.topNavMenu);
    await topNavMenu.click(topNavMenu.allSportsLink);
    expect(
      await topNavMenu.page.textContent(topNavMenu.titleFromTopNavMenuChild)
    ).to.equal("Wszystkie sporty");
  });

  test("should go to women tab through TopNavMenu", async ({ page }) => {
    await topNavMenu.click(header.topNavMenu);
    await topNavMenu.click(topNavMenu.womenLink);
    expect(
      await topNavMenu.page.textContent(
        topNavMenu.titleFromTopNavMenuChildSecond
      )
    ).to.equal("Kobieta");
  });

  test("should go to men tab through TopNavMenu", async ({ page }) => {
    await topNavMenu.click(header.topNavMenu);
    await topNavMenu.click(topNavMenu.menLink);
    expect(
      await topNavMenu.page.textContent(
        topNavMenu.titleFromTopNavMenuChildSecond
      )
    ).to.equal("Mężczyzna");
  });

  test("should go to kids tab through TopNavMenu", async ({ page }) => {
    await topNavMenu.click(header.topNavMenu);
    await topNavMenu.click(topNavMenu.kidsLink);
    expect(
      await topNavMenu.page.textContent(
        topNavMenu.titleFromTopNavMenuChildSecond
      )
    ).to.equal("Dziecko");
  });

  test("should go to accessory tab through TopNavMenu", async ({ page }) => {
    await topNavMenu.click(header.topNavMenu);
    await topNavMenu.click(topNavMenu.accessoryLink);
    expect(
      await topNavMenu.page.textContent(
        topNavMenu.titleFromTopNavMenuChildSecond
      )
    ).to.equal("Akcesoria");
  });

  test("should go to supplements tab through TopNavMenu", async ({ page }) => {
    await topNavMenu.click(header.topNavMenu);
    await topNavMenu.click(topNavMenu.supplementsLink);
    expect(
      await topNavMenu.page.textContent(
        topNavMenu.titleFromTopNavMenuChildSecond
      )
    ).to.equal("Odżywianie i suplementy");
  });

  test("should go to ecodesign tab through TopNavMenu", async ({ page }) => {
    await topNavMenu.click(header.topNavMenu);
    await topNavMenu.click(topNavMenu.ecodesignLink);
    expect(await topNavMenu.page.textContent(topNavMenu.h1Title)).to.equal(
      "Ecodesign\n"
    );
  });

  test("should go to other things tab through TopNavMenu", async ({ page }) => {
    await topNavMenu.click(header.topNavMenu);
    await topNavMenu.click(topNavMenu.otherThigsLink);
    expect(await topNavMenu.page.textContent(topNavMenu.h1Title)).to.equal(
      "Ostatnie sztuki i promocje"
    );
  });

  test("should go to Aquafitness through topNavMenu ", async ({ page }) => {
    await header.click(header.topNavMenu);
    await topNavMenu.click(topNavMenu.allSportsLink);
    header.sport = "Aquafitness";
    await header.click(header.typeOfSport);
    expect(
      await sportyTab.page.textContent(sportyTab.toolsForAquafitnes)
    ).to.equal("Stroje do Aquafitnessu");
  });
});

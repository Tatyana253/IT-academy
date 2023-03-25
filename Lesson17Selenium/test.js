const {Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require("chai");


describe('ChromeDriver Website test', function () {
    let driver;
    before(async () => {
       driver = await new Builder().forBrowser('chrome').build();

    });


    after(async () => {
        await driver.quit();
    });

  it("text should equal Chrome driver", async () => {

    await driver.get("https://chromedriver.chromium.org/home");
    const mainTitle = await driver.findElement(By.className("Rn3Z1b C9DxTc"));
    let text = await mainTitle.getText();
    expect(text).to.equal('ChromeDriver');
  });

  it("go to chrome extensions", async () => {
    await driver.get("https://chromedriver.chromium.org/home");
    await driver.wait(until.elementIsVisible(await driver.findElement(
        By.xpath("//*[@class='aJHbb hDrhEe HlqNPb'] [@data-url='/extensions']"))), 10000);
    const chromeExtensions = await driver.findElement(
      By.xpath("//*[@class='aJHbb hDrhEe HlqNPb'] [@data-url='/extensions']")
    );
    await chromeExtensions.click();
    await driver.wait(until.urlContains("/extensions"), 3000);

  });


});

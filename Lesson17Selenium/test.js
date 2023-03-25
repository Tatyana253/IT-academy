const { Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require("chai");

describe("ChromeDriver Website test", function () {
  let driver;
  before(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
  });

  after(async () => {
    await driver.quit();
  });
//test1
  it("text should equal Chrome driver", async () => {
    await driver.get("https://chromedriver.chromium.org/home");
    const mainTitle = await driver.findElement(By.className("Rn3Z1b C9DxTc"));
    let text = await mainTitle.getText();
    expect(text).to.equal("ChromeDriver");
  });

  it.skip("go to chrome extensions", async () => {
    //await driver.get("https://chromedriver.chromium.org/home");
    await driver.wait(
      until.elementIsVisible(
        await driver.findElement(
          By.xpath(
            "//*[@class='aJHbb hDrhEe HlqNPb'] [@data-url='/extensions']"
          )
        )
      ),
      10000
    );
    const chromeExtensions = await driver.findElement(
      By.xpath("//*[@class='aJHbb hDrhEe HlqNPb'] [@data-url='/extensions']")
    );
    await chromeExtensions.click();
    //await driver.wait(until.urlContains("/extensions"), 3000);
    //await driver.executeScript("arguments[0].style.background='yellow", title);
    const extensionsTitle = await driver.findElement(
      By.xpath("//span[@class=' Rn3Z1b']")
    );
    let textExtensions = await extensionsTitle.getText();
    expect(textExtensions).to.equal("Chrome Extensions");
  });
//test2
  it.skip("go to extensions two", async () => {

    //await driver.get("https://chromedriver.chromium.org/home");
   /* await driver.wait(
      until.elementIsVisible(
        await driver.findElement(
          By.xpath(
            "//*[@class='aJHbb hDrhEe HlqNPb'] [@data-url='/extensions']"
          )
        )
      ),
      10000
    );
    */
    const additionalButton = await driver.findElement(
        By.xpath("//a[contains(text(),'Дополнительно')]")
      );
      await additionalButton.click();
    const chromeExtensionsButton = await driver.findElement(
      By.xpath("//*[@class='aJHbb hDrhEe HlqNPb'] [@data-url='/extensions']")
    );
    await chromeExtensionsButton.click();
    await driver.wait(until.urlContains("/extensions"), 3000);
    const extensionsTitle = await driver.findElement(
        By.xpath("//span[@class=' Rn3Z1b']")
      );
      let textExtensions = await extensionsTitle.getText();
      expect(textExtensions).to.equal("Chrome Extensions");
  });
//test3
it("search driver", async () => {
    await driver.get("https://chromedriver.chromium.org/home");
    const buttonSearch = await driver.findElement(By.css(".vu8Pwe.tCHXDc.YSH9J"));
    await buttonSearch.click();
    let searchInput = await driver.findElement(By.xpath("//input"));
    await driver.wait(until.elementIsVisible(searchInput), 3000);
    await searchInput.sendKeys('driver');
    const search = await driver.findElement(By.css(".U26fgb.mUbCce.fKz7Od.i3PoXe.M9Bg4d"));
    await search.click();

    const elementFound = await driver.findElements(By.xpath("//*[@class='yDWqEe'][1]"));
    let textFound = await elementFound.getText();
    expect(textFound[0]).to.contain("driver");
  });




})

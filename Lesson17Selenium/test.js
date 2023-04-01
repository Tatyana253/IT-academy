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
    await driver.wait(
      until.elementIsVisible(
        await driver.findElement(By.className("Rn3Z1b C9DxTc"))
      ),
      20000
    );
    const mainTitle = await driver.findElement(By.className("Rn3Z1b C9DxTc"));
    let text = await mainTitle.getText();
    expect(text).to.equal("ChromeDriver");
  });

  //test2
  it("go to chrome extensions", async () => {
    await driver.get("https://chromedriver.chromium.org/home");
    const extensionsTab = await driver.findElement(
      By.xpath(
        "//a[@class='aJHbb dk90Ob jgXgSe HlqNPb'][@data-url='/extensions']"
      )
    );
    await extensionsTab.click();
    await driver.executeScript("return document.title;");
    const extensionsTitle = await driver.findElement(
      By.xpath("//*[@class=' Rn3Z1b']")
    );
    await driver.executeScript(
      "arguments[0].style.backgroundColor='yellow'",
      extensionsTitle
    );
    expect(await extensionsTitle.getText()).to.equal("Chrome Extensions");
  });

  //test3
  it("search driver", async () => {
    await driver.get("https://chromedriver.chromium.org/home");
    const buttonSearch = await driver.findElement(
      By.css(".vu8Pwe.tCHXDc.YSH9J")
    );
    await buttonSearch.click();
    await driver.wait(
      until.elementIsVisible(
        await driver.findElement(By.xpath("//input[@type='search']"))
      ),
      20000
    );
    await driver
      .findElement(By.xpath("//input[@type='search']"))
      .sendKeys("driver");
    const searchStart = await driver.findElement(
      By.xpath("//*[@class='vu8Pwe']")
    );
    await searchStart.click();
    await driver.sleep(3000);
    const searchResults = await driver.findElements(By.css(".yDWqEe"));
    const firstLinkText = await searchResults[0].getText();
    expect(firstLinkText).to.include("driver");
  });

  //test4
  it("navitation to Mobile Emulation", async () => {
    await driver.get("https://chromedriver.chromium.org/home");
    const additionalButtonTwo = await driver.findElement(
      By.xpath("//a[contains(text(),'Дополнительно')]")
    );
    await additionalButtonTwo.click();
    const mobileEmulationButton = await driver.findElement(
      By.xpath(
        "//a[@class='aJHbb hDrhEe HlqNPb'] [@data-url = '/mobile-emulation']"
      )
    );
    await mobileEmulationButton.click();
    const mobileEmulationTitle = await driver.findElement(
      By.xpath("//span[@class = ' Rn3Z1b']")
    );
    let textMobileEmulation = await mobileEmulationTitle.getText();
    expect(textMobileEmulation).to.equal("Mobile Emulation");
  });
});

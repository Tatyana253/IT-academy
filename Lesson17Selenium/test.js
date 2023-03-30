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
    await driver.sleep(2000);
    //await driver.wait(until.urlContains("/extensions"), 3000);
    //await driver.executeScript("arguments[0].style.background='yellow", title);
    const extensionsTitle = await driver.findElement(
      By.xpath("//*[@class=' Rn3Z1b']")
    );
    await driver.executeScript(
      "arguments[0].style.backgroundColor='yellow",
      extensionsTitle
    );
    expect(extensionsTitle.getText()).to.equal("Chrome Extensions");
  });
  //a[@class='aJHbb dk90Ob jgXgSe HlqNPb'][@data-url='/extensions']
  /*await driver.wait(
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
*/

  //test2
  it.skip("go to extensions two", async () => {
    await driver.get("https://chromedriver.chromium.org/home");
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
    //await driver.wait (until.elementsLocated(await driver.findElements(By.css(".vH0yjd > a"))),20000);
    //await driver.wait (until.elementsLocated(await driver.findElements(By.css(".vH0yjd a"))), 20000);
    const searchResults = await driver.findElements(By.css(".vH0yjd a"));
    //const searchResults = driver.wait(until.elementsLocated(await driver.findElements(By.xpath("//div[@class='vH0yjd']/a"))), 20000);
    //let textSearchResults = await searchResults.getText().toLowerCase();
    //expect(await textSearchResults[0]).to.contain("driver");
    expect(await searchResults[0].getText()).to.contain("driver");
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

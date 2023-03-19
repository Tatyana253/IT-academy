const {Builder, By, until } = require('selenium-webdriver');

(async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://chromedriver.chromium.org/home');
    const mainTitle = await driver.findElement(By.className('Rn3Z1b C9DxTc'));
    let text = await mainTitle.getText();
    if (text === 'ChromeDriver') {
        console.log('Text is "ChromeDriver"');
      } else {
        console.log(`Text is not "ChromeDriver". It is: ${text}`);
      } 
      const chromeExtensions = await driver.findElement(By.xpath("//*[text()='Chrome Extensions']"));
      await driver.wait(until.elementIsVisible(By.xpath("//*[text()='Chrome Extensions']")));
      await chromeExtensions.click();


    await driver.sleep(3000);
    await driver.quit();
}
)();

const { AfterAll, BeforeAll, After } = require("cucumber");
const config = require("../../config");

const driver = config.driver;

BeforeAll(async function () {
    await driver.manage().window().maximize();
    await driver.manage().setTimeouts({ implicit: 10000 });
});

After('@Login', async function () {
    await driver.manage().deleteAllCookies();
    await driver.navigate().refresh();
});

AfterAll({ timeout: 10000 }, async function () {
    await driver.quit()
});
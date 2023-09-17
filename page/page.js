const webdriver = require('selenium-webdriver');
require('dotenv').config();

const driver = new webdriver.Builder().forBrowser('chrome').build();

class Page {
    constructor() {
        global.driver = driver;
    }

    async goto(url) {
        await driver.get(process.env.BASE_URL + url);
    }

    async close() {
        await driver.close();
    }
}

module.exports = Page;
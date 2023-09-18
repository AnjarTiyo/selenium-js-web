const { Builder } = require("selenium-webdriver");
const { Options } = require("selenium-webdriver/chrome");
require('dotenv').config();

let chromeOptions = new Options();
// console.log('Headless is ', process.env.HEADLESS);
// chromeOptions.debuggerAddress('localhost:9222');

switch (process.env.HEADLESS) {
    case 'TRUE':
        chromeOptions.addArguments('--headless=new');
        chromeOptions.addArguments('--start-maximize');
        break;
    case 'FALSE':
        // chromeOptions.addArguments('--headless=false');
        chromeOptions.addArguments('--start-maximize');
        break;
    default:
        chromeOptions.addArguments('--headless=new');
        chromeOptions.addArguments('--start-maximize');
        break;
}

const config = {
    // Url
    baseUrl: process.env.BASE_URL,

    // Timeout
    pageLoadTimeout: 10000,
    elementTimeout: 10000,

    // Logging and reporting
    logPath: './reports/',

    // driver init
    driver: new Builder()
        .forBrowser(process.env.BROWSER || "chrome")
        .setChromeOptions(chromeOptions)
        .build()
};

module.exports = config;
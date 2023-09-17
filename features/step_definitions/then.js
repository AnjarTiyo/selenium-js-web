const { Then } = require("cucumber");
const config = require("../../config");
const { expect } = require("chai");
const SocioCommercePage = require("../page/sociocommerce.page");
const { until, By } = require("selenium-webdriver");
const LoginPage = require("../page/login.page");

require('dotenv').config();

const driver = config.driver;
const socioCommercePage = new SocioCommercePage(driver);

const loginPage = new LoginPage(driver);

Then('I am logged in', async () => {
    await driver.wait(until.stalenessOf(loginPage.loginButton), config.pageLoadTimeout);
    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).to.not.equal(process.env.BASE_URL + '/login');
});

Then('I am on {} user dashboard page', async (position) => {
    expect(await socioCommercePage.accountPosition.getText()).to.equal(position);
});

Then('Message {} is appeared', async (message) => {
    const messageFound = await driver.findElement(By.xpath("//*[contains(text(),'" + message + "')]")).isDisplayed();
    expect(messageFound).to.be.true;
});

Then('I am not logged in', async () => {
    const currentUrl = await driver.getCurrentUrl();
    await expect(currentUrl).equal(process.env.BASE_URL + '/login');
});

Then('Login button is disabled', async () => {
    expect(await loginPage.loginButton.isEnabled()).to.equal(false);
});

Then('It will reveal password', async () => {
    expect(await loginPage.passwordField.getAttribute('type')).to.equal('text');
});

Then('When I click eye icon again it will masks my password again', async () => {
    await loginPage.eyeIcon.click();
    expect(await loginPage.passwordField.getAttribute('type')).to.equal('password');
});

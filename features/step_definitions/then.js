const { Then } = require("cucumber");
const config = require("../../config");
const { expect } = require("chai");
const SocioCommercePage = require("../page/sociocommerce.page");
const { until, By } = require("selenium-webdriver");
const LoginPage = require("../page/login.page");
const sharedContext = require("../../helpers/shared-context");

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
    try {
        const messageFound = await driver.findElement(By.xpath("//*[contains(text(),'" + message + "')]")).isDisplayed();
        expect(messageFound).to.be.true;
    } catch (error) {
        console.error('\x1b[31mError: Message not found\x1b[0m');
        expect.fail('Message not found');
    }
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

Then('I am registered as sociocommerce user', async () => {
    // await driver.sleep(5000);
})

Then('I am redirected to email verification page', async () => {
    await driver.wait(until.urlContains('/register-verification'), config.pageLoadTimeout);

    const registeredEmail = sharedContext.sharedData.data.email;
    const currentUrl = await driver.getCurrentUrl();

    expect(currentUrl).to.equal(process.env.BASE_URL +
        '/register-verification?email=' +
        registeredEmail);
})

// 'use strict';

const { Given } = require("cucumber");
const config = require("../../config");
const LoginPage = require("../page/login.page");
const { expect } = require("chai");
const RegisterUserPage = require("../page/register.page");
const RegisterCorpPage = require("../page/register-corp.page");
const { until } = require("selenium-webdriver");
const ForgotPasswordPage = require("../page/forgot-password.page");

require('dotenv').config();

const driver = config.driver;
const loginPage = new LoginPage(driver);
const registerPage = new RegisterUserPage(driver);
const registerCorpPage = new RegisterCorpPage(driver);
const forgotPasswordPage = new ForgotPasswordPage(driver);

Given('I open Login Page', async () => {
    await loginPage.open();
    // await loginPage.waitPageToLoad();
});
Given('I enter {string} to password field', async (password) => {
    await loginPage.enterPassword(password);
})

Given('Initial password field is masked', async () => {
    expect(await loginPage.passwordField.getAttribute('type')).to.equal('password');
})

Given('I open {} Register Page', { timeout: 30 * 1000 }, async (userType) => {
    switch (userType) {
        case "Sociocommerce":
            await registerPage.open();
            break;
        case "Corporate":
            await registerCorpPage.open();
            break;
        default:
            console.error('select Sociocommerce or Corporate only')
            break;
    }
})

Given('I already register phone number {string} as users phone number', { timeout: 30000 }, async (phoneNumber) => {
    await registerPage.registerNewUser(
        undefined,
        undefined,
        undefined,
        phoneNumber
    );
    await driver.navigate().refresh();
})

Given('I click Forgot Password link', { timeout: 30000 }, async () => {
    await loginPage.forgotPassword.click();
    await driver.wait(until.stalenessOf(loginPage.forgotPassword), config.elementTimeout);
    await driver.wait(until.elementIsVisible(forgotPasswordPage.emailField), config.elementTimeout);
})

Given('I enter registered email to email field', async () => {
    await forgotPasswordPage.emailField.sendKeys(process.env.VALID_USERNAME);
})

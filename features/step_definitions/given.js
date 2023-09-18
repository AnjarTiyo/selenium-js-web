// 'use strict';

const { Given } = require("cucumber");
const config = require("../../config");
const LoginPage = require("../page/login.page");
const { expect } = require("chai");
const RegisterUserPage = require("../page/register.page");
const RegisterCorpPage = require("../page/register-corp.page");

require('dotenv').config();

const driver = config.driver;
const loginPage = new LoginPage(driver);
const registerPage = new RegisterUserPage(driver);
const registerCorpPage = new RegisterCorpPage(driver);

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

Given('I open {} Register Page',{timeout: 30 * 1000}, async (userType) => {
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

// 'use strict';

const { Given } = require("cucumber");
const config = require("../../config");
const LoginPage = require("../page/login.page");
const { expect } = require("chai");

require('dotenv').config();

const driver = config.driver;
const loginPage = new LoginPage(driver);

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

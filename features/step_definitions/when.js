const { When } = require("cucumber");
const config = require("../../config");
const LoginPage = require("../page/login.page");
const { until } = require("selenium-webdriver");
const SocioCommercePage = require("../page/sociocommerce.page");
const RegisterUserPage = require("../page/register.page");
const RegisterCorpPage = require("../page/register-corp.page");
const ForgotPasswordPage = require("../page/forgot-password.page");

const driver = config.driver;
const loginPage = new LoginPage(driver);
const socioCommercePage = new SocioCommercePage(driver);
const registerUserPage = new RegisterUserPage(driver);
const registerCorpPage = new RegisterCorpPage(driver);
const forgotPasswordPage = new ForgotPasswordPage(driver);

const validUsername = process.env.VALID_USERNAME;
const validCorporateUsername = process.env.VALID_CORPORATE_USERNAME
const validPassword = process.env.VALID_PASSWORD;

When('I login as {} user', async (position) => {
    switch (position) {
        case "sociocommerce":
            await loginPage.performLogin(validUsername, validPassword);
            break;
        case "corporate":
            await loginPage.performLogin(validCorporateUsername, validPassword);
            break;
        default:
            console.error('select sociocommerce or corporate only');
    }

});

When('I login but doesnt provide {}', async (missingField) => {
    switch (missingField) {
        case 'password':
            await loginPage.tryLogin(validUsername, '');
            break;
        case 'username':
            await loginPage.tryLogin(' ', validPassword);
            break;
        default:
            console.log('select username on password as missingField')
            break;
    }
})

When('I login with wrong credentials', async () => {
    await loginPage.performLogin(validUsername, 'wrong-password');
})

When('I login with invalid email format', async () => {
    await loginPage.performLogin('invalid', validPassword);
})

When('I click eye button', async () => {
    await loginPage.eyeIcon.click();
})

When('I login with too short password', async () => {
    await loginPage.performLogin(validUsername, 'a'.repeat(5));
})

When('I register new {} using valid data', async (registerType) => {
    switch (registerType) {
        case 'Sociocommerce':
            await registerUserPage.registerNewUser();
            break;
        case 'Corporate':
            await registerCorpPage.registerNewCorp();
            break;
        default:
            break;
    }
})

When('I register but dont provide {}', async (missingField) => {
    switch (missingField) {
        case 'password':
            await registerUserPage.passwordField.sendKeys(' ');
            break;
        case 'name':
            await registerUserPage.userName.sendKeys(' ');
            break;
        case 'email':
            await registerUserPage.userEmail.sendKeys(' ');
            break;
        case 'phone':
            await registerUserPage.handphoneField.sendKeys(' ');
            break;
        default:
            console.log('select username, email or password as missingField');
            break;
    }
});

When('I register with common password', async () => {
    await registerUserPage.registerNewUser(
        undefined,
        undefined,
        "P@ssword",
        undefined
    );
})

When('I registered phone number {string} again', { timeout: 30000 }, async (phoneNumber) => {
    await registerUserPage.open();
    await registerUserPage.registerNewUser(
        undefined,
        undefined,
        undefined,
        phoneNumber
    );
})

When('I click Reset Password button', async () => {
    await forgotPasswordPage.resetButton.click();
    await driver.wait(until.stalenessOf(forgotPasswordPage.emailField), config.elementTimeout);
})



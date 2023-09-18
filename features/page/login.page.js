const { By, until } = require("selenium-webdriver");
const config = require("../../config");

class LoginPage {
    constructor(driver) {
        this.driver = driver;
    }

    get usernameField() {
        return this.driver.findElement(By.css("input[name='email']"));
    }

    get passwordField() {
        return this.driver.findElement(By.css("input[name='password']"));
    }

    get loginButton() {
        return this.driver.findElement(By.css("button.btn.btn-primary[type='submit']"));
    }

    get eyeIcon () {
        return this.driver.findElement(By.xpath("//i[contains(@class, 'uil-eye')]"));
    }

    get loader() {
        return this.driver.findElement(By.className("text-loading"));
    }

    get forgotPassword() {
        return this.driver.findElement(By.xpath("//small[contains(text(), 'Lupa password?')]"));
    }

    async open() {
        await this.driver.get(process.env.BASE_URL + '/login');
        await this.waitPageToLoad();
    }

    async waitPageToLoad() {
        await this.driver.wait(until.stalenessOf(this.loader), config.pageLoadTimeout);
    }

    async enterUsername(username) {
        await this.usernameField.sendKeys(username);
    }

    async enterPassword(password) {
        await this.passwordField.sendKeys(password);
    }

    async clickLogin() {
        // await this.driver.wait(until.stalenessOf(this.loader), 10000);
        await this.loginButton.click()
    }

    async performLogin(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
        // await this.driver.wait(until.stalenessOf(this.loginButton), config.pageLoadTimeout);
    }

    // Try login without click login button
    async tryLogin(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
    }

}

module.exports = LoginPage;
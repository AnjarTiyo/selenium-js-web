require('dotenv').config();
const { faker } = require('@faker-js/faker');
const { activateAccount } = require('../../helpers/activate-account');
const { By, until } = require('selenium-webdriver');
const config = require('../../config');
const sharedContext = require('../../helpers/shared-context')

class RegisterUserPage {
    constructor(driver) {
        this.driver = driver;
    }

    get userName() {
        return this.driver.findElement(By.xpath("//input[@name='name']"));
    }

    get userEmail() {
        return this.driver.findElement(By.xpath("//input[@name='email']"));
    }

    get passwordField() {
        return this.driver.findElement(By.xpath("//input[@name='password']"));
    }

    get eyeIcon() {
        return this.driver.findElement(By.xpath("//i[contains(@class, 'uil-eye')]"));
    }

    get severityBox() {
        return this.driver.findElement(By.xpath("//div[contains(@class, 'severity-box')]"));
    }

    get passwordStrength() {
        return this.driver.findElement(By.xpath("//span[contains(@class, 'text-capitalize')]"));
    }

    get handphoneField() {
        return this.driver.findElement(By.xpath("//input[@name='phone']"));
    }

    get minimumCharacterValidation() {
        return this.driver.findElement(By.xpath("//span[contains(@class, 'validation-text') and contains(text(), 'Minimal harus 8 karakter')]"));
    }

    get maximumCharacterValidation() {
        return this.driver.findElement(By.xpath("//span[contains(@class, 'validation-text') and contains(text(), 'Maximal harus 64 karakter')]"));
    }

    get additionalSuggestion() {
        return this.driver.findElement(By.xpath("//span[contains(@class, 'validation-text') and contains(text(), 'Disarankan menggunakan kombinasi huruf kapital, huruf kecil, angka dan karakter khusus')]"));
    }

    get registerButton() {
        return this.driver.findElement(By.css("button.btn.btn-primary[type='submit']"));
    }
    get loader() {
        return this.driver.findElement(By.className("text-loading"));
    }

    async waitPageToLoad() {
        await this.driver.wait(until.stalenessOf(this.loader), config.pageLoadTimeout);
    }


    async open() {
        await this.driver.get(process.env.BASE_URL + "/register");
        await this.waitPageToLoad();
    }

    async clickRegister() {
        await this.driver.executeScript('arguments[0].scrollIntoView();', this.registerButton);
        await this.driver.wait(until.elementIsEnabled(this.registerButton), config.elementTimeout);
        await this.driver.sleep(1000);
        await this.registerButton.click();
    }

    async registerNewUser({userName, userEmail, userPassword, userPhone, isActive = true}) {
        const data = {
            name: userName || faker.person.fullName(),
            email: userEmail || faker.internet.email({ provider: 'yopmail.com' }).toLowerCase(),
            password: userPassword || 'Keon123!',
            phone: userPhone || faker.phone.number('089999999999##'),
            is_active: isActive,
            member_category: "social-commerce"
        };
        // console.log(data);
        await this.userName.sendKeys(data.name);
        await this.userEmail.sendKeys(data.email);
        await this.passwordField.sendKeys(data.password);
        await this.handphoneField.sendKeys(data.phone);
        await this.clickRegister();
        // await activateAccount();

        // share registered data
        sharedContext.sharedData.data = data;
    }
}

module.exports = RegisterUserPage;
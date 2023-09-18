const { By } = require("selenium-webdriver");

class ForgotPasswordPage {
    constructor(driver){
        this.driver = driver;
    }

    get emailField(){
        return this.driver.findElement(By.name("email"));
    }

    get resetButton(){
        return this.driver.findElement(By.xpath("//button[@type='submit']"))
    }
}

module.exports = ForgotPasswordPage;
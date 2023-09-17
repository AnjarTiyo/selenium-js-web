const { By } = require("selenium-webdriver");

class RegisterCorpPage {
    constructor(driver){
        this.driver = driver;
    }

    get companyName(){
        return this.driver.findElement(By.xpath("//input[@name='name']"));
    }

    get companyEmail(){
        return this.driver.findElement(By.xpath("//input[@name='email']"));
    }

    get passwordField(){
        return this.driver.findElement(By.xpath("//input[@name='password']"));
    }

    get eyeIcon(){
        return this.driver.findElement(By.xpath("//i[contains(@class, 'uil-eye')]"));
    }

    get severityBox(){
        return this.driver.findElement(By.xpath("//div[contains(@class, 'severity-box')]"));
    }

    get passwordStrength(){
        return this.driver.findElement(By.xpath("//span[contains(@class, 'text-capitalize')]"));
    }

    get handphoneField(){
        return this.driver.findElement(By.xpath("//input[@name='phone']"));
    }

    get minimumCharacterValidation(){
        return this.driver.findElement(By.xpath("//span[contains(@class, 'validation-text') and contains(text(), 'Minimal harus 8 karakter')]"));
    }

    get maximumCharacterValidation(){
        return this.driver.findElement(By.xpath("//span[contains(@class, 'validation-text') and contains(text(), 'Maximal harus 64 karakter')]"));
    }

    get additionalSuggestion(){
        return this.driver.findElement(By.xpath("//span[contains(@class, 'validation-text') and contains(text(), 'Disarankan menggunakan kombinasi huruf kapital, huruf kecil, angka dan karakter khusus')]"));
    }

    get registerButton(){
        return this.driver.findElement(By.css("button.btn.btn-primary[type='submit']"));
    }
}

module.exports = RegisterCorpPage;
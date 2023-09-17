const { By, until } = require("selenium-webdriver");
const config = require("../../config");
const LoginPage = require("./login.page");


class SocioCommercePage {
    constructor(driver){
        this.driver = driver;
    }

    get accountName () {
        return this.driver.findElement(By.css("div.account-user-name.d-flex"));
    }

    get accountPosition () {
        return this.driver.findElement(By.css("span.account-position"));
    }

    get dalamPengumpulan () {
        return this.driver.findElement(By.xpath("//p[@class='mb-0 text-muted card-overview__label' and contains(text(), 'Dalam Pengumpulan')]"));
    }

    get buttonBuatKiriman () {
        return this.driver.findElement(By.xpath("//i[@class='uil-plus']"));
    }

}

module.exports = SocioCommercePage;
const config = require("../../config");

class Page {
    constructor(){
        this.driver = driver;
    }

    async open(url){
        this.driver.get(config.baseUrl + url);
    }
}

module.exports = Page;
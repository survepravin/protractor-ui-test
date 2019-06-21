'use strict'

var HomePage = function () {
    const pageTitle = "University of Utah Health";
    var lnkFindADoctor = element(by.xpath("//span[@class='u-show@medium' and contains(text(),'Find A Doctor')]"));

    this.navigate = async function (linkName) {
        console.log("navigate")
        await lnkFindADoctor.click();
    }

    this.open = async function (url) {
        console.log("open url")
        await browser.get(url);
        browser.driver.sleep(3000);
    }

    this.getTitle = function () {
        browser.getTitle().then(function (title) {
            if (title.match(pageTitle)) {
                return title;
            } else {
                return "";
            }
        });
    }
}

module.exports = new HomePage();
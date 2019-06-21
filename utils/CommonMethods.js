// var EC = protractor.ExpectedConditions;
// var elm = $('#element-id[attribute="expected value"]');

// browser.wait(EC.presenceOf(elm), 5000);
// elm.getAttribute("attribute").then(function (value) {
//     console.log(value);
// });

// browser.wait(result =>{
//     return element(by.className('toast-success')).isPresent();
// }, 20000);

// const URL = 'https://en-master.wunderflats.xyz/my/account';

var CommonMethods = function () {
    let TIMEOUT = 5000;

    this.waitForElementToBePresent = async (webElement, timeout) => {
        if (timeout) {
            TIMEOUT = timeout;
        }
        var EC = protractor.ExpectedConditions;
        await browser.wait(EC.presenceOf(webElement), TIMEOUT);
    }

    this.waitForElementToBeVisible = async (webElement, timeout) => {
        if (timeout) {
            TIMEOUT = timeout;
        }
        await browser.wait(ExpectedConditions.visibilityOf(webElement), TIMEOUT, 'Error in wait : ' + webElement);
    }
}

module.exports = new CommonMethods();
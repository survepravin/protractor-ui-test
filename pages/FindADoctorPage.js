var FindADoctorPage = function () {
    var lblPageHeading = element(by.id("pageHeading"));
    var drpDocType = element(by.id("fad-dropdown"));
    var txtSearchSpeciality = element(by.id("specialistSpecialties_value"));
    var searchResult = $(".angucomplete-title");
    var drpLocation = element(by.model("location"));
    var chkGenderMale = element(by.model("gender.male"));
    var chkGenderFemale = element(by.model("gender.female"));
    var drpLanguage = element(by.model("language"));
    var lstDocResult = element.all(by.xpath("//a[@class='o-card--profiles']"));
    var docName = element(by.xpath("//*[@itemprop='name']"));
    var txtSearchDoc = element(by.model("query"));
    var parentWindow;
    var util = require("../utils/CommonMethods");

    this.isLoaded = async function () {
        await util.waitForElementToBeVisible(lblPageHeading);
        console.log("FAD...Page Loaded...");
        return lblPageHeading.isPresent();
    }

    this.selectDoctorType = async (type) => {
        if (type) {
            await drpDocType.$('[value="' + type + '"]').click();
        }
    }

    this.searchSpecialist = async (type) => {
        await txtSearchSpeciality.sendKeys(type);
        await searchResult.click();
    }

    this.selectLocation = async (location) => {
        await drpLocation.$('[value="' + location + '"]').click();
    }

    this.selectGender = async (gender) => {
        if ("MALE" == gender) {
            await chkGenderMale.click();
        } else if ("FEMALE" == gender) {
            await chkGenderFemale.click();
        }
    }

    this.selectLanguage = async (lang) => {
        await drpLanguage.$('[value="' + lang + '"]').click();
    }

    this.verifyResult = async () => {
        return await lstDocResult;
    }

    this.searchDoctor = async (name) => {
        await txtSearchDoc.sendKeys(name);
    }

    this.OpenDocProfile = async () => {
        parentWindow = await browser.getWindowHandle();
        await lstDocResult.then(function (item) {
            item[0].element(by.xpath("//div[contains(text(),'View Profile')]")).click();
        });
        await browser.getAllWindowHandles().then(function (allGUID) {
            // print the title of th epage
            browser.getTitle().then(function (title) {
                console.log("Page title before Switching : " + title);
            });
            console.log("Total Windows : " + allGUID.length);
            // iterate the values in the set
            for (let guid of allGUID) {
                // one enter into if blobk if the GUID is not equal to parent window's GUID
                if (guid != parentWindow) {
                    // switch to the guid
                    browser.switchTo().window(guid);
                    // break the loop
                    break;
                }
            }
        });
    }

    this.getDoctorName = async () => {
        return await docName.getText();
    }

    this.closeCurrentWindow = async () => {
        await browser.close();
    }

    this.switchToParentWindow = () => {
        browser.switchTo().window(parentWindow);
    }
}

module.exports = new FindADoctorPage();
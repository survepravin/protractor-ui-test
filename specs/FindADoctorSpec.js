var config = require("../app.config");
var home_page = require("../pages/HomePage");
var find_a_doc_page = require("../pages/FindADoctorPage");
const URL = config.url;

describe('To verify persistence of User profile', function () {
    beforeEach(() => {
        home_page.open(URL);
    });

    it('verify search doctor profile', async () => {
        await home_page.navigate("FIND_A_DOCTOR");
        var isLoaded = await find_a_doc_page.isLoaded();
        expect(isLoaded).toBe.truthy;
        var docName = "WILLIAM AUFFERMANN"
        await find_a_doc_page.searchDoctor("WILLIAM AUFFERMANN");
        await find_a_doc_page.OpenDocProfile();
        var name = find_a_doc_page.getDoctorName();
        await find_a_doc_page.closeCurrentWindow();
        await find_a_doc_page.switchToParentWindow();
        expect(name).toContain(docName.split(" ")[0]);
        expect(name).toContain(docName.split(" ")[1]);
        // await browser.sleep(5000);
    });

    it('Verify the profile details', async function () {
        await home_page.navigate("FIND_A_DOCTOR");
        var isLoaded = await find_a_doc_page.isLoaded();
        expect(isLoaded).toBe.truthy;
        await find_a_doc_page.selectDoctorType("Specialist");
        await find_a_doc_page.searchSpecialist("Kidney Cancer");
        await find_a_doc_page.selectLocation("University Hospital");
        await find_a_doc_page.selectGender("MALE");
        await find_a_doc_page.selectLanguage("English");
        var result = await find_a_doc_page.verifyResult();
        expect(result.length).toBeGreaterThan(1);
        expect(result.length).toBe(3);
    });
});
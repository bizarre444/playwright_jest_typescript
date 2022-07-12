import {test, expect} from "@playwright/test";
import { RegistrationHeader } from "../pages/RegistrationHeader";
import { RegistrationChess } from "../pages/RegistrationChess";
const url = require("../helper/config").url;
const subUrl = require("../helper/config").subUrl;
const path = require("../helper/config").selectors.chessPage.path;
let homepage: any;

test.afterEach(async ({ page }, testInfo) => {
    console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);
  
    if (testInfo.status !== testInfo.expectedStatus)
      console.log(`Did not run as expected, ended up at ${page.url()}`);
});

test.beforeAll(async ({browser}) => {
    console.log('Before registration tests');
    // const page = await browser.newPage();
    // homepage = new RegistrationHeader(page);
    // await page.goto(url);
});
  
test.afterAll(async () => {
    console.log('After registration tests');
});

test.describe('Registration test', () => {
    test('Reg flow from header', async({page}) => {
        test.slow();
        homepage = new RegistrationHeader(page);

        await homepage.open(url);
        await homepage.clickSignUp();
        await homepage.regSteps();
        //check url
        const regUrl = await homepage.getUrl();
        expect(regUrl).toContain(subUrl);
    })

    test.only('Registration from Chess course', async({ page }) => {
        homepage = new RegistrationChess(page);
        //console.log(path)
        await homepage.open(url + path);
        await homepage.chessFlowFirst();
        const textName = await homepage.getInnerText(".sign-up-chess__name");
        //console.log(textName);
        expect(textName).toContain('name');

        await homepage.chessFlowSecond();
        const titleStepOne = await homepage.getInnerText('[data-selector="chess-level-question-step-1"]');
        //console.log(titleStepOne);
        //check my child's name is here
        expect(titleStepOne).toContain("Kira");

        //need fix
        await homepage.chessFlowThird();
        const successTitle = await homepage.getInnerText('[data-selector="chess-last-step-good-text"]');
        console.log(successTitle);
        expect(successTitle).toContain("Kira");
    })
})
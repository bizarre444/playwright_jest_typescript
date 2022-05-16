import {test, expect} from "@playwright/test";
import { BasePage } from "../pages/BasePage";
import { RegistrationHeader } from "../pages/RegistrationHeader";
const url = require("../helper/config").url;
const subUrl = require("../helper/config").subUrl;

test.afterEach(async ({ page }, testInfo) => {
    console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);
  
    if (testInfo.status !== testInfo.expectedStatus)
      console.log(`Did not run as expected, ended up at ${page.url()}`);
});

test.beforeAll(async () => {
    console.log('Before registration tests');
});
  
test.afterAll(async () => {
    console.log('After registration tests');
});

test.describe('Registration test', () => {
    test('Reg flow from header', async({page}) => {
        test.slow();
        const homepage = new RegistrationHeader(page);

        await homepage.open(url);
        await homepage.clickSignUp();
        await homepage.regSteps();
        //check url
        const regUrl = await homepage.getUrl();
        expect(regUrl).toContain(subUrl);
    })
})
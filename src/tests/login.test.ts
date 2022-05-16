import {test, expect} from "@playwright/test";

import { BasePage } from "../pages/BasePage";
import { LoginHeader } from "../pages/LoginHeader";

const url = require("../helper/config").url;
const { login } = require("../helper/config").selectors;

test.afterEach(async ({ page }, testInfo) => {
    console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);
  
    if (testInfo.status !== testInfo.expectedStatus)
      console.log(`Did not run as expected, ended up at ${page.url()}`);
});

test.beforeAll(async () => {
    console.log('Before login tests');
});
  
test.afterAll(async () => {
    console.log('After login tests');
});

test.describe('Login test from header', () => {
    test('Incorrect creds', async ({page}) => {
        test.slow();
        const homepage = new LoginHeader(page);

        await homepage.open(url);
        await homepage.checkPopupVisible();
        const title = await homepage.getInnerText(login.modal);
        expect(title).toContain('Log in');
        await homepage.login(login.email, '111');
        await homepage.waitSelector(login.errorTag);
        let checkMsg = await homepage.getInnerText(login.errorTag);
        expect(checkMsg).toEqual(login.message);
    });

    test('Correct creds', async ({page}) => {
        const homepage = new LoginHeader(page);

        await homepage.open(url);
        await homepage.checkPopupVisible();
        const title = await homepage.getInnerText(login.modal);
        expect(title).toContain('Log in');
        await homepage.login(login.email, login.password);
        await homepage.waitSelector(login.success);
        let checkUrl = await homepage.getUrl();
        expect(checkUrl).toContain(login.successUrl);
    })
})
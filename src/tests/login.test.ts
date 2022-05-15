import {test, expect} from "@playwright/test";

import { BasePage } from "../pages/BasePage";
import { LoginHeader } from "../pages/LoginHeader";

const url = require("../helper/config").url;
const { login } = require("../helper/config").selectors;

test.describe('Login test from header', () => {
    test.only('Incorrect creds', async ({page}) => {
        const homepage = new LoginHeader(page);
        //test.setTimeout(120000);

        await homepage.open(url);
        await homepage.checkPopupVisible();
        const title = await homepage.getInnerText(login.modal);
        expect(title).toContain('Log in');
        await homepage.login(login.email, '111');
        let checkMsg = await homepage.getInnerText(login.errorTag);
        expect(checkMsg).toEqual(login.message);
    });

    test.only('Correct creds', async ({page}) => {
        test.setTimeout(120000);

        //todo
        const homepage = new LoginHeader(page);

        await homepage.open(url);
        await homepage.checkPopupVisible();
        const title = await homepage.getInnerText(login.modal);
        expect(title).toContain('Log in');
        await homepage.login(login.email, login.password);
        let checkUrl = await homepage.getUrl();
        expect(checkUrl).toEqual(login.successUrl);
    })
})
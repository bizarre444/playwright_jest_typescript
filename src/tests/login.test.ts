import {test, expect} from "@playwright/test";

import { BasePage } from "../pages/BasePage";
import { LoginHeader } from "../pages/LoginHeader";

const url = require("../helper/config").url;
const { login } = require("../helper/config").selectors;

test.describe('Login test from header', () => {
    test('Correct creads', async ({page}) => {
        const homepage = new LoginHeader(page);

        await homepage.open(url);
        await homepage.checkPopupVisible();
        await homepage.login(login.email, login.passoword);

    })
})
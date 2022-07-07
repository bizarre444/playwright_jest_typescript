import {test, expect, request} from "@playwright/test";

import { BasePage } from "../pages/BasePage";
import { ParentPage } from "../pages/ParentPage";
import { TeacherPage } from "../pages/TeacherPage";
import { LearningPage } from "../pages/LearningPage";
import { BlogPage } from "../pages/BlogPage";
import APIUtils from '../utils/APIUtils';
const loginPayLoad = { "username": "qa.parent2021@gmail.com", "password": "123456QA" };
let webContext: any;
const url = require("../helper/config").url;
const { parentPage, teachersPage, learningPage, blogPage, mainPage } = require("../helper/config").selectors;

test.beforeAll(async ({browser}) => {

    const context = await browser.newContext();
    const page: any = await context.newPage();

    const apiContext = await request.newContext();
    let apiUtils_new = new APIUtils(apiContext, loginPayLoad)
    let response = await apiUtils_new.loginByApi();
    console.log(response);
    await apiContext.storageState({ path: 'state.json'});
    webContext = await browser.newContext({ storageState: 'state.json'});
});

test('Main page test', async( {page} ) => {
    const homepage = new BasePage(page);
    page = await webContext.newPage();

    await homepage.open(url);
    //check url
    const siteUrl = await homepage.getUrl();
    expect(siteUrl).toBe(url);
    //check title
    const title = await homepage.getInnerText(mainPage.title_tag);
    expect(title).toBe(mainPage.title);
    await page.screenshot({ path: 'test_api_login.png', fullPage: true });
});
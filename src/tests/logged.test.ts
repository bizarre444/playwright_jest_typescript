import {test, expect, request} from "@playwright/test";

import { BasePage } from "../pages/BasePage";
import { WorksheetActions } from "../pages/WorksheetActions";
import { TeacherPage } from "../pages/TeacherPage";
import { LearningPage } from "../pages/LearningPage";
import { BlogPage } from "../pages/BlogPage";
import APIUtils from '../utils/APIUtils';
const loginPayLoad = { "username": "qa.parent2021@gmail.com", "password": "123456QA" };
let webContext: any;
const url = require("../helper/config").url;

const { parentPage, teachersPage, learningPage, blogPage, mainPage } = require("../helper/config").selectors;
const path = learningPage.worksheet_tab.path;

test.beforeAll(async ({browser}) => {

    const apiContext = await request.newContext();
    let apiUtils_new = new APIUtils(apiContext, loginPayLoad)
    let response = await apiUtils_new.loginByApi();
    //console.log(response);
    webContext = await browser.newContext({ storageState: './state/state.json'});
});

test.describe('Tests for logged user', () => {
    test('Main page test', async() => {
        let homepage = new BasePage(await webContext.newPage());
    
        await homepage.open(url);
        //check url
        const siteUrl = await homepage.getUrl();
        expect(siteUrl).toBe(url);
        //check title
        const title = await homepage.getInnerText(mainPage.title_tag);
        expect(title).toBe(mainPage.title);
        await homepage.takeScreenshoot();
        //await homepage.pause();
    });

    test('Logged user do not see registration popup', async() => {
        let worksheetpage = new WorksheetActions(await webContext.newPage());
    
        await worksheetpage.open(url + path);

        await worksheetpage.clickFavorite();
        await worksheetpage.clickDone();
        await worksheetpage.clickDownload();

        //i need expect
    })
})


import {test, expect} from "@playwright/test";

import { BasePage } from "../pages/BasePage";
import { ParentPage } from "../pages/ParentPage";
import { TeacherPage } from "../pages/TeacherPage";
import { LearningPage } from "../pages/LearningPage";
import { BlogPage } from "../pages/BlogPage";

const url = require("../helper/config").url;
const { parentPage, teachersPage, learningPage, blogPage, mainPage } = require("../helper/config").selectors;

test.afterEach(async ({ page }, testInfo) => {
    console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);
  
    if (testInfo.status !== testInfo.expectedStatus)
      console.log(`Did not run as expected, ended up at ${page.url()}`);
});

test.beforeAll(async () => {
    console.log('Before page tests');
});
  
test.afterAll(async () => {
    console.log('After page tests');
});

test.describe('Check page url and title', () => {
    test('Main page test', async( {page} ) => {
        const homepage = new BasePage(page);

        await homepage.open(url);
        //check url
        const siteUrl = await homepage.getUrl();
        expect(siteUrl).toBe(url);
        //check title
        const title = await homepage.getInnerText(mainPage.title_tag);
        expect(title).toBe(mainPage.title);
    });

    test('Parent page test', async( {page} ) => {
        const parentpage = new ParentPage(page);

        await parentpage.open(url, parentPage.path);
        //check url
        const siteUrl = await parentpage.getUrl();
        expect(siteUrl).toBe(url + parentPage.path);
        //check title
        const title = await parentpage.getInnerText(parentPage.title_tag);
        expect(title).toBe(parentPage.title);
    });

    test('Teacher page test', async( {page} ) => {
        const teacherpage = new TeacherPage(page);

        await teacherpage.open(url, teachersPage.path);
        //check url
        const siteUrl = await teacherpage.getUrl();
        expect(siteUrl).toBe(url + teachersPage.path);
        //check title
        const title = await teacherpage.getInnerText(teachersPage.title_tag);
        expect(title).toBe(teachersPage.title);
    });

    
    test('Learning page test', async( {page} ) => {
        const learningpage = new LearningPage(page);

        await learningpage.open(url, learningPage.path);
        //check url
        const siteUrl = await learningpage.getUrl();
        expect(siteUrl).toBe(url + learningPage.path);
        //check title
        const title = await learningpage.getInnerText(learningPage.title_tag);
        expect(title).toBe(learningPage.title);
    });

    
    test('Storytime page test', async( {page} ) => {
        const blogpage = new BlogPage(page);

        await blogpage.open(url, blogPage.path);
        //check url
        const siteUrl = await blogpage.getUrl();
        expect(siteUrl).toBe(url + blogPage.path);
        //check title
        const title = await blogpage.getInnerText(blogPage.title_tag);
        expect(title).toBe(blogPage.title);
    });


});

test.describe('Learning tabs', () => {
    test('Check correct change tabs', async({page}) => {
        const learningpage = new LearningPage(page);
        await test.step('Check correct worksheet tab', async () => {
            await learningpage.open(url, learningPage.worksheet_tab.path);
            //check url
            const siteUrl = await learningpage.getUrl();
            expect(siteUrl).toBe(url + learningPage.worksheet_tab.path);
        });
        await test.step('Games tab', async () => {
            //click to games tab
            await learningpage.clickTab(learningPage.game_tab.tag);
            await learningpage.waitSelector(learningPage.game_tab.title_tag);
            //check title
            const title = await learningpage.getInnerText(learningPage.game_tab.title_tag);
            expect(title).toBe(learningPage.game_tab.text);
        });
        await test.step('Video tab', async () => {
            //click to videos tab
            await learningpage.clickTab(learningPage.video_tab.tag);
            await learningpage.waitSelector(learningPage.video_tab.title_tag);
            //check title
            const title = await learningpage.getInnerText(learningPage.video_tab.title_tag);
            expect(title).toBe(learningPage.video_tab.text);
        });        
    })
})

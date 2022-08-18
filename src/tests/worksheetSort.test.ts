import {test, expect} from "@playwright/test";

import { WorksheetFilter } from "../pages/WorksheetFilter";

const url = require("../helper/config").url;
const { learningPage } = require("../helper/config").selectors;
const { filters } = require("../helper/config").selectors;

test.afterEach(async ({ page }, testInfo) => {
    console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);
  
    if (testInfo.status !== testInfo.expectedStatus)
      console.log(`Did not run as expected, ended up at ${page.url()}`);
});

test.beforeEach(async ({page}) => {
    await page.goto(url + learningPage.worksheet_tab.path);
});
  
test.afterAll(async () => {
    console.log('After page tests');
});

test.describe('Check filters', () => {
    
    test('Learning page kindergarten grade test is correct filter on worksheet list', async( {page} ) => {
        const learningpage = new WorksheetFilter(page);
        //choose Kindergarten filter
        await learningpage.chooseKinderGrade();
        let title = await learningpage.getInnerText(filters.kindergarten.selector);
        expect(title).toBe(filters.kindergarten.text);
    });

    test('Learning page kindergarten grade test is correct filter on different page', async( {page} ) => {
        const learningpage = new WorksheetFilter(page);
        await learningpage.chooseKinderGrade();
        await learningpage.timeout(5000);
        await learningpage.clickCard();
        let urlWork = await learningpage.getUrl();
        expect(urlWork).toContain(filters.kindergarten.urlOne);
        let tag = await learningpage.getFirstTag();
        expect(tag).toBe(filters.kindergarten.name);
    });

});



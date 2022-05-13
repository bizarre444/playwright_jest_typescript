import {test, expect} from "@playwright/test";

import { BasePage } from "../pages/BasePage";
//import { HomePage } from "../pages/HomePage";

test ('First POM test', async({ page }) => {
    const homepage = new BasePage(page);

    await homepage.open('https://www.ka-stage.ml/');
    const url = await homepage.getUrl();

    expect(url).toBe("https://www.ka-stage.ml/");

    const title = await homepage.getTitle('.home-main-section__title');
    console.log(title);
    expect(title).toBe("With Kids Academy, All Eyes Are Glued on Learning!");
})

// test('basic test', async ({ page }) => {
//     await page.goto('https://www.ka-stage.ml/');
//     const title = await page.innerText(".home-main-section__title");
//     expect(title).toBe("With Kids Academy, All Eyes Are Glued on Learning!");
//   });
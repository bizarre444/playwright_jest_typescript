import {test, expect} from "@playwright/test";

import { BasePage } from "../pages/BasePage";
import { HomePage } from "../pages/HomePage";

test ('First POM test', async() => {
    const homepage = new HomePage(page);

    await homepage.open('https://www.ka-stage.ml/');
    const title = await homepage.getTitle(".home-main-section__title");

    expect(title).toBe("With Kids Academy, All Eyes Are Glued on Learning!");
})
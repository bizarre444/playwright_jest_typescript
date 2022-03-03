

describe(`Google Test Case`, () => {
    it("returns succeessful search", async () => {
        await page.goto("https://www.google.com/");

        //Click input[aria-label="Search"]
        await page.click('input[class="gLFyf gsfi"]');

        //Fill input[aria-label="Search"]
        await page.fill('input[class="gLFyf gsfi"]', "tesla");

        //Press Enter
        await page.press('input[class="gLFyf gsfi"]', "Enter");

        //Close page
        await page.close();
    });
})
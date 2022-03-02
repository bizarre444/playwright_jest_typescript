import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://www.ka-stage.ml/');
    await page.click('.button _header _ghost');
    await page.waitForSelector('.login');
    await page.fill('input[type="email"]', 'qa.parent2021+22091@gmail.com');
    await page.fill('input[type="password"]', '123456QA');
    await page.click('text=Log in');
    //save logged-in state to 'storageState.json'
    await page.context().storageState({path: 'storageState.json'});
    await browser.close();
}

export default globalSetup;
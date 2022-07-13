import { Locator, Page } from "playwright";

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open(url: string, path?: string) {
        if(typeof path == 'undefined') {
            await this.page.goto(url);
        } 
        else {
            await this.page.goto(url + path);
        }
    }

    async getInnerText(tag: string) {
        return await this.page.locator(tag).innerText();
    }

    async getUrl() {
        return this.page.url();
    }

    async waitSelector(selector: string) {
        await this.page.waitForSelector(selector);
    }

    async takeScreenshoot() {
        await this.page.screenshot({
            path: `./screenshots/${Date.now()}.png`,
            fullPage: true
        })
    }
    async clickWait(button: string) {
        await page.click(button);
        await this.page.waitForTimeout(1000);
    }

    async pause() {
        await this.page.pause();
    }

}
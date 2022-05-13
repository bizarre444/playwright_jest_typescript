import { Locator, Page } from "playwright";

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open(url: string) {
        await this.page.goto(url);
    }

    async getTitle(tag: string) {
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
            path: './screenshots/' + `(Math.floor(Math.random()) * 1000` + '.png',
            fullPage: true
        })
    }
}
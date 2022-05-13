import { Locator, Page } from "playwright";

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open(url: string, path?:  string) {
        await this.page.goto(url + path);
    }

    async getTitle(tag: string): Promise<string> {
        return await this.page.innerText(tag);
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
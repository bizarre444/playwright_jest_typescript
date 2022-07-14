import { BasePage } from "./BasePage";
import { Locator, Page } from "playwright";

export class WorksheetActions extends BasePage {
    readonly worksheetpage: Page;
    readonly allWorksheets: Locator;

    constructor(page: Page) {
        super(page);
        this.worksheetpage = page;
        this.allWorksheets = page.locator('.activity-item');
    }

    async hoverCart(arg: string) {
        await this.worksheetpage.locator(arg).hover();
    }

    async clickFavorite() {
        let slug = await this.getRandomSlug();
        let favorite = await this.getFavoriteLocator(slug);
        let locator = await this.getLocator(slug);
        await this.hoverCart(locator);
        await this.page.locator(favorite).click();
    }

    async clickDone() {
        let slug = await this.getRandomSlug();
        let done = await this.getDoneLocator(slug);
        let locator = await this.getLocator(slug);
        await this.hoverCart(locator);
        await this.page.locator(done).click();
    }

    async clickDownload() {
        let slug = await this.getRandomSlug();
        let download = await this.getDownloadLocator(slug);
        let locator = await this.getLocator(slug);
        await this.hoverCart(locator);
        await this.page.locator(download).click();
    }

    async getRandomSlug() {
        let allSlugs: any = await this.getAllWorksheets();
        let countSlugs: number = await allSlugs.length;
        let slug: string = await allSlugs[Math.floor(Math.random()*countSlugs)];
        console.log(slug);
        return slug;
    }

    async getAllWorksheets() {
        const arraySlug: any = await this.worksheetpage.evaluate(() => Array.from(document.querySelectorAll('#worksheets .activity-item')).map(el => el.getAttribute('data-slug')));
        return arraySlug;
    }

    async getFavoriteLocator(slug: string) {
        let favLocator: string = '[data-slug="' + slug + '"] >> [data-selector="learning-resources-mark-favorite"]';
        console.log(favLocator);
        return favLocator;
    }

    async getDoneLocator(slug: string) {
        let doneLocator: string = '[data-slug="' + slug + '"] >> [data-selector="learning-resources-mark-done"]';
        console.log(doneLocator);
        return doneLocator;
    }

    async getDownloadLocator(slug: string) {
        let downloadLocator: string = '[data-slug="' + slug + '"] >> [data-selector="learning-resources-download"]';
        console.log(downloadLocator);
        return downloadLocator;
    }

    async getLocator(slug: string) {
        let locator: string = '[data-slug="' + slug + '"]';
        return locator;
    }
    
}
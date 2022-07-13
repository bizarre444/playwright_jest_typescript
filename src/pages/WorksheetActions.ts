import { BasePage } from "./BasePage";
import { Locator, Page } from "playwright";

export class WorksheetActions extends BasePage {
    readonly worksheetpage: Page;
    readonly favorite: Locator;
    readonly done: Locator;
    readonly download: Locator;
    readonly allWorksheets: Locator;

    constructor(page: Page) {
        super(page);
        this.worksheetpage = page;
        this.favorite = page.locator('[data-slug="transparent-translucent-or-opaque"] >> [data-selector="learning-resources-mark-favorite"]'),
        this.done = page.locator('[data-slug="transparent-translucent-or-opaque"] >> [data-selector="learning-resources-mark-done"]');
        this.download = page.locator('[data-slug="transparent-translucent-or-opaque"] >> [data-selector="learning-resources-download"]');
        this.allWorksheets = page.locator('.activity-item');
    }

    async hoverCart(arg: string) {
        await this.worksheetpage.locator(arg).hover();
    }

    async clickFavorite() {
        await this.favorite.click();
    }

    async clickDone() {
        await this.done.click();
    }

    async clickDownload() {
        await this.download.click();
    }

    async getRandomSlug() {
        let allSlugs: any = await this.getAllWorksheets();
        let countSlugs: number = await allSlugs.length;
        let slug: string = allSlugs[Math.floor(Math.random()*countSlugs)];
        return slug;
    }

    async getAllWorksheets() {
        const arraySlug: any = await this.worksheetpage.evaluate(() => Array.from(document.querySelectorAll('#worksheets .activity-item')).map(el => el.getAttribute('data-slug')));
        //console.log(arraySlug);
        return arraySlug;
    }

}
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
        let slug = 'lalala';
        return slug;
    }

    async getAllWorksheets() {
        //let arrayWork = await this.allWorksheets.allTextContents();
        // let el_attrs = await this.allWorksheets.evaluate("el => el.getAttributeNames()")
        // console.log(el_attrs);

        //const href = await this.worksheetpage.$eval('#worksheets .activity-item', (el) => el.getAttribute('data-slug'))
        //console.log(href);

        const arraySlug: any = await this.worksheetpage.evaluate(() => Array.from(document.querySelectorAll('#worksheets .activity-item')).map(el => el.getAttribute('data-slug')));
        console.log(arraySlug);
    }

}
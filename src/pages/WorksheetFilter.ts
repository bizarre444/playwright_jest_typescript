import { BasePage } from "./BasePage";
import { Locator, Page } from "playwright";
import { expect} from "@playwright/test";

export class WorksheetFilter extends BasePage {
    readonly worksheetpage: Page;
    readonly kinderGrade: Locator;
    readonly titleKinder: string;

    constructor(page: Page) {
        super(page);
        this.worksheetpage = page;
        this.kinderGrade = page.locator('[href="/printable-worksheets/kindergarten/"]');
        this.titleKinder = "h2.learning-resources-description-left-title";
    }

    async chooseKinderGrade() {
        await this.kinderGrade.click();
    }

    async getRandomId() {
        let allIDs: any = await this.getAllWorksheets();
        let countIDs: number = await allIDs.length;
        let id: string = await allIDs[Math.floor(Math.random()*countIDs)];
        //console.log(id);
        return id;
    }

    async getAllWorksheets() {
        const arrayID: any = await this.worksheetpage.evaluate(() => Array.from(document.querySelectorAll('#worksheets .activity-item')).map(el => el.getAttribute('data-id')));
        //console.log(arrayID);
        return arrayID;
    }

    async getLocator(id: string) {
        let locator: string = '[data-id="' + id + '"]';
        //console.log(locator);
        return locator;
    }

    async clickCard() {
        let id = await this.getRandomId();
        let locatorID = await this.getLocator(id);
        await this.hoverCart(locatorID);
        await this.worksheetpage.locator(locatorID).click();
    }

    async hoverCart(arg: string) {
        await this.worksheetpage.locator(arg).hover();
    }

    async getFirstTag() {
        const tag = await this.worksheetpage.locator(".learning-activity__tags-item").first().innerText();
        // console.log(tag);
        return tag;
    }
    
}
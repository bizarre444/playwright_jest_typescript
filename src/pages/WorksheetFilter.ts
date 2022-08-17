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

    async openWorksheetPage() {
        //TODO
    }
    
}
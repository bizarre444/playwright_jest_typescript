import { Locator, Page } from "playwright";
import { BasePage } from "./BasePage";

export class LearningPage extends BasePage {
    readonly learningpage: Page;
    readonly worksheetTab: Locator;
    readonly gameTab: Locator;
    readonly videoTab: Locator;
    readonly lessonTab: Locator;
    readonly tabTitle: string;
    readonly tabTitleLesson: string;

    constructor(page: Page) {
        super(page);
        this.learningpage = page;
        this.worksheetTab = page.locator("text='Printable worksheets'");
        this.gameTab = page.locator("text='Learning games'");
        this.videoTab = page.locator("text='Educational videos'");
        this.lessonTab = page.locator("li.learning-resources-tabs__item:nth-child(4)");
        this.tabTitle = ".learning-resources__primary-title";
        this.tabTitleLesson = "[data-selector*='lessons-title-default']";
    }

    async clickTabGame() {
        await this.gameTab.click();
        await this.learningpage.waitForSelector(this.tabTitle);
    }

    async clickTabVideo() {
        await this.videoTab.click();
        await this.learningpage.waitForSelector(this.tabTitle);
    }

    async clickTabLesson() {
        await this.lessonTab.click();
        await this.learningpage.waitForSelector(this.tabTitleLesson);
    }

    async clickTabWorksheet() {
        await this.worksheetTab.click();
        await this.learningpage.waitForSelector(this.tabTitle);
    }

}
import { BasePage } from "./BasePage";
import { Locator, Page } from "playwright";

export class RegistrationChess extends BasePage {
    readonly regpage: Page;
    readonly signupbtn: Locator;
    readonly img: string;
    readonly parentbtn: Locator;
    readonly firsttext: string;
    // readonly subjectbtn: Locator;
    // readonly nextbtn: Locator;
    // readonly learningbtn: Locator;

    constructor(page: Page) {
        super(page);
        this.regpage = page;
        this.signupbtn = page.locator('.chess-landing-main__content-left-btn');
        this.img = '.sign-up-chess__img';
        this.parentbtn = page.locator('[data-selector="sign-up-chess-parent-btn"]');
        this.firsttext = '.sign-up-chess__quote-text';
        // this.subjectbtn = page.locator('text=English');
        // this.nextbtn = page.locator('text=Next');
        // this.learningbtn = page.locator('text="Start learning!"');
    }

    async chessFlowFirst() {
        await this.signupbtn.click();
        await this.page.waitForSelector(this.img);
        await this.parentbtn.click();
        await this.page.waitForSelector(this.firsttext);
    }
    
}
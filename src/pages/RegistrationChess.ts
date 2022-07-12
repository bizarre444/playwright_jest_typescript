import { BasePage } from "./BasePage";
import { Locator, Page } from "playwright";

export class RegistrationChess extends BasePage {
    readonly regpage: Page;
    readonly signupbtn: Locator;
    readonly img: string;
    readonly parentbtn: Locator;
    readonly firsttext: string;
    readonly nameInput: Locator;
    readonly avatar: Locator;
    readonly grade: Locator;
    readonly nextbtn: Locator;
    readonly questone: string;
    readonly goodanswer: Locator;
    readonly next2btn: Locator;
    readonly good2answer: Locator;
    readonly next3btn: Locator;
    readonly  success: string;

    constructor(page: Page) {
        super(page);
        this.regpage = page;
        this.signupbtn = page.locator('.chess-landing-main__content-left-btn');
        this.img = '.sign-up-chess__img';
        this.parentbtn = page.locator('[data-selector="sign-up-chess-parent-btn"]');
        this.firsttext = '.sign-up-chess__quote-text';
        this.nameInput = page.locator('.sign-up-chess__name-input');
        this.avatar = page.locator('[data-src="https://static.ka-stage.ml/images/kid-profile-create-page/avatars/child_avatar_6.svg"]');
        this.grade = page.locator('text="Grade K"');
        this.nextbtn = page.locator('[data-selector="sign-up-chess-go-to-chess-level-step"]');
        this.questone = ('[data-selector="chess-level-question-step-1"]');
        //need fix!!! -> goodanswer
        this.goodanswer = page.locator('input[id="good-level"]');
        this.next2btn = page.locator('[data-selector="chess-question-1-step-next-btn"]');
        this.good2answer = page.locator('[id="know-knight"]');
        this.next3btn = page.locator('[data-selector="chess-question-2-step-next-btn"]');
        this.success = '[data-selector="chess-last-step-good-text"]';
    }

    async chessFlowFirst() {
        await this.signupbtn.click();
        await this.page.waitForSelector(this.img);
        await this.parentbtn.click();
        await this.page.waitForSelector(this.firsttext);
    }
    async chessFlowSecond() {
        await this.nameInput.type("Kira", { delay: 400 });
        await this.avatar.click();
        await this.grade.click();
        await this.page.screenshot({
            path: `./screenshots/reg_chess_choosen.png`,
            fullPage: true
        });
        await this.nextbtn.click();
        await this.page.waitForSelector(this.questone);
    }

    async chessFlowThird() {
        await this.goodanswer.click();
        await this.page.waitForTimeout(1000);
        await this.next2btn.click();
        await this.page.waitForNavigation();
        await this.good2answer.click();
        await this.page.waitForTimeout(1000);
        await this.next3btn.click();
        await this.page.waitForSelector(this.success);
    }

    
}
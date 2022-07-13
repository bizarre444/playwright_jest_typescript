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
}
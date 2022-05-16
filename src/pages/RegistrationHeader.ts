import { BasePage } from "./BasePage";
import { Locator, Page } from "playwright";

export class RegistrationHeader extends BasePage {
    readonly regpage: Page;
    readonly signup: Locator;
    readonly create: Locator;
    readonly startbtn: Locator;
    readonly gradebtn: Locator;
    readonly subjectbtn: Locator;
    readonly nextbtn: Locator;
    readonly learningbtn: Locator;

    constructor(page: Page) {
        super(page);
        this.regpage = page;
        this.signup = page.locator('#bs-example-navbar-collapse-1 > ul > li.account-menu._bottom > div > a');
        this.create = page.locator('.sign-up-page');
        this.startbtn = page.locator('//*[@data-selector="sign-up-parent-btn"]');
        this.gradebtn = page.locator('//*[@data-value="Grade 1"]');
        this.subjectbtn = page.locator('text=English');
        this.nextbtn = page.locator('text=Next');
        this.learningbtn = page.locator('text="Start learning!"');
    }

    async clickSignUp() {
        await this.signup.click();
        await this.create.isVisible();
    }

    async regSteps() {
        await this.startbtn.click();
        await this.page.waitForTimeout(3000);
        await this.gradebtn.click();
        await this.page.waitForTimeout(3000);
        await this.subjectbtn.click();
        await this.nextbtn.click();
        await this.learningbtn.click();
        await this.page.waitForTimeout(3000);
    }
}
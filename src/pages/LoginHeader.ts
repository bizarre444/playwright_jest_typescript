import { BasePage } from "./BasePage";
import { Locator, Page } from "playwright";

export class LoginHeader extends BasePage {
    readonly loginpage: Page;
    readonly openPopup: Locator;
    readonly emailTag: Locator;
    readonly passwordTag: Locator;
    readonly nextButton: Locator;

    constructor(page: Page) {
        super(page);
        this.loginpage = page;
        this.openPopup = page.locator('(//button[@type="button"][normalize-space()="Log in"])[2]'),
        this.emailTag = page.locator('#family > form > div:nth-child(2) > input');
        this.passwordTag = page.locator('#family > form > div:nth-child(3) > input');
        this.nextButton = page.locator('#family > form > div.login__submit-container.text-center > button');
    }

    async checkPopupVisible() {
        await this.openPopup.click();
        await this.page.waitForTimeout(1000);
    }

    async login(email: string, passoword: string) {
        await this.emailTag.click();
        await this.emailTag.fill(email);
        await this.passwordTag.click();
        await this.passwordTag.fill(passoword);
        await this.nextButton.click();
        await this.page.waitForTimeout(5000);
    }
}
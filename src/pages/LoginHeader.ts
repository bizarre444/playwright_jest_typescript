import { BasePage } from "./BasePage";
import { Locator, Page } from "playwright";

export class LoginHeader extends BasePage {
    readonly loginpage: Page
    readonly openPopup: Locator;
    readonly emailTag: Locator;
    readonly passwordTag: Locator;
    readonly nextButton: Locator;
    readonly titleTag: Locator;

    constructor(page: Page) {
        super(page);
        this.loginpage = page;
        this.openPopup = page.locator('#bs-example-navbar-collapse-1 > ul > li.account-menu._bottom > div > button'),
        this.titleTag = page.locator('#logInModal > div > div > div.modal-header.text-center.custom-modal__header > div');
        this.emailTag = page.locator('#family > form > div:nth-child(2) > input');
        this.passwordTag = page.locator('#family > form > div:nth-child(3) > input');
        this.nextButton = page.locator('#family > form > div.login__submit-container.text-center > button');
    }

    async checkPopupVisible() {
        await this.openPopup.click();
        await page.waitForTimeout(1000);
        const title = this.titleTag.innerText();
        expect(title).toContain('Log in');
    }

    async login(email: string, passoword: string) {
        await this.emailTag.click();
        await this.emailTag.fill(email);
        await this.passwordTag.click();
        await this.passwordTag.fill(passoword);
    }
}
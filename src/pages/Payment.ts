import { BasePage } from "./BasePage";
import { Locator, Page } from "playwright";

export class PaymentPage extends BasePage {
    readonly paymentpage: Page;
    readonly firstPlan: Locator;
    readonly secondPlan: Locator;
    readonly submitBtn: Locator;
    readonly paymentContainer: Locator;
    readonly blockCoupon: Locator;
    readonly inputCoupon: Locator;
    readonly msgCoupon: Locator;

    constructor(page: Page) {
        super(page);
        this.paymentpage = page;
        this.firstPlan = page.locator('[data-selector="subscription-plan-input-wrapper"]').first();
        this.secondPlan = page.locator('//*[@id="1-step-sample"]/ul/li[2]/div');
        this.submitBtn = page.locator('.subscription-plans-sample__controls-btn');
        this.paymentContainer = page.locator('.subscription-plans-sample__payment-container');
        this.blockCoupon = page.locator('.subscription-plans-sample__coupon-link');
        this.inputCoupon = page.locator('//*[@id="1-step-sample"]//*[@data-selector="enter-coupon-input"]');
        this.msgCoupon = page.locator('.subscription-plans-sample__coupon-message');
    }

    async chooseSecondPlan() {
        await this.page.waitForTimeout(2000);
        await this.secondPlan.click();
        await this.submitBtn.click();
        await this.page.waitForTimeout(5000);
        await this.paymentContainer.isVisible();
    }

    async chooseFirstPlan() {
        await this.page.waitForTimeout(2000);
        await this.firstPlan.click();
        await this.submitBtn.click();
        await this.page.waitForTimeout(5000);
        await this.paymentContainer.isVisible();
    }

    async chooseCoupon(coup: string) {
        await this.blockCoupon.click();
        await this.inputCoupon.click();
        await this.inputCoupon.fill(coup);
        await this.inputCoupon.press('Enter');
        await this.msgCoupon.isVisible();
    }
}
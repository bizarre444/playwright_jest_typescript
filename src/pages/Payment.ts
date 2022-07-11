import { BasePage } from "./BasePage";
import { Locator, Page } from "playwright";
import { Selectors } from "@playwright/test";

export class PaymentPage extends BasePage {
    readonly paymentpage: Page;
    readonly firstPlan: Locator;
    readonly firstPlanSelector: string;
    readonly secondPlan: Locator;
    readonly secondPlanSelector: string;
    readonly submitBtn: Locator;
    readonly totalSum: String;
    readonly paymentContainer: Locator;
    readonly blockCoupon: Locator;
    readonly inputCoupon: Locator;
    readonly msgCoupon: Locator;

    constructor(page: Page) {
        super(page);
        this.paymentpage = page;
        this.firstPlanSelector = '[data-selector="subscription-plan-input-wrapper"]';
        this.firstPlan = page.locator(this.firstPlanSelector).first();
        this.secondPlanSelector = '//*[@id="1-step-sample"]/ul/li[2]/div';
        this.secondPlan = page.locator(this.secondPlanSelector);
        this.submitBtn = page.locator('.subscription-plans-sample__controls-btn');
        this.totalSum = '.subscription-plans-sample__payment-row';
        this.paymentContainer = page.locator('.subscription-plans-sample__payment-container');
        this.blockCoupon = page.locator('.subscription-plans-sample__coupon-link');
        this.inputCoupon = page.locator('//*[@id="1-step-sample"]//*[@data-selector="enter-coupon-input"]');
        this.msgCoupon = page.locator('.subscription-plans-sample__coupon-message');
    }

    async chooseSecondPlan() {
        await this.page.waitForSelector(this.secondPlanSelector);
        await this.secondPlan.click();
        await this.submitBtn.click();
        await this.page.waitForLoadState('networkidle');
        await this.paymentContainer.isVisible();
    }

    async chooseFirstPlan() {
        await this.page.waitForSelector(this.firstPlanSelector);
        await this.firstPlan.click();
        await this.submitBtn.click();
        await this.page.waitForLoadState('networkidle');
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
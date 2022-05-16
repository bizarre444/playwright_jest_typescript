import { Page } from "playwright";
import { BasePage } from "./BasePage";

export class LearningPage extends BasePage {
    async clickTab(locator: string) {
        await this.page.click(locator);
    }

}
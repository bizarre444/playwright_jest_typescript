import { Page } from "playwright";
import { BasePage } from "./BasePage";

export class ParentPage extends BasePage {
    async visit(url: string, path: string) {
        await this.page.goto(url + path);
    }

}
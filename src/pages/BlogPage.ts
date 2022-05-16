import { Page } from "playwright";
import { BasePage } from "./BasePage";

export class BlogPage extends BasePage {
    async visit(url: string, path: string) {
        await this.page.goto(url + path);
    }

}
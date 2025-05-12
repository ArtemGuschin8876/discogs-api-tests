import { Locator, Page } from "@playwright/test";
import { Environment } from "../../env";


export type LocatorMap = {
    [key: string]: Locator;
}

export abstract class BasePage {
    protected userName: string;
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getUserName(): string {
        return `${Environment.USER_NAME}`
    }

    async gotoByUrl(url: string) {
        await this.page.goto(url, {waitUntil: 'domcontentloaded'});
    }

  
}
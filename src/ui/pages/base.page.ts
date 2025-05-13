import { Locator, Page } from "@playwright/test";


export type LocatorMap = {
    [key: string]: Locator;
}

export abstract class BasePage {

    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    

    async gotoByUrl(url: string) {
        await this.page.goto(url, {waitUntil: 'domcontentloaded'});
    }

  
}
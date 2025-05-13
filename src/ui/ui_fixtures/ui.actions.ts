import { test as base } from '@playwright/test';
import { PageManager } from '../pages/page.manager';

export const test = base.extend<UIFixtures>({
  
    acceptCookie: async({page}, use) => {
        const pages = new PageManager(page)
        await pages.mainPage.acceptCookie();
        use(undefined)
    },  
  
});

export const expect = test.expect;


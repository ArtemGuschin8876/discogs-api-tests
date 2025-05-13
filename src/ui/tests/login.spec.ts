import { test, expect } from '../ui_fixtures/ui.data';
import { PageManager } from "../pages/page.manager";


test.describe('Check login with correct and incorrect credentials', async () => {

    test('Login flow with valid credentials', async ({page, uiUserName}) => {
        const pages = new PageManager(page);

        await pages.mainPage.goto();
        await pages.mainPage.acceptCookie();
        await pages.mainPage.clickOnLoginButtonAndVerifyRedirect();

        await pages.loginPage.enterLoginCredentialsAndClickContinue('positive');

        await pages.mainPage.verifyUserAfterLogin(uiUserName);
    });

    test('Login flow with unknown credentials', async({pageManager}) => {

        await pageManager.loginPage.goto();
        await pageManager.loginPage.enterLoginCredentialsAndClickContinue('negative');
        await pageManager.loginPage.checkErrorMessage();

    })
})




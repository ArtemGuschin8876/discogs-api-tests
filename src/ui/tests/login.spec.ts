import { test, expect } from '../ui_fixtures/ui.fixtures';
import { PageManager } from "../pages/page.manager";


test('UI: Login flow with valid credentials', async ({page, uiUserName}) => {
    const pages = new PageManager(page);

    await pages.mainPage.goto();
    await pages.mainPage.acceptCookie();
    await pages.mainPage.clickOnLoginButtonAndVerifyRedirect();

    await pages.loginPage.enterLoginCredentialsAndClickContinue();

    await pages.mainPage.verifyUserAfterLogin(uiUserName);
})
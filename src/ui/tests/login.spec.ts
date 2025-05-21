import { test } from '../../fixtures/ui.fixtures/ui.data';

test.use({ storageState: { cookies: [], origins: [] } });

test.describe('Check login with correct and incorrect credentials', async () => {
  test.beforeEach(async ({ pageManager }) => {
    const p = await pageManager.loginPage.goto();
    console.log(p);
  });

  test('Login flow with valid credentials', async ({ pageManager, uiUserName }) => {
    await pageManager.loginPage.enterLoginCredentialsAndClickContinue('positive');
    await pageManager.mainPage.verifyUserAfterLogin(uiUserName);
  });

  test('Login flow with unknown credentials', async ({ pageManager }) => {
    await pageManager.loginPage.enterLoginCredentialsAndClickContinue('negative');
    await pageManager.loginPage.checkErrorMessage();
  });
});

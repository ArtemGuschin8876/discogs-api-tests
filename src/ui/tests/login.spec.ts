import { test } from '../../fixtures/ui.fixtures/ui.data';
import { FLAGS } from '../../utils/constants/flags';
import { TestTags } from '../../utils/constants/tags';

test.use({ storageState: { cookies: [], origins: [] } });

test.describe('Check login with correct and incorrect credentials', async () => {
  test.beforeEach(async ({ pageManager }) => {
    await pageManager.loginPage.goto();
  });

  test(
    'Login flow with valid credentials',
    { tag: [TestTags.UI, TestTags.POSITIVE] },
    async ({ pageManager, uiUserName }) => {
      await pageManager.loginPage.enterLoginCredentialsAndClickContinue(FLAGS.POSITIVE);
      await pageManager.mainPage.verifyUserAfterLogin(uiUserName);
    }
  );

  test(
    'Login flow with unknown credentials',
    { tag: [TestTags.UI, TestTags.NEGATIVE] },
    async ({ pageManager }) => {
      await pageManager.loginPage.enterLoginCredentialsAndClickContinue(FLAGS.NEGATIVE);
      await pageManager.loginPage.checkErrorMessage();
    }
  );
});

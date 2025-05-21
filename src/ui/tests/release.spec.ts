import { test } from '../../fixtures/fixtures';
import { PageManager } from '../pages/page.manager';

test.describe('Release page tests', async () => {
  test.beforeEach(async ({ pageManager, randomReleaseID }) => {
    await pageManager.releasePage.goto(randomReleaseID);
    await pageManager.releasePage.acceptCookie();
  });

  test('Structure release test', async ({ pageManager, randomFullRelease }) => {
    await pageManager.releasePage.verifyReleasePage();
    await pageManager.releasePage.verifyReleaseStructure(randomFullRelease);
  });

  test('Click to add collection button and check notification', async ({ pageManager }) => {
    await pageManager.releasePage.addReleaseToCollectionAndVerifyNotification();
  });

  test('Click remove on the notification and check hidden notification', async ({
    pageManager,
  }) => {
    await pageManager.releasePage.addReleaseToCollectionAndVerifyNotification();
    await pageManager.releasePage.removeFromCollectionAndVerifyTable();
  });
});

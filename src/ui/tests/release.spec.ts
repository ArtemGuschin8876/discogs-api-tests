import { test } from '../../fixtures/fixtures';

test.describe('Release - UI', async () => {
  test('Structure releasea', async ({ pageManager, randomReleaseID, randomFullRelease }) => {
    await pageManager.releasePage.goto(randomReleaseID);
    await pageManager.releasePage.verifyReleasePage();
    await pageManager.releasePage.verifyReleaseStructure(randomFullRelease);
  });

  test('Click to add collection button and check table', async ({
    pageManager,
    randomReleaseID
  }) => {
    await pageManager.releasePage.goto(randomReleaseID);
    await pageManager.releasePage.acceptCookie();
    await pageManager.releasePage.clickToAddToCollectionButtonAndVerifyTable();
  });

  test('Click remove on the table and check hidden table', async ({
    pageManager,
    randomReleaseID
  }) => {
    await pageManager.releasePage.goto(randomReleaseID);
    await pageManager.releasePage.acceptCookie();
    await pageManager.releasePage.clickToAddToCollectionButtonAndVerifyTable();
    await pageManager.releasePage.removeFromCollectionAndVeridyTable();
  });
});

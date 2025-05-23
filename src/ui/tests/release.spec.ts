import { test } from '../../fixtures/fixtures';
import { TestTags } from '../../utils/constants/tags';

test.describe('Release page tests', async () => {
  test.beforeEach(async ({ pageManager, randomReleaseID }) => {
    await pageManager.releasePage.goto(randomReleaseID);
    await pageManager.releasePage.acceptCookie();
  });

  test(
    'Structure release test',
    { tag: [TestTags.UI, TestTags.POSITIVE] },
    async ({ pageManager, randomFullRelease }) => {
      await pageManager.releasePage.verifyReleasePage();
      await pageManager.releasePage.verifyReleaseStructure(randomFullRelease);
    }
  );

  test(
    'Click to add collection button check notification and remove it',
    { tag: [TestTags.UI, TestTags.POSITIVE] },
    async ({ pageManager }) => {
      await pageManager.releasePage.clearCollectionTableIfExists();
      await pageManager.releasePage.addReleaseToCollectionAndVerifyNotification();
      await pageManager.releasePage.removeFromCollectionAndVerifyTable();
    }
  );
});

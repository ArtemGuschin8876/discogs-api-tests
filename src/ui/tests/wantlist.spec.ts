import { test } from '../../fixtures/ui.fixtures/ui.data';

test.describe('Wantlist', async () => {
  test('Checking the display of the Wantlist page for an authorized user', async ({
    pageManager
  }) => {
    await pageManager.wantlistPage.goto();
    await pageManager.wantlistPage.checkWantlistPageTitle();
    // await pageManager.wantlistPage.verifyAllReleasesStructure();
  });
});

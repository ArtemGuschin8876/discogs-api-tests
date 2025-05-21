# Test info

- Name: Release - UI >> Structure release
- Location: C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\tests\release.spec.ts:4:7

# Error details

```
Error: Error reading storage state from state.json:
ENOENT: no such file or directory, open 'C:\Users\Artemka\pw-learn\discogs-api-tests\state.json'
```

# Test source

```ts
   1 | import { test } from '../../fixtures/fixtures';
   2 |
   3 | test.describe('Release - UI', async () => {
>  4 |   test('Structure release', async ({ pageManager, randomReleaseID, randomFullRelease }) => {
     |       ^ Error: Error reading storage state from state.json:
   5 |     await pageManager.releasePage.goto(randomReleaseID);
   6 |     await pageManager.releasePage.acceptCookie();
   7 |     await pageManager.releasePage.verifyReleasePage();
   8 |     await pageManager.releasePage.verifyReleaseStructure(randomFullRelease);
   9 |   });
  10 |
  11 |   test('Click to add collection button and check table', async ({
  12 |     pageManager,
  13 |     randomReleaseID
  14 |   }) => {
  15 |     await pageManager.releasePage.goto(randomReleaseID);
  16 |     await pageManager.releasePage.acceptCookie();
  17 |     await pageManager.releasePage.addReleaseToCollectionAndVerifyNotification();
  18 |   });
  19 |
  20 |   test('Click remove on the table and check hidden table', async ({
  21 |     pageManager,
  22 |     randomReleaseID
  23 |   }) => {
  24 |     await pageManager.releasePage.goto(randomReleaseID);
  25 |     await pageManager.releasePage.acceptCookie();
  26 |     await pageManager.releasePage.addReleaseToCollectionAndVerifyNotification();
  27 |     await pageManager.releasePage.removeFromCollectionAndVerifyTable();
  28 |   });
  29 | });
  30 |
```
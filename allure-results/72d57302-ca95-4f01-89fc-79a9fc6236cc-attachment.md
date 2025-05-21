# Test info

- Name: Wantlist >> Checking the display of the Wantlist page for an authorized user
- Location: C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\tests\wantlist.spec.ts:4:7

# Error details

```
Error: Error reading storage state from state.json:
ENOENT: no such file or directory, open 'C:\Users\Artemka\pw-learn\discogs-api-tests\state.json'
```

# Test source

```ts
   1 | import { test } from '../../fixtures/ui.fixtures/ui.data';
   2 |
   3 | test.describe('Wantlist', async () => {
>  4 |   test('Checking the display of the Wantlist page for an authorized user', async ({
     |       ^ Error: Error reading storage state from state.json:
   5 |     pageManager
   6 |   }) => {
   7 |     await pageManager.wantlistPage.goto();
   8 |     await pageManager.wantlistPage.checkWantlistPageTitle();
   9 |     // await pageManager.wantlistPage.verifyAllReleasesStructure();
  10 |   });
  11 | });
  12 |
```
# Test info

- Name: Release - UI >> Click to add collection button and check table
- Location: C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\tests\release.spec.ts:11:7

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('button').filter({ hasText: 'Add to Collection' })
    - locator resolved to <button disabled type="button" class="_button_yjcsc_1 button_PsVhv _dense_yjcsc_54 _notHasTextNode_yjcsc_32 _notHasTextNodeFirst_yjcsc_32 _notHasTextNodeLast_yjcsc_37 _secondary_yjcsc_60">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is not enabled
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="onetrust-pc-dark-filter ot-fade-in"></div> from <div data-nosnippet="true" id="onetrust-consent-sdk">…</div> subtree intercepts pointer events
  7 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="onetrust-pc-dark-filter ot-fade-in"></div> from <div data-nosnippet="true" id="onetrust-consent-sdk">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms

    at ReleasePage.addReleaseToCollectionAndVerifyNotification (C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\pages\release.page.ts:71:40)
    at C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\tests\release.spec.ts:16:35
```

# Test source

```ts
   1 | import { expect, Page } from '@playwright/test';
   2 | import { Environment } from '../../env';
   3 | import { Endpoints } from '../../utils/constants/endpoints';
   4 | import { BasePage } from './base.page';
   5 | import { ReleaseResponse } from '../../models/api.models/release.response';
   6 | import { UIDataHelper } from '../../utils/ui.utils/ui.data.helper';
   7 | import { th } from '@faker-js/faker/.';
   8 |
   9 | export class ReleasePage extends BasePage {
  10 |   
  11 |   private url = `${Environment.BASE_UI_URL}${Endpoints.RELEASE}`
  12 |
  13 |   private buttonsText = {
  14 |     addToCollectionText: 'Add to Collection'
  15 |   };
  16 |
  17 |   private pageElements = {
  18 |     blockTrackInfo: this.page.locator('.body_utiDG'),
  19 |     trackList: this.page.locator('#release-tracklist'),
  20 |     releaseStats: this.page.locator('#release-stats'),
  21 |     inCollectionTable: this.page.locator('.box_PFmyl')
  22 |   };
  23 |
  24 |   private buttons = {
  25 |     addToCollection: this.page.locator('button', { hasText: this.buttonsText.addToCollectionText }),
  26 |     removeButton: this.page.locator('button', { hasText: 'Remove' })
  27 |   };
  28 |
  29 |   private releaseElements = {
  30 |     releaseTitle: this.page.locator('h1.title_Brnd1'),
  31 |     releaseArtist: this.page.locator('.link_PKPcS').first(),
  32 |     releaseLabel: this.page.locator('.table_c5ftk tr:nth-child(1) td'),
  33 |     releaseFormat: this.page.locator('.table_c5ftk tr:nth-child(2) td'),
  34 |     releaseCountry: this.page.locator('.table_c5ftk tr:nth-child(3) td'),
  35 |     releaseYear: this.page.locator('.table_c5ftk tr:nth-child(4) td'),
  36 |     releaseGenre: this.page.locator('.table_c5ftk tr:nth-child(5) td'),
  37 |     releaseStyle: this.page.locator('.table_c5ftk tr:nth-child(6) td')
  38 |   };
  39 |
  40 |   constructor(page: Page) {
  41 |     super(page);
  42 |
  43 |   }
  44 |
  45 |   async goto(releaseID: number) {
  46 |     await this.gotoByUrl(`${this.url}${releaseID}`);
  47 |   }
  48 |
  49 |   async verifyReleasePage() {
  50 |     expect(this.pageElements.blockTrackInfo).toBeVisible();
  51 |     expect(this.pageElements.trackList).toBeVisible();
  52 |     expect(this.pageElements.releaseStats).toBeVisible();
  53 |   }
  54 |
  55 |   async verifyReleaseStructure(release: ReleaseResponse) {
  56 |     const info = UIDataHelper.convertReleaseInfo(release);
  57 |
  58 |     expect.soft(this.releaseElements.releaseTitle).toContainText(info.title);
  59 |     expect.soft(this.releaseElements.releaseArtist).toContainText(info.artist);
  60 |     expect.soft(this.releaseElements.releaseLabel).toContainText(info.label);
  61 |     for (const part of info.formatParts) {
  62 |       await expect.soft(this.releaseElements.releaseFormat).toContainText(part);
  63 |     }
  64 |     expect.soft(this.releaseElements.releaseCountry).toContainText(info.country);
  65 |     expect.soft(this.releaseElements.releaseYear).toContainText(info.year);
  66 |     expect.soft(this.releaseElements.releaseGenre).toContainText(info.genre);
  67 |     expect.soft(this.releaseElements.releaseStyle).toContainText(info.style);
  68 |   }
  69 |
  70 |   async addReleaseToCollectionAndVerifyNotification() {
> 71 |     await this.buttons.addToCollection.click();
     |                                        ^ Error: locator.click: Target page, context or browser has been closed
  72 |     expect(this.pageElements.inCollectionTable).toBeVisible();
  73 |   }
  74 |
  75 |   async removeFromCollectionAndVerifyTable() {
  76 |     await this.buttons.removeButton.click();
  77 |     expect(this.pageElements.inCollectionTable).toBeHidden();
  78 |   }
  79 | }
  80 |
```
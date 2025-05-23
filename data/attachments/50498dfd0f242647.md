# Test info

- Name: Release page tests >> Structure release test
- Location: C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\tests\release.spec.ts:11:7

# Error details

```
Error: expect(locator).toContainText(expected)

Locator: locator('.link_PKPcS').first()
Expected string: "ポルノグラフィティ"
Received string: "PornoGraffitti*"
Call log:
  - expect.soft.toContainText with timeout 5000ms
  - waiting for locator('.link_PKPcS').first()
    4 × locator resolved to <span class="link_PKPcS">…</span>
      - unexpected value "PornoGraffitti*"

    at ReleasePage.verifyReleaseStructure (C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\pages\release.page.ts:59:53)
    at C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\tests\release.spec.ts:13:35
```

# Test source

```ts
   1 | import { expect, Page } from '@playwright/test';
   2 | import { Environment } from '../../env';
   3 | import { Endpoints } from '../../utils/constants/endpoints';
   4 | import { BasePage } from './base.page';
   5 | import { ReleaseResponse } from '../../models/api.models/release.response';
   6 | import { UIDataHelper } from '../../utils/ui.utils/ui.data.helper';
   7 |
   8 | export class ReleasePage extends BasePage {
   9 |   private url = `${Environment.BASE_UI_URL}${Endpoints.RELEASE}`;
  10 |
  11 |   private buttonsText = {
  12 |     addToCollectionText: 'Add to Collection',
  13 |   };
  14 |
  15 |   private pageElements = {
  16 |     blockTrackInfo: this.page.locator('.body_utiDG'),
  17 |     trackList: this.page.locator('#release-tracklist'),
  18 |     releaseStats: this.page.locator('#release-stats'),
  19 |     inCollectionTable: this.page
  20 |       .locator('.box_PFmyl')
  21 |       .filter({ has: this.page.locator('h3', { hasText: 'In Collection' }) })
  22 |       .first(),
  23 |   };
  24 |
  25 |   private buttons = {
  26 |     addToCollection: this.page.locator('button', { hasText: this.buttonsText.addToCollectionText }),
  27 |     removeButton: this.pageElements.inCollectionTable.locator('button.remove_rguzu'),
  28 |   };
  29 |
  30 |   private releaseElements = {
  31 |     releaseTitle: this.page.locator('h1.title_Brnd1'),
  32 |     releaseArtist: this.page.locator('.link_PKPcS').first(),
  33 |     releaseLabel: this.page.locator('.table_c5ftk tr:nth-child(1) td'),
  34 |     releaseFormat: this.page.locator('.table_c5ftk tr:nth-child(2) td'),
  35 |     releaseCountry: this.page.locator('.table_c5ftk tr:nth-child(3) td'),
  36 |     releaseYear: this.page.locator('.table_c5ftk tr:nth-child(4) td'),
  37 |     releaseGenre: this.page.locator('.table_c5ftk tr:nth-child(5) td'),
  38 |     releaseStyle: this.page.locator('.table_c5ftk tr:nth-child(6) td'),
  39 |   };
  40 |
  41 |   constructor(page: Page) {
  42 |     super(page);
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
> 59 |     expect.soft(this.releaseElements.releaseArtist).toContainText(info.artist);
     |                                                     ^ Error: expect(locator).toContainText(expected)
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
  71 |     console.log('🟡 Tables:', this.pageElements.inCollectionTable);
  72 |
  73 |     await this.buttons.addToCollection.click();
  74 |     expect(this.pageElements.inCollectionTable).toBeVisible();
  75 |   }
  76 |
  77 |   async removeFromCollectionAndVerifyTable() {
  78 |     await this.buttons.removeButton.click();
  79 |     await expect(this.pageElements.inCollectionTable).toBeHidden();
  80 |   }
  81 | }
  82 |
```
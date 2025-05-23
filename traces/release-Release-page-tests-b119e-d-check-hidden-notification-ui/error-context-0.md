# Test info

- Name: Release page tests >> Click remove on the notification and check hidden notification
- Location: C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\tests\release.spec.ts:19:7

# Error details

```
Error: expect.toBeVisible: Error: strict mode violation: locator('.box_PFmyl') resolved to 5 elements:
    1) <div class="box_PFmyl collection_DQxgF">…</div> aka getByText('In CollectionAdded 2 days ago RemoveMedia ConditionEditMint (M)Near Mint (NM or')
    2) <div class="box_PFmyl collection_DQxgF">…</div> aka getByText('In CollectionAdded 26 hours ago RemoveMedia ConditionEditMint (M)Near Mint (NM')
    3) <div class="box_PFmyl collection_DQxgF">…</div> aka getByText('In CollectionAdded 42 minutes ago RemoveMedia ConditionEditMint (M)Near Mint (')
    4) <div class="box_PFmyl collection_DQxgF">…</div> aka getByText('In CollectionAdded 34 minutes ago RemoveMedia ConditionEditMint (M)Near Mint (')
    5) <div class="box_PFmyl collection_DQxgF">…</div> aka getByText('In CollectionAdded just now RemoveMedia ConditionEditMint (M)Near Mint (NM or M')

Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('.box_PFmyl')

    at ReleasePage.addReleaseToCollectionAndVerifyNotification (C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\pages\release.page.ts:69:49)
    at C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\tests\release.spec.ts:22:5
```

# Page snapshot

```yaml
- banner:
  - link "Discogs":
    - /url: /
    - img "Discogs"
  - search "Search Discogs":
    - combobox "Search artists, albums and more..."
    - button "Search"
    - status
  - navigation "Main":
    - button "Explore"
    - button "Marketplace"
    - button "Community"
  - navigation "User":
    - link "Dashboard":
      - /url: /my
    - link "0 unread messages":
      - /url: /messages
      - img
    - link "0 in cart":
      - /url: /sell/cart
      - img
    - button "Notifications":
      - img
    - button "Logged in as Phonker123":
      - img "Phonker123"
- main:
  - heading "MUCC – 脈拍" [level=1]:
    - link "MUCC":
      - /url: /artist/522780-Mucc
    - text: – 脈拍
  - link "MUCC - 脈拍 album cover":
    - /url: /release/9791551-MUCC-%E8%84%88%E6%8B%8D/image/SW1hZ2U6MjY5Mzg3NzI=?redirected=true
    - img "MUCC - 脈拍 album cover"
  - table:
    - rowgroup:
      - 'row "Label: SAR (3) – AICL-3266~8"':
        - rowheader "Label:":
          - heading "Label:" [level=2]
        - cell "SAR (3) – AICL-3266~8":
          - link "SAR (3)":
            - /url: /label/878626-SAR-3
          - text: – AICL-3266~8
      - 'row "Format: Box Set, Deluxe Edition, Limited Edition, Artbook CD, Album DVD, DVD-Audio, DVD-Video, Limited Edition"':
        - rowheader "Format:":
          - heading "Format:" [level=2]
        - cell "Box Set, Deluxe Edition, Limited Edition, Artbook CD, Album DVD, DVD-Audio, DVD-Video, Limited Edition":
          - link "Box Set":
            - /url: /search/?format_exact=Box Set
          - text: ", Deluxe Edition, Limited Edition, Artbook"
          - link "CD":
            - /url: /search/?format_exact=CD
          - text: ", Album"
          - link "DVD":
            - /url: /search/?format_exact=DVD
          - text: ", DVD-Audio, DVD-Video, Limited Edition"
      - 'row "Country: Japan"':
        - rowheader "Country:":
          - heading "Country:" [level=2]
        - cell "Japan":
          - link "Japan":
            - /url: /search/?country=Japan
      - 'row "Released: Jan 25, 2017"':
        - rowheader "Released:":
          - heading "Released:" [level=2]
        - cell "Jan 25, 2017":
          - link "Jan 25, 2017":
            - /url: /search/?decade=2010&year=2017
            - time: Jan 25, 2017
      - 'row "Genre: Rock"':
        - rowheader "Genre:":
          - heading "Genre:" [level=2]
        - cell "Rock":
          - link "Rock":
            - /url: /genre/rock
      - 'row "Style: Hardcore, Pop Rock, J-Rock"':
        - rowheader "Style:":
          - heading "Style:" [level=2]
        - cell "Hardcore, Pop Rock, J-Rock":
          - link "Hardcore":
            - /url: /style/hardcore
          - text: ","
          - link "Pop Rock":
            - /url: /style/pop rock
          - text: ","
          - link "J-Rock":
            - /url: /style/j-rock
  - heading "Tracklist" [level=2]
  - table:
    - rowgroup:
      - row "CD-A1 脈拍":
        - cell "CD-A1"
        - cell
        - cell "脈拍"
      - row "CD-A2 絶体絶命":
        - cell "CD-A2"
        - cell
        - cell "絶体絶命"
      - row "CD-A3 Classic":
        - cell "CD-A3"
        - cell
        - cell "Classic"
      - row "CD-A4 KilleЯ":
        - cell "CD-A4"
        - cell
        - cell "KilleЯ"
      - row "CD-A5 Billy×2 ～Entwines Rock Stars～":
        - cell "CD-A5"
        - cell
        - cell "Billy×2 ～Entwines Rock Stars～"
      - row "CD-A6 りんご":
        - cell "CD-A6"
        - cell
        - cell "りんご"
      - row "CD-A7 EMP":
        - cell "CD-A7"
        - cell
        - cell "EMP"
      - row "CD-B1 故に、摩天楼 (Album Mix)":
        - cell "CD-B1"
        - cell
        - cell "故に、摩天楼 (Album Mix)"
      - row "CD-B2 秘密":
        - cell "CD-B2"
        - cell
        - cell "秘密"
      - row "CD-B3 コミューン":
        - cell "CD-B3"
        - cell
        - cell "コミューン"
      - row "CD-B4 勿忘草":
        - cell "CD-B4"
        - cell
        - cell "勿忘草"
      - row "CD-B5 シリウス":
        - cell "CD-B5"
        - cell
        - cell "シリウス"
      - row "CD-B6 孵化":
        - cell "CD-B6"
        - cell
        - cell "孵化"
      - row "CD-B7 ハイデ":
        - cell "CD-B7"
        - cell
        - cell "ハイデ"
      - row "DVD-1 Road To 20th Anniversary":
        - cell "DVD-1"
        - cell
        - cell "Road To 20th Anniversary"
      - row "DVD-2 『脈拍』ハイレゾ音源(48kHz/24bit)":
        - cell "DVD-2"
        - cell
        - cell "『脈拍』ハイレゾ音源(48kHz/24bit)"
  - heading "Companies, etc." [level=2]
  - list:
    - listitem:
      - text: Phonographic Copyright ℗ –
      - link "Sony Music Associated Records":
        - /url: /label/150168-Sony-Music-Associated-Records
    - listitem:
      - text: Copyright © –
      - link "Sony Music Associated Records":
        - /url: /label/150168-Sony-Music-Associated-Records
    - listitem:
      - text: Manufactured By –
      - link "Sony Music Labels Inc.":
        - /url: /label/681762-Sony-Music-Labels-Inc
    - listitem:
      - text: Record Company –
      - link "Sony Music Labels":
        - /url: /label/681346-Sony-Music-Labels
  - heading "Credits" [level=2]
  - list:
    - listitem:
      - text: Bass –
      - link "Yukke":
        - /url: /artist/1337064-Yukke
    - listitem:
      - text: Drums –
      - link "Satochi":
        - /url: /artist/1337065-Satochi
    - listitem:
      - text: Guitar –
      - link "Miya (2)":
        - /url: /artist/1337067-Miya-2
    - listitem:
      - text: Vocals –
      - link "Tatsuro":
        - /url: /artist/1337066-Tatsuro
  - heading "Other Versions" [level=2]
  - img "loading"
  - heading "Recommendations" [level=2]
  - img "loading"
  - heading "Reviews" [level=2]
  - img "loading"
  - heading "Release" [level=2]
  - button "Copy Release Code": "[r9791551]"
  - link "Edit Release":
    - /url: /release/9791551-/history#latest
  - link "See all versions":
    - /url: /master/1130667-MUCC-脈拍
  - text: Recently Edited
  - heading "For sale on Discogs" [level=2]
  - link "Sell a Copy":
    - /url: /sell/post/9791551
    - text: Sell a copy
  - heading [level=2]
  - link "1 copy":
    - /url: /sell/release/9791551
  - text: from €35.96
  - link "Shop now":
    - /url: /sell/release/9791551
  - heading "Statistics" [level=2]
  - list:
    - listitem:
      - text: "Have:"
      - link "9":
        - /url: /release/stats/9791551
    - listitem:
      - text: "Want:"
      - link "7":
        - /url: /release/stats/9791551
    - listitem: "Avg Rating: -- / 5"
    - listitem:
      - text: "Ratings:"
      - link "0":
        - /url: /release/stats/9791551
  - list:
    - listitem: "Last Sold: Never"
    - listitem: "Low: --"
    - listitem: "Median: --"
    - listitem: "High: --"
  - button "Rate this release 1 star"
  - button "Rate this release 2 stars"
  - button "Rate this release 3 stars"
  - button "Rate this release 4 stars"
  - button "Rate this release 5 stars"
  - button "Remove Rating" [disabled]
  - button "Share"
  - button "Add to Collection"
  - button "Add to Wantlist"
  - heading "In Collection" [level=3]
  - text: Added 2 days ago
  - button "Remove"
  - text: Media Condition Edit
  - combobox "Media Condition":
    - option [selected]
    - option "Mint (M)"
    - option "Near Mint (NM or M-)"
    - option "Very Good Plus (VG+)"
    - option "Very Good (VG)"
    - option "Good Plus (G+)"
    - option "Good (G)"
    - option "Fair (F)"
    - option "Poor (P)"
  - text: Sleeve Condition Edit
  - combobox "Sleeve Condition":
    - option [selected]
    - option "Generic"
    - option "No Cover"
    - option "Mint (M)"
    - option "Near Mint (NM or M-)"
    - option "Very Good Plus (VG+)"
    - option "Very Good (VG)"
    - option "Good Plus (G+)"
    - option "Good (G)"
    - option "Fair (F)"
    - option "Poor (P)"
  - text: Notes
  - button "Edit Notes": Edit
  - text: Folder Uncategorized
  - combobox "Folder"
  - heading "In Collection" [level=3]
  - text: Added 26 hours ago
  - button "Remove"
  - text: Media Condition Edit
  - combobox "Media Condition":
    - option [selected]
    - option "Mint (M)"
    - option "Near Mint (NM or M-)"
    - option "Very Good Plus (VG+)"
    - option "Very Good (VG)"
    - option "Good Plus (G+)"
    - option "Good (G)"
    - option "Fair (F)"
    - option "Poor (P)"
  - text: Sleeve Condition Edit
  - combobox "Sleeve Condition":
    - option [selected]
    - option "Generic"
    - option "No Cover"
    - option "Mint (M)"
    - option "Near Mint (NM or M-)"
    - option "Very Good Plus (VG+)"
    - option "Very Good (VG)"
    - option "Good Plus (G+)"
    - option "Good (G)"
    - option "Fair (F)"
    - option "Poor (P)"
  - text: Notes
  - button "Edit Notes": Edit
  - text: Folder Uncategorized
  - combobox "Folder"
  - heading "In Collection" [level=3]
  - text: Added 42 minutes ago
  - button "Remove"
  - text: Media Condition Edit
  - combobox "Media Condition":
    - option [selected]
    - option "Mint (M)"
    - option "Near Mint (NM or M-)"
    - option "Very Good Plus (VG+)"
    - option "Very Good (VG)"
    - option "Good Plus (G+)"
    - option "Good (G)"
    - option "Fair (F)"
    - option "Poor (P)"
  - text: Sleeve Condition Edit
  - combobox "Sleeve Condition":
    - option [selected]
    - option "Generic"
    - option "No Cover"
    - option "Mint (M)"
    - option "Near Mint (NM or M-)"
    - option "Very Good Plus (VG+)"
    - option "Very Good (VG)"
    - option "Good Plus (G+)"
    - option "Good (G)"
    - option "Fair (F)"
    - option "Poor (P)"
  - text: Notes
  - button "Edit Notes": Edit
  - text: Folder Uncategorized
  - combobox "Folder"
  - heading "In Collection" [level=3]
  - text: Added 34 minutes ago
  - button "Remove"
  - text: Media Condition Edit
  - combobox "Media Condition":
    - option [selected]
    - option "Mint (M)"
    - option "Near Mint (NM or M-)"
    - option "Very Good Plus (VG+)"
    - option "Very Good (VG)"
    - option "Good Plus (G+)"
    - option "Good (G)"
    - option "Fair (F)"
    - option "Poor (P)"
  - text: Sleeve Condition Edit
  - combobox "Sleeve Condition":
    - option [selected]
    - option "Generic"
    - option "No Cover"
    - option "Mint (M)"
    - option "Near Mint (NM or M-)"
    - option "Very Good Plus (VG+)"
    - option "Very Good (VG)"
    - option "Good Plus (G+)"
    - option "Good (G)"
    - option "Fair (F)"
    - option "Poor (P)"
  - text: Notes
  - button "Edit Notes": Edit
  - text: Folder Uncategorized
  - combobox "Folder"
  - heading "In Collection" [level=3]
  - text: Added just now
  - button "Remove"
  - text: Media Condition Edit
  - combobox "Media Condition":
    - option [selected]
    - option "Mint (M)"
    - option "Near Mint (NM or M-)"
    - option "Very Good Plus (VG+)"
    - option "Very Good (VG)"
    - option "Good Plus (G+)"
    - option "Good (G)"
    - option "Fair (F)"
    - option "Poor (P)"
  - text: Sleeve Condition Edit
  - combobox "Sleeve Condition":
    - option [selected]
    - option "Generic"
    - option "No Cover"
    - option "Mint (M)"
    - option "Near Mint (NM or M-)"
    - option "Very Good Plus (VG+)"
    - option "Very Good (VG)"
    - option "Good Plus (G+)"
    - option "Good (G)"
    - option "Fair (F)"
    - option "Poor (P)"
  - text: Notes
  - button "Edit Notes": Edit
  - text: Folder Uncategorized
  - combobox "Folder"
  - heading "Videos (3)" [level=2]
  - img
  - link "Edit":
    - /url: /release/9791551-/videos/update
  - button "Play":
    - img "Play"
  - list:
    - listitem:
      - button "Play MUCC - Yueni Matenrou 4:42":
        - img "Play"
        - text: MUCC - Yueni Matenrou 4:42
    - listitem:
      - button "Play MUCC 『ハイデ』MUSIC VIDEO 4:49":
        - img "Play"
        - text: MUCC 『ハイデ』MUSIC VIDEO 4:49
    - listitem:
      - button "Play MUCC 『CLASSIC』MUSIC VIDEO 4:04":
        - img "Play"
        - text: MUCC 『CLASSIC』MUSIC VIDEO 4:04
  - heading "Lists" [level=2]
  - button "Expand section"
  - heading "Contributors" [level=2]
  - link "Kumanosuke":
    - /url: /user/Kumanosuke
  - text: ","
  - link "frontale":
    - /url: /user/frontale
  - text: ","
  - link "choan":
    - /url: /user/choan
  - text: ","
  - link "TReimer":
    - /url: /user/TReimer
  - link "Report Suspicious Activity":
    - /url: /release/9791551/report
- contentinfo:
  - navigation "Footer":
    - list:
      - listitem:
        - button "About Discogs" [disabled] [expanded]
        - list:
          - listitem:
            - link "About Discogs":
              - /url: /about
          - listitem:
            - link "Discogs Digs":
              - /url: https://www.discogs.com/digs
          - listitem:
            - link "Careers":
              - /url: /careers
          - listitem:
            - link "API":
              - /url: /developers
          - listitem:
            - link "Status":
              - /url: https://status.discogs.com
    - list:
      - listitem:
        - button "Help Is Here" [disabled] [expanded]
        - list:
          - listitem:
            - link "Help & Support":
              - /url: https://support.discogs.com
          - listitem:
            - link "Forum":
              - /url: /forum
          - listitem:
            - button "Keyboard Shortcuts"
          - listitem:
            - link "Database Guidelines":
              - /url: https://support.discogs.com/hc/articles/360004016474-Overview-of-Submission-Guidelines-for-Releases
          - listitem:
            - link "Discogs Shipping":
              - /url: https://www.discogs.com/shipping
          - listitem:
            - link "Start Selling":
              - /url: https://www.discogs.com/selling
    - list:
      - listitem:
        - button "Join In" [disabled] [expanded]
        - list:
          - listitem:
            - link "Get Started":
              - /url: https://www.discogs.com/getstarted/
          - listitem:
            - link "Contribute":
              - /url: https://www.discogs.com/help/doc/contributing
          - listitem:
            - link "Add Release":
              - /url: https://www.discogs.com/release/add
          - listitem:
            - link "Contributor List":
              - /url: https://www.discogs.com/stats/contributors
          - listitem:
            - link "Help Translate":
              - /url: https://www.discogs.com/group/thread/963554
          - listitem:
            - link "Visit Wantlister":
              - /url: https://wantlister.discogs.com
          - listitem:
            - link "Advertise With Us":
              - /url: https://www.discogs.com/company/partnership-and-advertising-inquiries/
    - list:
      - listitem: Follow Us
      - listitem:
        - list:
          - listitem:
            - link "Discogs on Facebook":
              - /url: https://www.facebook.com/discogs
              - img "Discogs on Facebook"
          - listitem:
            - link "Discogs on Instagram":
              - /url: https://www.instagram.com/discogs/
              - img "Discogs on Instagram"
          - listitem:
            - link "Discogs on YouTube":
              - /url: https://www.youtube.com/channel/UCIJC0XjREJDO7ZTb9Nx7zfw
              - img "Discogs on YouTube"
          - listitem:
            - link "Discogs on TikTok":
              - /url: https://www.tiktok.com/@discogs
              - img "Discogs on TikTok"
          - listitem:
            - link "Discogs on LinkedIn":
              - /url: https://www.linkedin.com/company/discogs/
              - img "Discogs on LinkedIn"
      - listitem:
        - list:
          - listitem: On The Go
          - listitem:
            - link "Download now from the App Store":
              - /url: https://itunes.apple.com/app/apple-store/id1036449551?pt=117888292&ct=discogs-app-page&mt=8
              - img "Download now from the App Store"
          - listitem:
            - link "Download now from Google Play":
              - /url: https://play.google.com/store/apps/details?id=com.discogs.app&referrer=utm_source%3Ddiscogs-app-page
              - img "Download now from Google Play"
  - navigation "Legal":
    - link "Discogs":
      - /url: /
      - img "Discogs"
    - text: © 2025 Discogs®
    - list:
      - listitem:
        - button "Cookies Settings"
      - listitem:
        - link "Cookie Policy":
          - /url: https://www.discogs.com/help/doc/cookie-policy
      - listitem:
        - link "Terms of Service":
          - /url: https://www.discogs.com/help/doc/terms-of-service
      - listitem:
        - link "Privacy Policy":
          - /url: https://www.discogs.com/help/doc/privacy-policy
      - listitem:
        - link "California Privacy Notice":
          - /url: https://support.discogs.com/hc/articles/360039846494-California-Privacy-Notice
      - listitem:
        - link "Accessibility Statement":
          - /url: https://support.discogs.com/hc/en-us/articles/360017786278-Accessibility-Statement
      - listitem:
        - link "Impressum":
          - /url: https://support.discogs.com/hc/en-us/articles/34534023466125-Impressum
  - text: English
  - combobox "English":
    - option "Deutsch"
    - option "English" [selected]
    - option "Español"
    - option "Français"
    - option "Italiano"
    - option "日本語"
    - option "한국어"
    - option "Português (Brasil)"
    - option "Русский"
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
  19 |     inCollectionTable: this.page.locator('.box_PFmyl'),
  20 |   };
  21 |
  22 |   private buttons = {
  23 |     addToCollection: this.page.locator('button', { hasText: this.buttonsText.addToCollectionText }),
  24 |     removeButton: this.page.locator('button', { hasText: 'Remove' }),
  25 |   };
  26 |
  27 |   private releaseElements = {
  28 |     releaseTitle: this.page.locator('h1.title_Brnd1'),
  29 |     releaseArtist: this.page.locator('.link_PKPcS').first(),
  30 |     releaseLabel: this.page.locator('.table_c5ftk tr:nth-child(1) td'),
  31 |     releaseFormat: this.page.locator('.table_c5ftk tr:nth-child(2) td'),
  32 |     releaseCountry: this.page.locator('.table_c5ftk tr:nth-child(3) td'),
  33 |     releaseYear: this.page.locator('.table_c5ftk tr:nth-child(4) td'),
  34 |     releaseGenre: this.page.locator('.table_c5ftk tr:nth-child(5) td'),
  35 |     releaseStyle: this.page.locator('.table_c5ftk tr:nth-child(6) td'),
  36 |   };
  37 |
  38 |   constructor(page: Page) {
  39 |     super(page);
  40 |   }
  41 |
  42 |   async goto(releaseID: number) {
  43 |     await this.gotoByUrl(`${this.url}${releaseID}`);
  44 |   }
  45 |
  46 |   async verifyReleasePage() {
  47 |     expect(this.pageElements.blockTrackInfo).toBeVisible();
  48 |     expect(this.pageElements.trackList).toBeVisible();
  49 |     expect(this.pageElements.releaseStats).toBeVisible();
  50 |   }
  51 |
  52 |   async verifyReleaseStructure(release: ReleaseResponse) {
  53 |     const info = UIDataHelper.convertReleaseInfo(release);
  54 |
  55 |     expect.soft(this.releaseElements.releaseTitle).toContainText(info.title);
  56 |     expect.soft(this.releaseElements.releaseArtist).toContainText(info.artist);
  57 |     expect.soft(this.releaseElements.releaseLabel).toContainText(info.label);
  58 |     for (const part of info.formatParts) {
  59 |       await expect.soft(this.releaseElements.releaseFormat).toContainText(part);
  60 |     }
  61 |     expect.soft(this.releaseElements.releaseCountry).toContainText(info.country);
  62 |     expect.soft(this.releaseElements.releaseYear).toContainText(info.year);
  63 |     expect.soft(this.releaseElements.releaseGenre).toContainText(info.genre);
  64 |     expect.soft(this.releaseElements.releaseStyle).toContainText(info.style);
  65 |   }
  66 |
  67 |   async addReleaseToCollectionAndVerifyNotification() {
  68 |     await this.buttons.addToCollection.click();
> 69 |     expect(this.pageElements.inCollectionTable).toBeVisible();
     |                                                 ^ Error: expect.toBeVisible: Error: strict mode violation: locator('.box_PFmyl') resolved to 5 elements:
  70 |   }
  71 |
  72 |   async removeFromCollectionAndVerifyTable() {
  73 |     await this.buttons.removeButton.click();
  74 |     expect(this.pageElements.inCollectionTable).toBeHidden();
  75 |   }
  76 | }
  77 |
```
# Test info

- Name: Release page tests >> Click remove on the notification and check hidden notification
- Location: C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\tests\release.spec.ts:19:7

# Error details

```
Error: locator.click: Error: strict mode violation: locator('button').filter({ hasText: 'Remove' }) resolved to 4 elements:
    1) <button type="button" class="button_PgYDF link_ijVx7 small_VmGxx remove_rguzu"> Remove</button> aka locator('div').filter({ hasText: /^In CollectionAdded 2 hours ago Remove$/ }).getByRole('button')
    2) <button type="button" class="button_PgYDF link_ijVx7 small_VmGxx remove_rguzu"> Remove</button> aka locator('div').filter({ hasText: /^In CollectionAdded 119 minutes ago Remove$/ }).getByRole('button')
    3) <button type="button" class="button_PgYDF link_ijVx7 small_VmGxx remove_rguzu"> Remove</button> aka locator('div').filter({ hasText: /^In CollectionAdded 116 minutes ago Remove$/ }).getByRole('button')
    4) <button type="button" class="button_PgYDF link_ijVx7 small_VmGxx remove_rguzu"> Remove</button> aka locator('div').filter({ hasText: /^In CollectionAdded just now Remove$/ }).getByRole('button')

Call log:
  - waiting for locator('button').filter({ hasText: 'Remove' })

    at ReleasePage.removeFromCollectionAndVerifyTable (C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\pages\release.page.ts:73:37)
    at C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\tests\release.spec.ts:23:35
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
  - heading "Chara – Secret Garden" [level=1]:
    - link "Chara":
      - /url: /artist/99321-Chara
    - text: – Secret Garden
  - link "Chara - Secret Garden album cover":
    - /url: /release/11459821-Chara-Secret-Garden/image/SW1hZ2U6MzIzNzY1NTY=?redirected=true
    - img "Chara - Secret Garden album cover"
  - table:
    - rowgroup:
      - 'row "Label: Ki/oon – 88875077462, Sony Music – 88875077462"':
        - rowheader "Label:":
          - heading "Label:" [level=2]
        - cell "Ki/oon – 88875077462, Sony Music – 88875077462":
          - link "Ki/oon":
            - /url: /label/122037-Kioon
          - text: – 88875077462,
          - link "Sony Music":
            - /url: /label/25487-Sony-Music
          - text: – 88875077462
      - 'row "Format: CD, Album DVD, DVD-Video"':
        - rowheader "Format:":
          - heading "Format:" [level=2]
        - cell "CD, Album DVD, DVD-Video":
          - link "CD":
            - /url: /search/?format_exact=CD
          - text: ", Album"
          - link "DVD":
            - /url: /search/?format_exact=DVD
          - text: ", DVD-Video"
      - 'row "Country: Taiwan"':
        - rowheader "Country:":
          - heading "Country:" [level=2]
        - cell "Taiwan":
          - link "Taiwan":
            - /url: /search/?country=Taiwan
      - 'row "Released: 2015"':
        - rowheader "Released:":
          - heading "Released:" [level=2]
        - cell "2015":
          - link "2015":
            - /url: /search/?decade=2010&year=2015
            - time: "2015"
      - 'row "Genre: Pop"':
        - rowheader "Genre:":
          - heading "Genre:" [level=2]
        - cell "Pop":
          - link "Pop":
            - /url: /genre/pop
      - 'row "Style: J-pop"':
        - rowheader "Style:":
          - heading "Style:" [level=2]
        - cell "J-pop":
          - link "J-pop":
            - /url: /style/j-pop
  - heading "Tracklist" [level=2]
  - table:
    - rowgroup:
      - row "CD-1 スーパーセンチメンタル":
        - cell "CD-1"
        - cell
        - cell "スーパーセンチメンタル"
      - row "CD-2 恋は目を閉じて":
        - cell "CD-2"
        - cell
        - cell "恋は目を閉じて"
      - row "CD-3 ひかりの匂い":
        - cell "CD-3"
        - cell
        - cell "ひかりの匂い"
      - row "CD-4 Secret Garden":
        - cell "CD-4"
        - cell
        - cell "Secret Garden"
      - row "CD-5 Hug":
        - cell "CD-5"
        - cell
        - cell "Hug"
      - row "CD-6 はちみつ":
        - cell "CD-6"
        - cell
        - cell "はちみつ"
      - row "CD-7 恋は危険さ":
        - cell "CD-7"
        - cell
        - cell "恋は危険さ"
      - row "CD-8 ラッキーガール":
        - cell "CD-8"
        - cell
        - cell "ラッキーガール"
      - row "CD-9 不器用":
        - cell "CD-9"
        - cell
        - cell "不器用"
      - row "CD-10 愛が素敵なものに惹かれていくだけだよ":
        - cell "CD-10"
        - cell
        - cell "愛が素敵なものに惹かれていくだけだよ"
      - row "CD-11 せつなくてごめんね":
        - cell "CD-11"
        - cell
        - cell "せつなくてごめんね"
      - row "CD-12 恋文":
        - cell "CD-12"
        - cell
        - cell "恋文"
      - row "CD-13 Rainbow":
        - cell "CD-13"
        - cell
        - cell "Rainbow"
      - row "DVD-1 Hug (Music Video)":
        - cell "DVD-1"
        - cell
        - cell "Hug (Music Video)"
      - row "DVD-2 恋文 (Music Video)":
        - cell "DVD-2"
        - cell
        - cell "恋文 (Music Video)"
      - row "DVD-3 せつなくてごめんね (Music Video)":
        - cell "DVD-3"
        - cell
        - cell "せつなくてごめんね (Music Video)"
      - row "DVD-4 Heaven「From \"チャラモバ\" Limited Chara Debut 23rd Anniversary Live (2014/09/21)」":
        - cell "DVD-4"
        - cell
        - cell "Heaven「From \"チャラモバ\" Limited Chara Debut 23rd Anniversary Live (2014/09/21)」"
  - heading "Companies, etc." [level=2]
  - list:
    - listitem:
      - text: Record Company –
      - link "Sony Music Labels":
        - /url: /label/681346-Sony-Music-Labels
    - listitem:
      - text: Phonographic Copyright ℗ –
      - link "Ki/oon Music":
        - /url: /label/420359-Kioon-Music
    - listitem:
      - text: Copyright © –
      - link "Ki/oon Music":
        - /url: /label/420359-Kioon-Music
    - listitem:
      - text: Manufactured By –
      - link "Sony Music Entertainment Taiwan Ltd.":
        - /url: /label/274683-Sony-Music-Entertainment-Taiwan-Ltd
  - heading "Barcode and Other Identifiers" [level=2]
  - list:
    - listitem: "Barcode: 888750774620"
  - heading "Other Versions (2)" [level=2]
  - link "View All":
    - /url: /master/1075110-Chara-Secret-Garden
  - table:
    - rowgroup:
      - row "Title (Format) Label Cat# Country Year":
        - cell
        - cell "Title (Format)"
        - cell "Label"
        - cell "Cat#"
        - cell "Country"
        - cell "Year"
        - cell
        - cell
      - row "Secret Garden (LP, Album) Ki/oon KSJL 6181 Japan 2015":
        - cell
        - cell "Secret Garden (LP, Album)":
          - link "Secret Garden":
            - /url: /release/7653528-Chara-Secret-Garden
          - text: (LP, Album)
        - cell "Ki/oon":
          - link "Ki/oon":
            - /url: /label/122037-Kioon
        - cell "KSJL 6181"
        - cell "Japan"
        - cell "2015"
        - cell
      - row "Secret Garden (CD, Album, +DVD) Ki/oon KSCL 2551,2552 Japan 2015":
        - cell
        - cell "Secret Garden (CD, Album, +DVD)":
          - link "Secret Garden":
            - /url: /release/9207717-Chara-Secret-Garden
          - text: (CD, Album, +DVD)
        - cell "Ki/oon":
          - link "Ki/oon":
            - /url: /label/122037-Kioon
        - cell "KSCL 2551,2552"
        - cell "Japan"
        - cell "2015"
        - cell
  - heading "Reviews" [level=2]
  - textbox "Enter your comment"
  - button "Submit" [disabled]
  - link "View Help":
    - /url: /help/doc/reviews-and-discussion
  - list
  - heading "Release" [level=2]
  - button "Copy Release Code": "[r11459821]"
  - link "Edit Release":
    - /url: /release/11459821-Secret-Garden/history#latest
  - link "See all versions":
    - /url: /master/1075110-Chara-Secret-Garden
  - text: New Submission
  - heading "For sale on Discogs" [level=2]
  - link "Sell a Copy":
    - /url: /sell/post/11459821
    - text: Sell a copy
  - paragraph: No items available in the Marketplace
  - paragraph:
    - link "Learn more about selling on Discogs":
      - /url: https://www.discogs.com/selling
  - heading [level=2]
  - heading "Statistics" [level=2]
  - list:
    - listitem:
      - text: "Have:"
      - link "3":
        - /url: /release/stats/11459821
    - listitem:
      - text: "Want:"
      - link "0":
        - /url: /release/stats/11459821
    - listitem: "Avg Rating: -- / 5"
    - listitem:
      - text: "Ratings:"
      - link "0":
        - /url: /release/stats/11459821
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
  - text: Added 2 hours ago
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
  - text: Added 119 minutes ago
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
  - text: Added 116 minutes ago
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
  - heading "Audio" [level=2]
  - iframe
  - heading "Videos" [level=2]
  - img
  - link "Edit":
    - /url: /release/11459821-/videos/update
  - link "Add video":
    - /url: /release/11459821-/videos/update
  - list
  - heading "Lists" [level=2]
  - button "Add to List"
  - button "Expand section"
  - heading "Contributors" [level=2]
  - link "kito0104":
    - /url: /user/kito0104
  - link "Report Suspicious Activity":
    - /url: /release/11459821/report
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
  69 |     expect(this.pageElements.inCollectionTable).toBeVisible();
  70 |   }
  71 |
  72 |   async removeFromCollectionAndVerifyTable() {
> 73 |     await this.buttons.removeButton.click();
     |                                     ^ Error: locator.click: Error: strict mode violation: locator('button').filter({ hasText: 'Remove' }) resolved to 4 elements:
  74 |     expect(this.pageElements.inCollectionTable).toBeHidden();
  75 |   }
  76 | }
  77 |
```
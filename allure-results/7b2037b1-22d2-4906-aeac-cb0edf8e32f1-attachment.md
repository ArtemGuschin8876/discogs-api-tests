# Test info

- Name: Release page tests >> Click to add collection button check notification and remove it
- Location: C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\tests\release.spec.ts:16:7

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeHidden()

Locator: locator('.box_PFmyl').filter({ has: locator('h3').filter({ hasText: 'In Collection' }) }).first()
Expected: hidden
Received: visible
Call log:
  - expect.toBeHidden with timeout 5000ms
  - waiting for locator('.box_PFmyl').filter({ has: locator('h3').filter({ hasText: 'In Collection' }) }).first()
    9 × locator resolved to <div class="box_PFmyl collection_DQxgF">…</div>
      - unexpected value "visible"

    at ReleasePage.removeFromCollectionAndVerifyTable (C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\pages\release.page.ts:77:55)
    at C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\tests\release.spec.ts:21:7
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
  - heading "Aimer – Dawn" [level=1]:
    - link "Aimer":
      - /url: /artist/4280542-Aimer
    - text: – Dawn
  - link "Aimer - Dawn album cover":
    - /url: /release/11502820-Aimer-Dawn/image/SW1hZ2U6MzI1MjgwMjQ=?redirected=true
    - img "Aimer - Dawn album cover"
  - table:
    - rowgroup:
      - 'row "Label: DefSTAR Records – 88875136632, Sony Music – 88875136632"':
        - rowheader "Label:":
          - heading "Label:" [level=2]
        - cell "DefSTAR Records – 88875136632, Sony Music – 88875136632":
          - link "DefSTAR Records":
            - /url: /label/50011-DefSTAR-Records
          - text: – 88875136632,
          - link "Sony Music":
            - /url: /label/25487-Sony-Music
          - text: – 88875136632
      - 'row "Format: CD, Album"':
        - rowheader "Format:":
          - heading "Format:" [level=2]
        - cell "CD, Album":
          - link "CD":
            - /url: /search/?format_exact=CD
          - text: ", Album"
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
      - 'row "Genre: Rock, Pop"':
        - rowheader "Genre:":
          - heading "Genre:" [level=2]
        - cell "Rock, Pop":
          - link "Rock":
            - /url: /genre/rock
          - text: ","
          - link "Pop":
            - /url: /genre/pop
      - 'row "Style: J-pop, Pop Rock"':
        - rowheader "Style:":
          - heading "Style:" [level=2]
        - cell "J-pop, Pop Rock":
          - link "J-pop":
            - /url: /style/j-pop
          - text: ","
          - link "Pop Rock":
            - /url: /style/pop rock
  - heading "Tracklist" [level=2]
  - table:
    - rowgroup:
      - row "1 Moon River -Prologue-":
        - cell "1"
        - cell
        - cell "Moon River -Prologue-"
      - row "2 Believe Be:leave":
        - cell "2"
        - cell
        - cell "Believe Be:leave"
      - row "3 君を待つ":
        - cell "3"
        - cell
        - cell "君を待つ"
      - row "4 Broken Night":
        - cell "4"
        - cell
        - cell "Broken Night"
      - row "5 Noir! Noir!":
        - cell "5"
        - cell
        - cell "Noir! Noir!"
      - row "6 Re:far":
        - cell "6"
        - cell
        - cell "Re:far"
      - row "7 Am04:00":
        - cell "7"
        - cell
        - cell "Am04:00"
      - row "8 誰か、海を。":
        - cell "8"
        - cell
        - cell "誰か、海を。"
      - row "9 Last Stardust":
        - cell "9"
        - cell
        - cell "Last Stardust"
      - row "10 Brave Shine":
        - cell "10"
        - cell
        - cell "Brave Shine"
      - row "11 キズナ":
        - cell "11"
        - cell
        - cell "キズナ"
      - row "12 Dawn":
        - cell "12"
        - cell
        - cell "Dawn"
      - row "13 Moon River":
        - cell "13"
        - cell
        - cell "Moon River"
  - heading "Companies, etc." [level=2]
  - list:
    - listitem:
      - text: Record Company –
      - link "Sony Music Labels":
        - /url: /label/681346-Sony-Music-Labels
    - listitem:
      - text: Phonographic Copyright ℗ –
      - link "DefSTAR Records":
        - /url: /label/50011-DefSTAR-Records
    - listitem:
      - text: Copyright © –
      - link "DefSTAR Records":
        - /url: /label/50011-DefSTAR-Records
    - listitem:
      - text: Manufactured By –
      - link "Sony Music Entertainment Taiwan Ltd.":
        - /url: /label/274683-Sony-Music-Entertainment-Taiwan-Ltd
  - heading "Credits" [level=2]
  - list:
    - listitem:
      - text: Vocals, Lyrics By –
      - link "Aimer":
        - /url: /artist/4280542-Aimer
  - heading "Barcode and Other Identifiers" [level=2]
  - list:
    - listitem: "Barcode: 888751366329"
  - heading "Other Versions (3)" [level=2]
  - link "View All":
    - /url: /master/967429-Aimer-Dawn
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
      - row "Dawn (CD, Album) DefSTAR Records DFCL-2154 Japan 2015":
        - cell
        - cell "Dawn (CD, Album)":
          - link "Dawn":
            - /url: /release/7775250-Aimer-Dawn
          - text: (CD, Album)
        - cell "DefSTAR Records":
          - link "DefSTAR Records":
            - /url: /label/50011-DefSTAR-Records
        - cell "DFCL-2154"
        - cell "Japan"
        - cell "2015"
        - cell
      - row "Dawn (CD, Album, Blu-ray, , All Media, Limited Edition) DefSTAR Records DFCL-2150/1 Japan 2015":
        - cell
        - cell "Dawn (CD, Album, Blu-ray, , All Media, Limited Edition)":
          - link "Dawn":
            - /url: /release/8203333-Aimer-Dawn
          - text: (CD, Album, Blu-ray, , All Media, Limited Edition)
        - cell "DefSTAR Records":
          - link "DefSTAR Records":
            - /url: /label/50011-DefSTAR-Records
        - cell "DFCL-2150/1"
        - cell "Japan"
        - cell "2015"
        - cell
      - row "Dawn (CD, Album) DefSTAR Records DFCL-2154 Indonesia 2015":
        - cell
        - cell "Dawn (CD, Album)":
          - link "Dawn":
            - /url: /release/9141095-Aimer-Dawn
          - text: (CD, Album)
        - cell "DefSTAR Records":
          - link "DefSTAR Records":
            - /url: /label/50011-DefSTAR-Records
        - cell "DFCL-2154"
        - cell "Indonesia"
        - cell "2015"
        - cell
  - heading "Reviews" [level=2]
  - textbox "Enter your comment"
  - button "Submit" [disabled]
  - link "View Help":
    - /url: /help/doc/reviews-and-discussion
  - list
  - heading "Release" [level=2]
  - button "Copy Release Code": "[r11502820]"
  - link "Edit Release":
    - /url: /release/11502820-Dawn/history#latest
  - link "See all versions":
    - /url: /master/967429-Aimer-Dawn
  - text: New Submission
  - heading "For sale on Discogs" [level=2]
  - link "Sell a Copy":
    - /url: /sell/post/11502820
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
        - /url: /release/stats/11502820
    - listitem:
      - text: "Want:"
      - link "4":
        - /url: /release/stats/11502820
    - listitem: "Avg Rating: -- / 5"
    - listitem:
      - text: "Ratings:"
      - link "0":
        - /url: /release/stats/11502820
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
  - text: Added 29 hours ago
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
  - text: Added 28 hours ago
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
  - text: Added 94 minutes ago
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
    - /url: /release/11502820-/videos/update
  - link "Add video":
    - /url: /release/11502820-/videos/update
  - list
  - heading "Lists" [level=2]
  - button "Add to List"
  - button "Expand section"
  - heading "Contributors" [level=2]
  - link "kito0104":
    - /url: /user/kito0104
  - text: ","
  - link "leinad":
    - /url: /user/leinad
  - link "Report Suspicious Activity":
    - /url: /release/11502820/report
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
        - button "Manage Preferences"
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
  71 |     await this.buttons.addToCollection.click();
  72 |     expect(this.pageElements.inCollectionTable).toBeVisible();
  73 |   }
  74 |
  75 |   async removeFromCollectionAndVerifyTable() {
  76 |     await this.buttons.removeButton.click();
> 77 |     await expect(this.pageElements.inCollectionTable).toBeHidden();
     |                                                       ^ Error: Timed out 5000ms waiting for expect(locator).toBeHidden()
  78 |   }
  79 | }
  80 |
```
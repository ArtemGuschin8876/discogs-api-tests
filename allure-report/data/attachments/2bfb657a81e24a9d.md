# Test info

- Name: Release - UI >> Click to add collection button and check table
- Location: C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\tests\release.spec.ts:11:7

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('button').filter({ hasText: 'Add to Collection' })
    - locator resolved to <button disabled type="button" class="_button_yjcsc_1 button_PsVhv _dense_yjcsc_54 _notHasTextNode_yjcsc_32 _notHasTextNodeFirst_yjcsc_32 _notHasTextNodeLast_yjcsc_37 _secondary_yjcsc_60">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 500ms
    45 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div class="onetrust-pc-dark-filter ot-fade-in"></div> from <div data-nosnippet="true" id="onetrust-consent-sdk">…</div> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms

    at ReleasePage.addReleaseToCollectionAndVerifyNotification (C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\pages\release.page.ts:71:40)
    at C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\tests\release.spec.ts:17:35
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
  - heading "Other Versions (4)" [level=2]
  - link "View All":
    - /url: /master/1130667-MUCC-脈拍
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
      - row "脈拍 (All Media, Limited Edition, CD, Album, DVD, DVD-Video, NTSC) SAR (3) AICL 3269~70 Japan 2017":
        - cell
        - cell "脈拍 (All Media, Limited Edition, CD, Album, DVD, DVD-Video, NTSC)":
          - link "脈拍":
            - /url: /release/9791590-Mucc-脈拍
          - text: (All Media, Limited Edition, CD, Album, DVD, DVD-Video, NTSC)
        - cell "SAR (3)":
          - link "SAR (3)":
            - /url: /label/878626-SAR-3
        - cell "AICL 3269~70"
        - cell "Japan"
        - cell "2017"
        - cell
      - row "脈拍 (CD, Album) SAR (3) AICL-3271 Japan 2017 1 in Collection":
        - cell
        - cell "脈拍 (CD, Album)":
          - link "脈拍":
            - /url: /release/9791654-MUCC-脈拍
          - text: (CD, Album)
        - cell "SAR (3)":
          - link "SAR (3)":
            - /url: /label/878626-SAR-3
        - cell "AICL-3271"
        - cell "Japan"
        - cell "2017"
        - cell "1 in Collection":
          - note "1 in Collection"
      - row "脈拍 (2×LP, Album, Limited Edition, Numbered) SAR (3) AIJL-5324~5 Japan 2017":
        - cell
        - cell "脈拍 (2×LP, Album, Limited Edition, Numbered)":
          - link "脈拍":
            - /url: /release/10370707-MUCC-脈拍
          - text: (2×LP, Album, Limited Edition, Numbered)
        - cell "SAR (3)":
          - link "SAR (3)":
            - /url: /label/878626-SAR-3
        - cell "AIJL-5324~5"
        - cell "Japan"
        - cell "2017"
        - cell
      - row "脈拍 = Myakuhaku (CD, Album) SAR (3) GSCD-102 Germany 2017":
        - cell
        - cell "脈拍 = Myakuhaku (CD, Album)":
          - link "脈拍 = Myakuhaku":
            - /url: /release/10883919-MUCC-脈拍-Myakuhaku
          - text: (CD, Album)
        - cell "SAR (3)":
          - link "SAR (3)":
            - /url: /label/878626-SAR-3
        - cell "GSCD-102"
        - cell "Germany"
        - cell "2017"
        - cell
  - heading "Reviews" [level=2]
  - textbox "Enter your comment"
  - button "Submit" [disabled]
  - link "View Help":
    - /url: /help/doc/reviews-and-discussion
  - list
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
  - text: from €35.65
  - link "Shop now":
    - /url: /sell/release/9791551
  - heading "Statistics" [level=2]
  - list:
    - listitem:
      - text: "Have:"
      - link "8":
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
  - button "Add to List"
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
- region "Cookie banner":
  - dialog "Let's manage your privacy":
    - heading "Let's manage your privacy" [level=2]
    - text: This website uses cookies and similar tracking technologies to enable our website functionalities, like enhancing user experience or analyzing performance traffic. We also share information about your site usage with our social media, advertising and analytics providers. Because we respect your right to privacy, you can choose not to allow some types of cookies by clicking “Cookie Settings” or “Reject All” to opt out. For more details, see our
    - link "Cookie Policy":
      - /url: https://support.discogs.com/hc/en-us/articles/360009334413
    - text: .
    - button "Cookies Settings"
    - button "Reject All"
    - button "Accept All Cookies"
    - button "Close"
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
     |                                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
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
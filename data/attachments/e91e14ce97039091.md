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
  - heading "MUCC – F#Ck The Past F#Ck The Future On World -Paradise From T.R.E.N.D.Y.-" [level=1]:
    - link "MUCC":
      - /url: /artist/522780-Mucc
    - text: – F#Ck The Past F#Ck The Future On World -Paradise From T.R.E.N.D.Y.-
  - link "MUCC - F#Ck The Past F#Ck The Future On World -Paradise From T.R.E.N.D.Y.- album cover":
    - /url: /release/7896158-MUCC-FCk-The-Past-FCk-The-Future-On-World-Paradise-From-TRENDY-/image/SW1hZ2U6MjEyMDI1Njc=?redirected=true
    - img "MUCC - F#Ck The Past F#Ck The Future On World -Paradise From T.R.E.N.D.Y.- album cover"
  - table:
    - rowgroup:
      - 'row "Label: SAR (3) – AIBL-9327~8"':
        - rowheader "Label:":
          - heading "Label:" [level=2]
        - cell "SAR (3) – AIBL-9327~8":
          - link "SAR (3)":
            - /url: /label/878626-SAR-3
          - text: – AIBL-9327~8
      - 'row "Format: 2 x DVD, DVD-Video"':
        - rowheader "Format:":
          - heading "Format:" [level=2]
        - cell "2 x DVD, DVD-Video":
          - text: 2 x
          - link "DVD":
            - /url: /search/?format_exact=DVD
          - text: ", DVD-Video"
      - 'row "Country: Japan"':
        - rowheader "Country:":
          - heading "Country:" [level=2]
        - cell "Japan":
          - link "Japan":
            - /url: /search/?country=Japan
      - 'row "Released: Nov 25, 2015"':
        - rowheader "Released:":
          - heading "Released:" [level=2]
        - cell "Nov 25, 2015":
          - link "Nov 25, 2015":
            - /url: /search/?decade=2010&year=2015
            - time: Nov 25, 2015
      - 'row "Genre: Rock"':
        - rowheader "Genre:":
          - heading "Genre:" [level=2]
        - cell "Rock":
          - link "Rock":
            - /url: /genre/rock
      - row "Style:":
        - rowheader "Style:":
          - heading "Style:" [level=2]
        - cell
  - heading "Tracklist" [level=2]
  - table:
    - rowgroup:
      - row "Disc 1 - F#ck The Past F#ck The Future On World -Paradise From T.R.E.N.D.Y.-":
        - cell
        - cell
        - cell "Disc 1 - F#ck The Past F#ck The Future On World -Paradise From T.R.E.N.D.Y.-"
        - cell
      - row "1-1 The End":
        - cell "1-1"
        - cell
        - cell "The End"
      - row "1-2 The End Of The World":
        - cell "1-2"
        - cell
        - cell "The End Of The World"
      - row "1-3 睡蓮":
        - cell "1-3"
        - cell
        - cell "睡蓮"
      - row "1-4 Ender Ender":
        - cell "1-4"
        - cell
        - cell "Ender Ender"
      - row "1-5 D・f・D (Dreamer From Darkness)":
        - cell "1-5"
        - cell
        - cell "D・f・D (Dreamer From Darkness)"
      - row "1-6 B.L.U.E -Tell Me Kafka-":
        - cell "1-6"
        - cell
        - cell "B.L.U.E -Tell Me Kafka-"
      - row "1-7 レインボー":
        - cell "1-7"
        - cell
        - cell "レインボー"
      - row "1-8 HateЯ":
        - cell "1-8"
        - cell
        - cell "HateЯ"
      - row "1-9 Water～369 -ミロク-":
        - cell "1-9"
        - cell
        - cell "Water～369 -ミロク-"
      - row "1-10 アゲハ":
        - cell "1-10"
        - cell
        - cell "アゲハ"
      - row "1-11 Ms.Fear":
        - cell "1-11"
        - cell
        - cell "Ms.Fear"
      - row "1-12 Tell Me":
        - cell "1-12"
        - cell
        - cell "Tell Me"
      - row "1-13 ニルヴァーナ":
        - cell "1-13"
        - cell
        - cell "ニルヴァーナ"
      - row "1-14 ファズ":
        - cell "1-14"
        - cell
        - cell "ファズ"
      - row "1-15 Hallelujah":
        - cell "1-15"
        - cell
        - cell "Hallelujah"
      - row "1-16 Mr.Liar":
        - cell "1-16"
        - cell
        - cell "Mr.Liar"
      - row "1-17 Mad Yack (Encore)":
        - cell "1-17"
        - cell
        - cell "Mad Yack (Encore)"
      - row "Encore":
        - cell
        - cell
        - cell "Encore"
        - cell
      - row "1-18 Tonight":
        - cell "1-18"
        - cell
        - cell "Tonight"
      - row "1-19 Marry You 【Very Surprise In Berlin】":
        - cell "1-19"
        - cell
        - cell "Marry You 【Very Surprise In Berlin】"
      - row "Additional Track":
        - cell
        - cell
        - cell "Additional Track"
        - cell
      - row "1-20 Since 1997":
        - cell "1-20"
        - cell
        - cell "Since 1997"
      - row "MC Collection Of The World":
        - cell
        - cell
        - cell "MC Collection Of The World"
        - cell
      - row "1-21 逹瑯MC -I Teach Japanese Of The World By Tatsue":
        - cell "1-21"
        - cell
        - cell "逹瑯MC -I Teach Japanese Of The World By Tatsue"
      - row "1-22 ミヤMC":
        - cell "1-22"
        - cell
        - cell "ミヤMC"
      - row "1-23 Yukke MC":
        - cell "1-23"
        - cell
        - cell "Yukke MC"
      - row "1-24 Satoち MC":
        - cell "1-24"
        - cell
        - cell "Satoち MC"
      - row "1-25 蘭鋳Jump Collection Of The World":
        - cell "1-25"
        - cell
        - cell "蘭鋳Jump Collection Of The World"
      - row "Disc 2 - MUCC Europe Tour 2015 \"F#ck The Past F#ck The Future\" Documentary":
        - cell
        - cell
        - cell "Disc 2 - MUCC Europe Tour 2015 \"F#ck The Past F#ck The Future\" Documentary"
        - cell
      - row "2-1 Mucc Europe Tour 2015 “F#Ck The Past F#Ck The Future” Documentary":
        - cell "2-1"
        - cell
        - cell "Mucc Europe Tour 2015 “F#Ck The Past F#Ck The Future” Documentary"
  - heading "Companies, etc." [level=2]
  - list:
    - listitem:
      - text: Copyright © –
      - link "Sony Music Associated Records":
        - /url: /label/150168-Sony-Music-Associated-Records
    - listitem:
      - text: Manufactured By –
      - link "Sony Music Labels Inc.":
        - /url: /label/681762-Sony-Music-Labels-Inc
    - listitem:
      - text: Filmed At –
      - link "Theatre Club, Moscow":
        - /url: /label/1556195-Theatre-Club-Moscow
    - listitem:
      - text: Filmed At –
      - link "Islington Academy":
        - /url: /label/416511-Islington-Academy
    - listitem:
      - text: Filmed At –
      - link "Le Divan Du Monde":
        - /url: /label/438545-Le-Divan-Du-Monde
    - listitem:
      - text: Filmed At –
      - link "Zeche Carl":
        - /url: /label/344288-Zeche-Carl
    - listitem:
      - text: Filmed At –
      - link "C-Club, Berlin":
        - /url: /label/774019-C-Club-Berlin
    - listitem:
      - text: Filmed At –
      - link "Fabryka Klub, Krakow":
        - /url: /label/1180984-Fabryka-Klub-Krakow
    - listitem:
      - text: Filmed At –
      - link "Ex Theater Roppongi":
        - /url: /label/939072-Ex-Theater-Roppongi
    - listitem:
      - text: Filmed At –
      - link "Studio Coast":
        - /url: /label/765717-Studio-Coast
    - listitem:
      - text: Filmed At –
      - link "Tsutaya O-East":
        - /url: /label/1103183-Tsutaya-O-East
    - listitem:
      - text: Record Company –
      - link "Sony Music Labels":
        - /url: /label/681346-Sony-Music-Labels
  - heading "Credits" [level=2]
  - list:
    - listitem:
      - text: Bass –
      - link "YUKKE":
        - /url: /artist/1337064-Yukke
    - listitem:
      - text: Drums –
      - link "SATOchi":
        - /url: /artist/1337065-Satochi
    - listitem:
      - text: Guitar, Backing Vocals –
      - link "Miya (2)":
        - /url: /artist/1337067-Miya-2
    - listitem:
      - text: Producer –
      - link "MUCC":
        - /url: /artist/522780-Mucc
    - listitem:
      - text: Vocals –
      - link "Tatsuro":
        - /url: /artist/1337066-Tatsuro
  - heading "Notes" [level=2]
  - text: "Live (disc 1) and documentary (disc 2) DVD \"F#CK THE PAST F#CK THE FUTURE ON WORLD -Paradise from T.R.E.N.D.Y.-\" for their tour \"MUCC (EUROPE) TOUR 2015 F#CK THE PAST F#CK THE FUTURE\" (Europe and Japan) in 2015 covering the following tour dates: 28 April 2015 EX THEATER ROPPONGI Tokyo, Japan (MUCC TOUR 2015 \"F#CK THE PAST F#CK THE FUTURE\") 10 May 2015 TSUTAYA O-EAST Tokyo, Japan (MUCC EUROPE TOUR 2015 \"F#CK THE PAST F#CK THE FUTURE\" in JAPAN) 16 May 2015 Theatr Club Moscow, Russia 18 May 2015 O2 Academy Islington London, UK 19 May 2015 Divan du Monde Paris, France 20 May 2015 Divan du Monde Paris, France 22 May 2015 Zeche Carl Essen, Germany 23 May 2015 Zeche Carl Essen, Germany 24 May 2015 C-Club Berlin, Germany 26 May 2015 Fabryka Klub Krakow, Poland 18 July 2015 Shinkiba Studio Coast Tokyo, Japan (MUCC TOUR 2015 \"F#CK THE PAST F#CK THE FUTURE\"Final 【The Requiem, Endless Nightmare, Darkness YHWH,】) Sound for 1-1 to 1-5 and 1-9 to 1-17 recorded at Zeche Carl, Essen on May 22nd 2015. Most film footage is also from that date. 1-10, 1-12 and 1-14 and other tracks also contain (identifiable) longer scenes from other European dates. Some tracks (like 1-5 or 1-18) contain longer scenes from the Japanese dates. 1-6 and 1-8 entirely filmed at Shinkiba Studio Coast, Tokyo on July 18th 2015. 1-7 entirely filmed at one of the Japanese tour dates. 1-18 entirely filmed at Zeche Carl, Essen on May 23rn 2015. 1-19 entirely filmed at C-Club, Berlin on May 24th 2015. 1-20 entirely filmed at TSUTAYA O-EAST Tokyo, Japan on May 10h 2015. 1-21 is a compilation of all MCs of Tatsuro filmed on all European tour dates. 1-22 entirely filmed at Zeche Carl, Essen on May 23nd 2015. 1-23 entirely filmed at Theatr Club, Moscow on May 16th 2015. 1-24 entirely filmed Divan du Monde Paris, France on May 20th 2015 . 1-25 is a compilation of all Ranchuu version's with the crowd jumping filmed on all European tour dates. There is an unlisted track with an MC between track 1-9 and 1-10. The track \"Since 1997\" (1-20) is not mentioned on the tracklist but accessible from the DVD menu."
  - heading "Recommendations" [level=2]
  - list:
    - listitem:
      - figure "MUCC Live Chronicle MUCC 2007 Japan DVD — DVD-Video, Limited Edition":
        - link "Mucc - MUCC Live Chronicle":
          - /url: /release/5280175-MUCC-MUCC-Live-Chronicle
          - img "Mucc - MUCC Live Chronicle"
        - link "MUCC Live Chronicle":
          - /url: /release/5280175-MUCC-MUCC-Live-Chronicle
        - link "MUCC":
          - /url: /artist/522780-Mucc
        - text: 2007 Japan
        - img
        - text: DVD — DVD-Video, Limited Edition
        - link "Shop":
          - /url: /sell/release/5280175
        - button "Add to wantlist": Want
  - button "Scroll left" [disabled]
  - button "Scroll right"
  - heading "Reviews" [level=2]
  - textbox "Enter your comment"
  - button "Submit" [disabled]
  - link "View Help":
    - /url: /help/doc/reviews-and-discussion
  - list
  - heading "Release" [level=2]
  - button "Copy Release Code": "[r7896158]"
  - link "Edit Release":
    - /url: /release/7896158-FCk-The-Past-FCk-The-Future-On-World--Paradise-From-TRENDY/history#latest
  - text: New Submission
  - heading "For sale on Discogs" [level=2]
  - link "Sell a Copy":
    - /url: /sell/post/7896158
    - text: Sell a copy
  - heading [level=2]
  - link "3 copies":
    - /url: /sell/release/7896158
  - text: from €42.28
  - link "Shop now":
    - /url: /sell/release/7896158
  - heading "Statistics" [level=2]
  - list:
    - listitem:
      - text: "Have:"
      - link "15":
        - /url: /release/stats/7896158
    - listitem:
      - text: "Want:"
      - link "5":
        - /url: /release/stats/7896158
    - listitem: "Avg Rating: 5 / 5"
    - listitem:
      - text: "Ratings:"
      - link "2":
        - /url: /release/stats/7896158
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
  - heading "Videos" [level=2]
  - img
  - link "Edit":
    - /url: /release/7896158-/videos/update
  - link "Add video":
    - /url: /release/7896158-/videos/update
  - list
  - heading "Lists" [level=2]
  - button "Add to List"
  - button "Expand section"
  - heading "Contributors" [level=2]
  - link "frontale":
    - /url: /user/frontale
  - text: ","
  - link "ol2b":
    - /url: /user/ol2b
  - text: ","
  - link "choan":
    - /url: /user/choan
  - text: ","
  - link "Kumanosuke":
    - /url: /user/Kumanosuke
  - link "Report Suspicious Activity":
    - /url: /release/7896158/report
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
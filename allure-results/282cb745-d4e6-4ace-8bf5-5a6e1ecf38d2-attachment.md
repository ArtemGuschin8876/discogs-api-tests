# Test info

- Name: Release page tests >> Click to add collection button check notification and remove it
- Location: C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\tests\release.spec.ts:19:7

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
    at C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\tests\release.spec.ts:25:7
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
  - heading "Brick – Good High" [level=1]:
    - link "Brick":
      - /url: /artist/3451-Brick
    - text: – Good High
  - link "Brick - Good High album cover More images":
    - /url: /release/11743611-Brick-Good-High/image/SW1hZ2U6MzMzNzE2ODE=?redirected=true
    - img "Brick - Good High album cover"
    - paragraph: More images
  - table:
    - rowgroup:
      - 'row "Label: Sony Records Int''l – SICP-5725"':
        - rowheader "Label:":
          - heading "Label:" [level=2]
        - cell "Sony Records Int'l – SICP-5725":
          - link "Sony Records Int'l":
            - /url: /label/262232-Sony-Records-Intl
          - text: – SICP-5725
      - 'row "Series: Disco Fever 40"':
        - rowheader "Series:":
          - heading "Series:" [level=2]
        - cell "Disco Fever 40":
          - link "Disco Fever 40":
            - /url: /label/1436847-Disco-Fever-40
      - 'row "Format: CD, Album, Limited Edition, Reissue, Remastered"':
        - rowheader "Format:":
          - heading "Format:" [level=2]
        - cell "CD, Album, Limited Edition, Reissue, Remastered":
          - link "CD":
            - /url: /search/?format_exact=CD
          - text: ", Album, Limited Edition, Reissue, Remastered"
      - 'row "Country: Japan"':
        - rowheader "Country:":
          - heading "Country:" [level=2]
        - cell "Japan":
          - link "Japan":
            - /url: /search/?country=Japan
      - 'row "Released: Mar 21, 2018"':
        - rowheader "Released:":
          - heading "Released:" [level=2]
        - cell "Mar 21, 2018":
          - link "Mar 21, 2018":
            - /url: /search/?decade=2010&year=2018
            - time: Mar 21, 2018
      - 'row "Genre: Funk / Soul"':
        - rowheader "Genre:":
          - heading "Genre:" [level=2]
        - cell "Funk / Soul":
          - link "Funk / Soul":
            - /url: /genre/funk / soul
      - 'row "Style: Disco, Funk"':
        - rowheader "Style:":
          - heading "Style:" [level=2]
        - cell "Disco, Funk":
          - link "Disco":
            - /url: /style/disco
          - text: ","
          - link "Funk":
            - /url: /style/funk
  - heading "Tracklist" [level=2]
  - button "Hide Credits"
  - table:
    - rowgroup:
      - row "1 Here We Come Written-By – J. Brown* 2:55":
        - cell "1"
        - cell
        - cell "Here We Come Written-By – J. Brown*":
          - text: Here We Come Written-By –
          - link "J. Brown":
            - /url: /artist/530244-Jimmy-Lord-Brown
          - text: "*"
        - cell "2:55"
      - row "2 Music Matic Written-By – R. Ransom* 3:02":
        - cell "2"
        - cell
        - cell "Music Matic Written-By – R. Ransom*":
          - text: Music Matic Written-By –
          - link "R. Ransom":
            - /url: /artist/50246-Ray-Ransom
          - text: "*"
        - cell "3:02"
      - row "3 Dazz Written-By – E. Irons*, R. Ransom*, R. Hargis* 5:37":
        - cell "3"
        - cell
        - cell "Dazz Written-By – E. Irons*, R. Ransom*, R. Hargis*":
          - text: Dazz Written-By –
          - link "E. Irons":
            - /url: /artist/318098-Eddie-Irons
          - text: "*,"
          - link "R. Ransom":
            - /url: /artist/50246-Ray-Ransom
          - text: "*,"
          - link "R. Hargis":
            - /url: /artist/530239-Regi-Hargis
          - text: "*"
        - cell "5:37"
      - row "4 Can't Wait Written-By – E. Irons*, R. Ransom*, R. Hargis* 3:26":
        - cell "4"
        - cell
        - cell "Can't Wait Written-By – E. Irons*, R. Ransom*, R. Hargis*":
          - text: Can't Wait Written-By –
          - link "E. Irons":
            - /url: /artist/318098-Eddie-Irons
          - text: "*,"
          - link "R. Ransom":
            - /url: /artist/50246-Ray-Ransom
          - text: "*,"
          - link "R. Hargis":
            - /url: /artist/530239-Regi-Hargis
          - text: "*"
        - cell "3:26"
      - row "5 Southern Sunset Written-By – R. Hargis* 4:05":
        - cell "5"
        - cell
        - cell "Southern Sunset Written-By – R. Hargis*":
          - text: Southern Sunset Written-By –
          - link "R. Hargis":
            - /url: /artist/530239-Regi-Hargis
          - text: "*"
        - cell "4:05"
      - row "6 Good High Written-By – E. Irons*, R. Ransom*, R. Hargis* 3:09":
        - cell "6"
        - cell
        - cell "Good High Written-By – E. Irons*, R. Ransom*, R. Hargis*":
          - text: Good High Written-By –
          - link "E. Irons":
            - /url: /artist/318098-Eddie-Irons
          - text: "*,"
          - link "R. Ransom":
            - /url: /artist/50246-Ray-Ransom
          - text: "*,"
          - link "R. Hargis":
            - /url: /artist/530239-Regi-Hargis
          - text: "*"
        - cell "3:09"
      - row "7 Brick City Written-By – D. Nevins* 6:21":
        - cell "7"
        - cell
        - cell "Brick City Written-By – D. Nevins*":
          - text: Brick City Written-By –
          - link "D. Nevins":
            - /url: /artist/537848-Donald-Nevins
          - text: "*"
        - cell "6:21"
      - row "8 Sister Twister Written-By – D. Nevins*, E. Irons*, J. Brown*, R. Ransom*, R. Hargis* 3:35":
        - cell "8"
        - cell
        - cell "Sister Twister Written-By – D. Nevins*, E. Irons*, J. Brown*, R. Ransom*, R. Hargis*":
          - text: Sister Twister Written-By –
          - link "D. Nevins":
            - /url: /artist/537848-Donald-Nevins
          - text: "*,"
          - link "E. Irons":
            - /url: /artist/318098-Eddie-Irons
          - text: "*,"
          - link "J. Brown":
            - /url: /artist/530244-Jimmy-Lord-Brown
          - text: "*,"
          - link "R. Ransom":
            - /url: /artist/50246-Ray-Ransom
          - text: "*,"
          - link "R. Hargis":
            - /url: /artist/530239-Regi-Hargis
          - text: "*"
        - cell "3:35"
      - row "9 That's What It's All About Written-By – J. Brown* 4:21":
        - cell "9"
        - cell
        - cell "That's What It's All About Written-By – J. Brown*":
          - text: That's What It's All About Written-By –
          - link "J. Brown":
            - /url: /artist/530244-Jimmy-Lord-Brown
          - text: "*"
        - cell "4:21"
      - row "Bonus Tracks":
        - cell
        - cell
        - cell "Bonus Tracks"
        - cell
      - row "10 Dazz (Dazz Disco Mix) 3:25":
        - cell "10"
        - cell
        - cell "Dazz (Dazz Disco Mix)"
        - cell "3:25"
      - row "11 That's What It's All About (Single Version) 3:43":
        - cell "11"
        - cell
        - cell "That's What It's All About (Single Version)"
        - cell "3:43"
  - heading "Companies, etc." [level=2]
  - list:
    - listitem:
      - text: Manufactured By –
      - link "Sony Music Labels Inc.":
        - /url: /label/681762-Sony-Music-Labels-Inc
    - listitem:
      - text: Phonographic Copyright ℗ –
      - link "Sony Music Entertainment":
        - /url: /label/29073-Sony-Music-Entertainment
    - listitem:
      - text: Copyright © –
      - link "Sony Music Entertainment":
        - /url: /label/29073-Sony-Music-Entertainment
    - listitem:
      - text: Record Company –
      - link "Sony Music Labels":
        - /url: /label/681346-Sony-Music-Labels
    - listitem:
      - text: Published By –
      - link "Silver Cloud Music":
        - /url: /label/274554-Silver-Cloud-Music
    - listitem:
      - text: Published By –
      - link "Trolley Music":
        - /url: /label/274555-Trolley-Music
  - heading "Credits" [level=2]
  - list:
    - listitem:
      - text: Arranged By [String] –
      - link "Skip Lane":
        - /url: /artist/393022-Skip-Lane
    - listitem:
      - text: Art Direction –
      - link "Ken Thompson (2)":
        - /url: /artist/2162871-Ken-Thompson-2
    - listitem:
      - text: Backing Vocals –
      - link "Doris (3)":
        - /url: /artist/530245-Doris-3
      - text: ","
      - link "Veronica (7)":
        - /url: /artist/530237-Veronica-7
    - listitem:
      - text: Copyist –
      - link "Steve Sherrill":
        - /url: /artist/530236-Steve-Sherrill
    - listitem:
      - text: Engineer [Assistant] –
      - link "Phil Benton":
        - /url: /artist/300126-Phil-Benton
    - listitem:
      - text: Engineer [Chief] –
      - link "Johnny Duncan":
        - /url: /artist/401438-Johnny-Duncan
    - listitem:
      - text: Management –
      - link "Mainstreet Management Associates":
        - /url: /artist/5951084-Mainstreet-Management-Associates
    - listitem:
      - text: Mastered By –
      - link "Milan Bogdan":
        - /url: /artist/295619-Milan-Bogdan
    - listitem:
      - text: Orchestra –
      - link "The Atlanta Symphony":
        - /url: /artist/636851-Atlanta-Symphony-Orchestra
      - text: "*"
    - listitem:
      - text: Photography By –
      - link "Richard Hoflich":
        - /url: /artist/2324577-Richard-Hoflich
    - listitem:
      - text: Producer –
      - link "Brick":
        - /url: /artist/3451-Brick
      - text: ","
      - link "Jim Healy":
        - /url: /artist/401439-Jim-Healy
      - text: ","
      - link "Johnny Duncan":
        - /url: /artist/401438-Johnny-Duncan
      - text: ","
      - link "Robert E. Lee":
        - /url: /artist/401440-Robert-E-Lee
    - listitem:
      - text: Strings [The Atlanta Symphony Player] –
      - link "Benjamin Picone":
        - /url: /artist/530235-Benjamin-Picone
      - text: ","
      - link "David Arenz":
        - /url: /artist/530243-David-Arenz
      - text: ","
      - link "Frank Walton (2)":
        - /url: /artist/537847-Frank-Walton-2
      - text: ","
      - link "Heidi Nitchie":
        - /url: /artist/530240-Heidi-Nitchie
      - text: ","
      - link "Larry LeMaster":
        - /url: /artist/530242-Larry-LeMaster
      - text: ","
      - link "Patricio Salvatierra":
        - /url: /artist/530241-Patricio-Salvatierra
      - text: ","
      - link "Willard Shull":
        - /url: /artist/530247-Willard-Shull
    - listitem:
      - text: Vocals, Bass –
      - link "Ray Ransom":
        - /url: /artist/50246-Ray-Ransom
    - listitem:
      - text: Vocals, Drums –
      - link "Eddie Irons":
        - /url: /artist/318098-Eddie-Irons
    - listitem:
      - text: Vocals, Guitar –
      - link "Regi Hargis":
        - /url: /artist/530239-Regi-Hargis
    - listitem:
      - text: Vocals, Keyboards –
      - link "Don Nevins":
        - /url: /artist/537848-Donald-Nevins
      - text: "*"
    - listitem:
      - text: Vocals, Saxophone, Flute, Trombone, Trumpet –
      - link "Jimmy \"Lord\" Brown":
        - /url: /artist/530244-Jimmy-Lord-Brown
  - heading "Notes" [level=2]
  - text: Printed in Japan
  - heading "Barcode and Other Identifiers" [level=2]
  - list:
    - listitem: "Barcode (Print): 4 547366 345506"
    - listitem: "Barcode (String): 4547366345506"
    - listitem: "Other (RRP): ¥1,000"
    - listitem: "Rights Society: JASRAC"
    - listitem: "Matrix / Runout: PLDA-4354 1"
    - listitem: "Mastering SID Code: IFPI L275"
    - listitem: "Mould SID Code: IFPI 455T"
  - heading "Other Versions" [level=2]
  - img "loading"
  - heading "Recommendations" [level=2]
  - img "loading"
  - heading "Reviews" [level=2]
  - img "loading"
  - heading "Release" [level=2]
  - button "Copy Release Code": "[r11743611]"
  - link "Edit Release":
    - /url: /release/11743611-Good-High/history#latest
  - link "See all versions":
    - /url: /master/84968-Brick-Good-High
  - text: Recently Edited
  - heading "For sale on Discogs" [level=2]
  - link "Sell a Copy":
    - /url: /sell/post/11743611
    - text: Sell a copy
  - heading [level=2]
  - link "13 copies":
    - /url: /sell/release/11743611
  - text: from €10.00
  - link "Shop now":
    - /url: /sell/release/11743611
  - heading "Statistics" [level=2]
  - list:
    - listitem:
      - text: "Have:"
      - link "41":
        - /url: /release/stats/11743611
    - listitem:
      - text: "Want:"
      - link "72":
        - /url: /release/stats/11743611
    - listitem: "Avg Rating: 4 / 5"
    - listitem:
      - text: "Ratings:"
      - link "2":
        - /url: /release/stats/11743611
  - list:
    - listitem:
      - text: "Last Sold:"
      - link "Apr 21, 2025":
        - /url: /sell/history/11743611
        - time: Apr 21, 2025
    - listitem: "Low: €5.94"
    - listitem: "Median: €13.17"
    - listitem: "High: €40.68"
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
  - heading "Videos (10)" [level=2]
  - img
  - link "Edit":
    - /url: /release/11743611-/videos/update
  - button "Play":
    - img "Play"
  - list:
    - listitem:
      - button "Play Brick - Good High 1976 (Full Album Vinyl) 0:00":
        - img "Play"
        - text: Brick - Good High 1976 (Full Album Vinyl) 0:00
    - listitem:
      - button "Play Brick - Dazz (Audio) 5:39":
        - img "Play"
        - text: Brick - Dazz (Audio) 5:39
    - listitem:
      - button "Play Brick City 6:21":
        - img "Play"
        - text: Brick City 6:21
    - listitem:
      - button "Play That's What It's All About 3:42":
        - img "Play"
        - text: That's What It's All About 3:42
    - listitem:
      - button "Play Can't Wait 3:26":
        - img "Play"
        - text: Can't Wait 3:26
    - listitem:
      - button "Play Here We Come 2:54":
        - img "Play"
        - text: Here We Come 2:54
    - listitem:
      - button "Play Southern Sunset 4:05":
        - img "Play"
        - text: Southern Sunset 4:05
    - listitem:
      - button "Play That's What It's All About 4:20":
        - img "Play"
        - text: That's What It's All About 4:20
    - listitem:
      - button "Play Dazz (Dazz Disco Mix) 3:25":
        - img "Play"
        - text: Dazz (Dazz Disco Mix) 3:25
    - listitem:
      - button "Play Sister Twister 3:34":
        - img "Play"
        - text: Sister Twister 3:34
  - heading "Lists" [level=2]
  - button "Expand section"
  - heading "Contributors" [level=2]
  - link "alan.james":
    - /url: /user/alan.james
  - text: ","
  - link "Lejnar":
    - /url: /user/Lejnar
  - text: ","
  - link "thediscopalace":
    - /url: /user/thediscopalace
  - text: ","
  - link "choan":
    - /url: /user/choan
  - text: ","
  - link "al1":
    - /url: /user/al1
  - text: ","
  - link "drombulja":
    - /url: /user/drombulja
  - link "Report Suspicious Activity":
    - /url: /release/11743611/report
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
  26 |     addToCollection: this.page.getByRole('button', { name: 'Add to Collection' }),
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
  79 |
  80 |   async clearCollectionTableIfExists() {
  81 |     while (await this.buttons.removeButton.count()) {
  82 |       await this.buttons.removeButton.first().click();
  83 |     }
  84 |   }
  85 | }
  86 |
```
# Test info

- Name: Release - UI >> Structure release
- Location: C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\tests\release.spec.ts:4:7

# Error details

```
Error: expect(locator).toContainText(expected)

Locator: locator('.table_c5ftk tr:nth-child(5) td')
Expected string: "Rock, Pop"
Received string: "Jun 10, 2015"
Call log:
  - expect.soft.toContainText with timeout 5000ms
  - waiting for locator('.table_c5ftk tr:nth-child(5) td')
    4 × locator resolved to <td>…</td>
      - unexpected value "Jun 10, 2015"

    at ReleasePage.verifyReleaseStructure (C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\pages\release.page.ts:65:52)
    at C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\tests\release.spec.ts:8:5
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
  - heading "The Cyrkle = ザ・サークル* – Red Rubber Ball = レッド・ラバー・ボール" [level=1]:
    - link "The Cyrkle":
      - /url: /artist/223743-The-Cyrkle
    - text: =
    - link "ザ・サークル":
      - /url: /artist/223743-The-Cyrkle
    - text: "* – Red Rubber Ball = レッド・ラバー・ボール"
  - link "The Cyrkle - Red Rubber Ball = レッド・ラバー・ボール album cover More images":
    - /url: /release/8985472-The-Cyrkle-%E3%82%B6%E3%82%B5%E3%83%BC%E3%82%AF%E3%83%AB-Red-Rubber-Ball-%E3%83%AC%E3%83%83%E3%83%89%E3%83%A9%E3%83%90%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%AB/image/SW1hZ2U6MjQ1NDYyNTU=?redirected=true
    - img "The Cyrkle - Red Rubber Ball = レッド・ラバー・ボール album cover"
    - paragraph: More images
  - table:
    - rowgroup:
      - 'row "Label: Sony Records Int''l – SICP 4453"':
        - rowheader "Label:":
          - heading "Label:" [level=2]
        - cell "Sony Records Int'l – SICP 4453":
          - link "Sony Records Int'l":
            - /url: /label/262232-Sony-Records-Intl
          - text: – SICP 4453
      - 'row "Series: Tower Records X Sony Music Japan International スペジャルセレクション Vol.1"':
        - rowheader "Series:":
          - heading "Series:" [level=2]
        - cell "Tower Records X Sony Music Japan International スペジャルセレクション Vol.1":
          - link "Tower Records X Sony Music Japan International スペジャルセレクション Vol.1":
            - /url: /label/1049617-Tower-Records-X-Sony-Music-Japan-International-スペジャルセレクション-Vol1
      - 'row "Format: CD, Album, Reissue, Remastered"':
        - rowheader "Format:":
          - heading "Format:" [level=2]
        - cell "CD, Album, Reissue, Remastered":
          - link "CD":
            - /url: /search/?format_exact=CD
          - text: ", Album, Reissue, Remastered"
      - 'row "Country: Japan"':
        - rowheader "Country:":
          - heading "Country:" [level=2]
        - cell "Japan":
          - link "Japan":
            - /url: /search/?country=Japan
      - 'row "Released: Jun 10, 2015"':
        - rowheader "Released:":
          - heading "Released:" [level=2]
        - cell "Jun 10, 2015":
          - link "Jun 10, 2015":
            - /url: /search/?decade=2010&year=2015
            - time: Jun 10, 2015
      - 'row "Genre: Rock, Pop"':
        - rowheader "Genre:":
          - heading "Genre:" [level=2]
        - cell "Rock, Pop":
          - link "Rock":
            - /url: /genre/rock
          - text: ","
          - link "Pop":
            - /url: /genre/pop
      - 'row "Style: Psychedelic Rock, Pop Rock"':
        - rowheader "Style:":
          - heading "Style:" [level=2]
        - cell "Psychedelic Rock, Pop Rock":
          - link "Psychedelic Rock":
            - /url: /style/psychedelic rock
          - text: ","
          - link "Pop Rock":
            - /url: /style/pop rock
  - heading "Tracklist" [level=2]
  - button "Hide Credits"
  - table:
    - rowgroup:
      - row "1 Red Rubber Ball = レッド・ラバー・ボール Written-By – B. Woodley*, P. Simon* 2:19":
        - cell "1"
        - cell
        - cell "Red Rubber Ball = レッド・ラバー・ボール Written-By – B. Woodley*, P. Simon*":
          - text: Red Rubber Ball = レッド・ラバー・ボール Written-By –
          - link "B. Woodley":
            - /url: /artist/434631-Bruce-Woodley
          - text: "*,"
          - link "P. Simon":
            - /url: /artist/106474-Paul-Simon
          - text: "*"
        - cell "2:19"
      - row "2 Why Can't You Give Me What I Want = 愛のためらい Written-By – S. Friedland*, T. Dawes* 2:27":
        - cell "2"
        - cell
        - cell "Why Can't You Give Me What I Want = 愛のためらい Written-By – S. Friedland*, T. Dawes*":
          - text: Why Can't You Give Me What I Want = 愛のためらい Written-By –
          - link "S. Friedland":
            - /url: /artist/1332975-Stephen-Friedland
          - text: "*,"
          - link "T. Dawes":
            - /url: /artist/277285-Tom-Dawes
          - text: "*"
        - cell "2:27"
      - row "3 Baby, You're Free = もう自由なんだから Written-By – B. Crewe*, G. Weston* 2:43":
        - cell "3"
        - cell
        - cell "Baby, You're Free = もう自由なんだから Written-By – B. Crewe*, G. Weston*":
          - text: Baby, You're Free = もう自由なんだから Written-By –
          - link "B. Crewe":
            - /url: /artist/142834-Bob-Crewe
          - text: "*,"
          - link "G. Weston":
            - /url: /artist/864806-Gary-Weston-2
          - text: "*"
        - cell "2:43"
      - row "4 Big, Little Woman = ビッグ・リトル・ウーマン Written-By – D. Dannemann*, T. Dawes* 2:23":
        - cell "4"
        - cell
        - cell "Big, Little Woman = ビッグ・リトル・ウーマン Written-By – D. Dannemann*, T. Dawes*":
          - text: Big, Little Woman = ビッグ・リトル・ウーマン Written-By –
          - link "D. Dannemann":
            - /url: /artist/865493-Don-Dannemann
          - text: "*,"
          - link "T. Dawes":
            - /url: /artist/277285-Tom-Dawes
          - text: "*"
        - cell "2:23"
      - row "5 Cloudy = 曇り空 Written-By – P. Simon* 2:13":
        - cell "5"
        - cell
        - cell "Cloudy = 曇り空 Written-By – P. Simon*":
          - text: Cloudy = 曇り空 Written-By –
          - link "P. Simon":
            - /url: /artist/106474-Paul-Simon
          - text: "*"
        - cell "2:13"
      - row "6 Cry = クライ Written-By – D. Dannemann*, T. Dawes* 2:38":
        - cell "6"
        - cell
        - cell "Cry = クライ Written-By – D. Dannemann*, T. Dawes*":
          - text: Cry = クライ Written-By –
          - link "D. Dannemann":
            - /url: /artist/865493-Don-Dannemann
          - text: "*,"
          - link "T. Dawes":
            - /url: /artist/277285-Tom-Dawes
          - text: "*"
        - cell "2:38"
      - row "7 Turn-Down Day = ターン・ダウン・デイ Written-By – D. Blume*, J. Keller* 2:33":
        - cell "7"
        - cell
        - cell "Turn-Down Day = ターン・ダウン・デイ Written-By – D. Blume*, J. Keller*":
          - text: Turn-Down Day = ターン・ダウン・デイ Written-By –
          - link "D. Blume":
            - /url: /artist/281689-Dave-Blume
          - text: "*,"
          - link "J. Keller":
            - /url: /artist/319871-Jerry-Keller
          - text: "*"
        - cell "2:33"
      - row "8 There's A Fire In The Fireplace = 火のある暖炉 Written-By – S. Friedland* 2:24":
        - cell "8"
        - cell
        - cell "There's A Fire In The Fireplace = 火のある暖炉 Written-By – S. Friedland*":
          - text: There's A Fire In The Fireplace = 火のある暖炉 Written-By –
          - link "S. Friedland":
            - /url: /artist/1332975-Stephen-Friedland
          - text: "*"
        - cell "2:24"
      - row "9 Bony Moronie = ボニー・マロニー Written-By – L. Williams* 2:32":
        - cell "9"
        - cell
        - cell "Bony Moronie = ボニー・マロニー Written-By – L. Williams*":
          - text: Bony Moronie = ボニー・マロニー Written-By –
          - link "L. Williams":
            - /url: /artist/553067-Larry-Williams-3
          - text: "*"
        - cell "2:32"
      - row "10 How Can I Leave Her = ハウ・キャン・アイ・リーヴ・ハー Written-By – D. Dannemann*, T. Dawes* 2:37":
        - cell "10"
        - cell
        - cell "How Can I Leave Her = ハウ・キャン・アイ・リーヴ・ハー Written-By – D. Dannemann*, T. Dawes*":
          - text: How Can I Leave Her = ハウ・キャン・アイ・リーヴ・ハー Written-By –
          - link "D. Dannemann":
            - /url: /artist/865493-Don-Dannemann
          - text: "*,"
          - link "T. Dawes":
            - /url: /artist/277285-Tom-Dawes
          - text: "*"
        - cell "2:37"
      - row "11 Money To Burn = マネー・トゥ・バーン Written-By – D. Dannemann*, T. Dawes* 3:05":
        - cell "11"
        - cell
        - cell "Money To Burn = マネー・トゥ・バーン Written-By – D. Dannemann*, T. Dawes*":
          - text: Money To Burn = マネー・トゥ・バーン Written-By –
          - link "D. Dannemann":
            - /url: /artist/865493-Don-Dannemann
          - text: "*,"
          - link "T. Dawes":
            - /url: /artist/277285-Tom-Dawes
          - text: "*"
        - cell "3:05"
      - row "Bonus Tracks":
        - cell
        - cell
        - cell "Bonus Tracks"
        - cell
      - row "12 Straighten Out My Messed Up Life = ストレイトン・アウト・マイ・メスト・アップ・ライヴ Written-By – R. Morrison (3) 2:03":
        - cell "12"
        - cell
        - cell "Straighten Out My Messed Up Life = ストレイトン・アウト・マイ・メスト・アップ・ライヴ Written-By – R. Morrison (3)":
          - text: Straighten Out My Messed Up Life = ストレイトン・アウト・マイ・メスト・アップ・ライヴ Written-By –
          - link "R. Morrison (3)":
            - /url: /artist/3308155-R-Morrison-3
        - cell "2:03"
      - row "13 Downtown Blues = ダウンタウン・ブルース Written-By – D. Dannemann*, T. Dawes* 3:33":
        - cell "13"
        - cell
        - cell "Downtown Blues = ダウンタウン・ブルース Written-By – D. Dannemann*, T. Dawes*":
          - text: Downtown Blues = ダウンタウン・ブルース Written-By –
          - link "D. Dannemann":
            - /url: /artist/865493-Don-Dannemann
          - text: "*,"
          - link "T. Dawes":
            - /url: /artist/277285-Tom-Dawes
          - text: "*"
        - cell "3:33"
      - row "14 How Can I Leave Her = ハウ・キャン・アイ・リーヴ・ハー (デモ・ヴァージョン) Written-By – D. Dannemann*, T. Dawes* 2:35":
        - cell "14"
        - cell
        - cell "How Can I Leave Her = ハウ・キャン・アイ・リーヴ・ハー (デモ・ヴァージョン) Written-By – D. Dannemann*, T. Dawes*":
          - text: How Can I Leave Her = ハウ・キャン・アイ・リーヴ・ハー (デモ・ヴァージョン) Written-By –
          - link "D. Dannemann":
            - /url: /artist/865493-Don-Dannemann
          - text: "*,"
          - link "T. Dawes":
            - /url: /artist/277285-Tom-Dawes
          - text: "*"
        - cell "2:35"
      - row "15 Money To Burn = マネー・トゥ・バーン (デモ・ヴァージョン) Written-By – D. Dannemann*, T. Dawes* 3:18":
        - cell "15"
        - cell
        - cell "Money To Burn = マネー・トゥ・バーン (デモ・ヴァージョン) Written-By – D. Dannemann*, T. Dawes*":
          - text: Money To Burn = マネー・トゥ・バーン (デモ・ヴァージョン) Written-By –
          - link "D. Dannemann":
            - /url: /artist/865493-Don-Dannemann
          - text: "*,"
          - link "T. Dawes":
            - /url: /artist/277285-Tom-Dawes
          - text: "*"
        - cell "3:18"
      - row "16 We Had A Good Thing Goin' = ウィ・ハッド・ア・グッド・シング・ゴーイン (モノ・シングル・ヴァージョン) Written-By – H. Greenfield*, N. Sedaka* 2:45":
        - cell "16"
        - cell
        - cell "We Had A Good Thing Goin' = ウィ・ハッド・ア・グッド・シング・ゴーイン (モノ・シングル・ヴァージョン) Written-By – H. Greenfield*, N. Sedaka*":
          - text: We Had A Good Thing Goin' = ウィ・ハッド・ア・グッド・シング・ゴーイン (モノ・シングル・ヴァージョン) Written-By –
          - link "H. Greenfield":
            - /url: /artist/575271-Howard-Greenfield
          - text: "*,"
          - link "N. Sedaka":
            - /url: /artist/123159-Neil-Sedaka
          - text: "*"
        - cell "2:45"
      - row "17 Reading Her Paper = リーディング・ハー・ペーパー (モノ・シングル・ヴァージョン) Written-By – B. Cooper*, F. Catana* 3:02":
        - cell "17"
        - cell
        - cell "Reading Her Paper = リーディング・ハー・ペーパー (モノ・シングル・ヴァージョン) Written-By – B. Cooper*, F. Catana*":
          - text: Reading Her Paper = リーディング・ハー・ペーパー (モノ・シングル・ヴァージョン) Written-By –
          - link "B. Cooper":
            - /url: /artist/1411628-Barbara-Cooper
          - text: "*,"
          - link "F. Catana":
            - /url: /artist/1278150-Frank-Catana
          - text: "*"
        - cell "3:02"
      - row "18 Penny Arcade = ペニー・アーケイド (モノ・シングル・ヴァージョン) Written-By – D. Randell*, S. Linzer* 2:39":
        - cell "18"
        - cell
        - cell "Penny Arcade = ペニー・アーケイド (モノ・シングル・ヴァージョン) Written-By – D. Randell*, S. Linzer*":
          - text: Penny Arcade = ペニー・アーケイド (モノ・シングル・ヴァージョン) Written-By –
          - link "D. Randell":
            - /url: /artist/277171-Denny-Randell
          - text: "*,"
          - link "S. Linzer":
            - /url: /artist/153544-Sandy-Linzer
          - text: "*"
        - cell "2:39"
      - row "19 The Words = ザ・ワーズ (モノ・シングル・ヴァージョン) Written-By – The Cyrkle, T. Dawes* 7:03":
        - cell "19"
        - cell
        - cell "The Words = ザ・ワーズ (モノ・シングル・ヴァージョン) Written-By – The Cyrkle, T. Dawes*":
          - text: The Words = ザ・ワーズ (モノ・シングル・ヴァージョン) Written-By –
          - link "The Cyrkle":
            - /url: /artist/223743-The-Cyrkle
          - text: ","
          - link "T. Dawes":
            - /url: /artist/277285-Tom-Dawes
          - text: "*"
        - cell "7:03"
  - heading "Companies, etc." [level=2]
  - list:
    - listitem:
      - text: Record Company –
      - link "Sony Music Labels":
        - /url: /label/681346-Sony-Music-Labels
    - listitem:
      - text: Phonographic Copyright ℗ –
      - link "Sony Music Entertainment":
        - /url: /label/29073-Sony-Music-Entertainment
    - listitem:
      - text: Copyright © –
      - link "Sony Music Entertainment":
        - /url: /label/29073-Sony-Music-Entertainment
    - listitem:
      - text: Manufactured By –
      - link "Sony Music Labels Inc.":
        - /url: /label/681762-Sony-Music-Labels-Inc
  - heading "Credits" [level=2]
  - list:
    - listitem:
      - text: Arranged By –
      - link "The Cyrkle":
        - /url: /artist/223743-The-Cyrkle
    - listitem:
      - text: Liner Notes [2015年4月] –
      - link "細川真平":
        - /url: /artist/5395814-細川真平
    - listitem:
      - text: Liner Notes [歌詞対訳] –
      - link "ビジネス日本語協会 [BNA]":
        - /url: /artist/3990554-Business-Nihongo-Association
      - text: "* (tracks: 3, 4, 6, 8, 9, 11),"
      - link "ラッセル・グドール / UNICUL":
        - /url: /artist/6178901-Russell-Goodall
      - text: "* (tracks: 12, 13),"
      - link "家本清美":
        - /url: /artist/9805453-家本清美
      - text: "(tracks: 1, 2, 5, 7, 10)"
    - listitem:
      - text: Photography By [Cover Photo] –
      - link "Don Hunstein":
        - /url: /artist/1905443-Don-Hunstein
    - listitem:
      - text: Producer, Arranged By –
      - link "John Simon":
        - /url: /artist/252101-John-Simon
  - heading "Notes" [level=2]
  - text: Track 19 includes an interview with The Cyrkle after the song is over.
  - heading "Barcode and Other Identifiers" [level=2]
  - list:
    - listitem: "Barcode (obi): 4 547366 238211"
    - listitem: "Matrix / Runout: PLDA-3118 1"
    - listitem: "Mastering SID Code: IFPI L276"
    - listitem: "Mould SID Code: IFPI 455C"
    - listitem: "Rights Society: JASRAC"
    - listitem: "Other (Price): ¥1,300"
  - heading "Other Versions" [level=2]
  - img "loading"
  - heading "Recommendations" [level=2]
  - img "loading"
  - heading "Reviews" [level=2]
  - img "loading"
  - heading "Release" [level=2]
  - button "Copy Release Code": "[r8985472]"
  - link "Edit Release":
    - /url: /release/8985472-Red-Rubber-Ball/history#latest
  - link "See all versions":
    - /url: /master/337111-The-Cyrkle-Red-Rubber-Ball
  - text: Recently Edited
  - heading "For sale on Discogs" [level=2]
  - link "Sell a Copy":
    - /url: /sell/post/8985472
    - text: Sell a copy
  - heading [level=2]
  - link "7 copies":
    - /url: /sell/release/8985472
  - text: from €16.90
  - link "Shop now":
    - /url: /sell/release/8985472
  - heading "Statistics" [level=2]
  - list:
    - listitem:
      - text: "Have:"
      - link "12":
        - /url: /release/stats/8985472
    - listitem:
      - text: "Want:"
      - link "26":
        - /url: /release/stats/8985472
    - listitem: "Avg Rating: 5 / 5"
    - listitem:
      - text: "Ratings:"
      - link "2":
        - /url: /release/stats/8985472
  - list:
    - listitem:
      - text: "Last Sold:"
      - link "Oct 3, 2020":
        - /url: /sell/history/8985472
        - time: Oct 3, 2020
    - listitem: "Low: €12.45"
    - listitem: "Median: €12.45"
    - listitem: "High: €12.45"
  - button "Rate this release 1 star"
  - button "Rate this release 2 stars"
  - button "Rate this release 3 stars"
  - button "Rate this release 4 stars"
  - button "Rate this release 5 stars"
  - button "Remove Rating" [disabled]
  - button "Share"
  - button "Add to Collection"
  - button "Add to Wantlist"
  - heading "Videos (11)" [level=2]
  - img
  - link "Edit":
    - /url: /release/8985472-/videos/update
  - button "Play":
    - img "Play"
  - list:
    - listitem:
      - button "Play Red Rubber Ball - Cyrkle, The 2:14":
        - img "Play"
        - text: Red Rubber Ball - Cyrkle, The 2:14
    - listitem:
      - button "Play The Cyrkle - Bony Moronie 2:36":
        - img "Play"
        - text: The Cyrkle - Bony Moronie 2:36
    - listitem:
      - button "Play Why Can't You Give Me What I Want 2:28":
        - img "Play"
        - text: Why Can't You Give Me What I Want 2:28
    - listitem:
      - button "Play Baby, You're Free 2:44":
        - img "Play"
        - text: Baby, You're Free 2:44
    - listitem:
      - button "Play Cloudy 2:13":
        - img "Play"
        - text: Cloudy 2:13
    - listitem:
      - button "Play Cry 2:38":
        - img "Play"
        - text: Cry 2:38
    - listitem:
      - button "Play Money to Burn 3:06":
        - img "Play"
        - text: Money to Burn 3:06
    - listitem:
      - button "Play There's a Fire in the Fireplace 2:25":
        - img "Play"
        - text: There's a Fire in the Fireplace 2:25
    - listitem:
      - button "Play How Can I Leave Her 2:38":
        - img "Play"
        - text: How Can I Leave Her 2:38
    - listitem:
      - button "Play Big, Little Woman 2:23":
        - img "Play"
        - text: Big, Little Woman 2:23
    - listitem:
      - button "Play Turn-Down Day 2:33":
        - img "Play"
        - text: Turn-Down Day 2:33
  - heading "Lists" [level=2]
  - button "Expand section"
  - heading "Contributors" [level=2]
  - link "Moose.f":
    - /url: /user/Moose.f
  - text: ","
  - link "jweijde":
    - /url: /user/jweijde
  - text: ","
  - link "RingoStarr39":
    - /url: /user/RingoStarr39
  - text: ","
  - link "choan":
    - /url: /user/choan
  - link "Report Suspicious Activity":
    - /url: /release/8985472/report
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
   7 |
   8 | export class ReleasePage extends BasePage {
   9 |   
  10 |   private url = `${Environment.BASE_UI_URL}${Endpoints.RELEASE}{releaseId}`
  11 |
  12 |   private buttonsText = {
  13 |     addToCollectionText: 'Add to Collection'
  14 |   };
  15 |
  16 |   private pageElements = {
  17 |     blockTrackInfo: this.page.locator('.body_utiDG'),
  18 |     trackList: this.page.locator('#release-tracklist'),
  19 |     releaseStats: this.page.locator('#release-stats'),
  20 |     inCollectionTable: this.page.locator('.box_PFmyl')
  21 |   };
  22 |
  23 |   private buttons = {
  24 |     addToCollection: this.page.locator('button', { hasText: this.buttonsText.addToCollectionText }),
  25 |     removeButton: this.page.locator('button', { hasText: 'Remove' })
  26 |   };
  27 |
  28 |   private releaseElements = {
  29 |     releaseTitle: this.page.locator('h1.title_Brnd1'),
  30 |     releaseArtist: this.page.locator('.link_PKPcS').first(),
  31 |     releaseLabel: this.page.locator('.table_c5ftk tr:nth-child(1) td'),
  32 |     releaseFormat: this.page.locator('.table_c5ftk tr:nth-child(2) td'),
  33 |     releaseCountry: this.page.locator('.table_c5ftk tr:nth-child(3) td'),
  34 |     releaseYear: this.page.locator('.table_c5ftk tr:nth-child(4) td'),
  35 |     releaseGenre: this.page.locator('.table_c5ftk tr:nth-child(5) td'),
  36 |     releaseStyle: this.page.locator('.table_c5ftk tr:nth-child(6) td')
  37 |   };
  38 |
  39 |   constructor(page: Page) {
  40 |     super(page);
  41 |
  42 |   }
  43 |
  44 |   async goto(releaseID: number) {
  45 |     await this.gotoByUrl(`${Environment.BASE_UI_URL}${Endpoints.RELEASE}${releaseID}`);
  46 |   }
  47 |
  48 |   async verifyReleasePage() {
  49 |     expect(this.pageElements.blockTrackInfo).toBeVisible();
  50 |     expect(this.pageElements.trackList).toBeVisible();
  51 |     expect(this.pageElements.releaseStats).toBeVisible();
  52 |   }
  53 |
  54 |   async verifyReleaseStructure(release: ReleaseResponse) {
  55 |     const info = UIDataHelper.convertReleaseInfo(release);
  56 |
  57 |     expect.soft(this.releaseElements.releaseTitle).toContainText(info.title);
  58 |     expect.soft(this.releaseElements.releaseArtist).toContainText(info.artist);
  59 |     expect.soft(this.releaseElements.releaseLabel).toContainText(info.label);
  60 |     for (const part of info.formatParts) {
  61 |       await expect.soft(this.releaseElements.releaseFormat).toContainText(part);
  62 |     }
  63 |     expect.soft(this.releaseElements.releaseCountry).toContainText(info.country);
  64 |     expect.soft(this.releaseElements.releaseYear).toContainText(info.year);
> 65 |     expect.soft(this.releaseElements.releaseGenre).toContainText(info.genre);
     |                                                    ^ Error: expect(locator).toContainText(expected)
  66 |     expect.soft(this.releaseElements.releaseStyle).toContainText(info.style);
  67 |   }
  68 |
  69 |   async addReleaseToCollectionAndVerifyNotification() {
  70 |     await this.buttons.addToCollection.click();
  71 |     expect(this.pageElements.inCollectionTable).toBeVisible();
  72 |   }
  73 |
  74 |   async removeFromCollectionAndVerifyTable() {
  75 |     await this.buttons.removeButton.click();
  76 |     expect(this.pageElements.inCollectionTable).toBeHidden();
  77 |   }
  78 | }
  79 |
```
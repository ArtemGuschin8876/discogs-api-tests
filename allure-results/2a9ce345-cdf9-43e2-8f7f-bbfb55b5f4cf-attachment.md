# Test info

- Name: Release page tests >> Click remove on the notification and check hidden notification
- Location: C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\tests\release.spec.ts:19:7

# Error details

```
Error: expect.toBeVisible: Error: strict mode violation: locator('.box_PFmyl').filter({ has: locator('h3').filter({ hasText: 'In Collection' }).first() }) resolved to 6 elements:
    1) <div class="box_PFmyl collection_DQxgF">…</div> aka getByText('In CollectionAdded 28 hours ago RemoveMedia ConditionEditMint (M)Near Mint (NM').first()
    2) <div class="box_PFmyl collection_DQxgF">…</div> aka getByText('In CollectionAdded 28 hours ago RemoveMedia ConditionEditMint (M)Near Mint (NM').nth(1)
    3) <div class="box_PFmyl collection_DQxgF">…</div> aka getByText('In CollectionAdded 28 hours ago RemoveMedia ConditionEditMint (M)Near Mint (NM').nth(2)
    4) <div class="box_PFmyl collection_DQxgF">…</div> aka getByText('In CollectionAdded 28 hours ago RemoveMedia ConditionEditMint (M)Near Mint (NM').nth(3)
    5) <div class="box_PFmyl collection_DQxgF">…</div> aka getByText('In CollectionAdded 112 minutes ago RemoveMedia ConditionEditMint (M)Near Mint (')
    6) <div class="box_PFmyl collection_DQxgF">…</div> aka getByText('In CollectionAdded just now RemoveMedia ConditionEditMint (M)Near Mint (NM or M')

Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('.box_PFmyl').filter({ has: locator('h3').filter({ hasText: 'In Collection' }).first() })

    at ReleasePage.addReleaseToCollectionAndVerifyNotification (C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\pages\release.page.ts:71:49)
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
  - heading "amazarashi – 虚無病" [level=1]:
    - link "amazarashi":
      - /url: /artist/2188779-amazarashi
    - text: – 虚無病
  - link "amazarashi - 虚無病 album cover More images":
    - /url: /release/9469434-amazarashi-%E8%99%9A%E7%84%A1%E7%97%85/image/SW1hZ2U6MjU5OTA4MTg=?redirected=true
    - img "amazarashi - 虚無病 album cover"
    - paragraph: More images
  - table:
    - rowgroup:
      - 'row "Label: SAR (3) – AICL 3175-7"':
        - rowheader "Label:":
          - heading "Label:" [level=2]
        - cell "SAR (3) – AICL 3175-7":
          - link "SAR (3)":
            - /url: /label/878626-SAR-3
          - text: – AICL 3175-7
      - 'row "Format: All Media, Limited Edition CD, Mini-Album DVD, DVD-Video, NTSC"':
        - rowheader "Format:":
          - heading "Format:" [level=2]
        - cell "All Media, Limited Edition CD, Mini-Album DVD, DVD-Video, NTSC":
          - link "All Media":
            - /url: /search/?format_exact=All Media
          - text: ", Limited Edition"
          - link "CD":
            - /url: /search/?format_exact=CD
          - text: ", Mini-Album"
          - link "DVD":
            - /url: /search/?format_exact=DVD
          - text: ", DVD-Video, NTSC"
      - 'row "Country: Japan"':
        - rowheader "Country:":
          - heading "Country:" [level=2]
        - cell "Japan":
          - link "Japan":
            - /url: /search/?country=Japan
      - 'row "Released: Oct 12, 2016"':
        - rowheader "Released:":
          - heading "Released:" [level=2]
        - cell "Oct 12, 2016":
          - link "Oct 12, 2016":
            - /url: /search/?decade=2010&year=2016
            - time: Oct 12, 2016
      - 'row "Genre: Rock"':
        - rowheader "Genre:":
          - heading "Genre:" [level=2]
        - cell "Rock":
          - link "Rock":
            - /url: /genre/rock
      - 'row "Style: J-pop"':
        - rowheader "Style:":
          - heading "Style:" [level=2]
        - cell "J-pop":
          - link "J-pop":
            - /url: /style/j-pop
  - heading "Tracklist" [level=2]
  - table:
    - rowgroup:
      - row "CD-1 僕が死のうと思ったのは 6:08":
        - cell "CD-1"
        - cell
        - cell "僕が死のうと思ったのは"
        - cell "6:08"
      - row "CD-2 星々の葬列 4:56":
        - cell "CD-2"
        - cell
        - cell "星々の葬列"
        - cell "4:56"
      - row "CD-3 明日には大人になる君へ 1:34":
        - cell "CD-3"
        - cell
        - cell "明日には大人になる君へ"
        - cell "1:34"
      - row "CD-4 虚無病 4:36":
        - cell "CD-4"
        - cell
        - cell "虚無病"
        - cell "4:36"
      - row "CD-5 メーデーメーデー 4:55":
        - cell "CD-5"
        - cell
        - cell "メーデーメーデー"
        - cell "4:55"
      - row "Amazarashi Premium Live Viewing 「世界分岐二〇一六」":
        - cell
        - cell
        - cell "Amazarashi Premium Live Viewing 「世界分岐二〇一六」"
        - cell
      - row "DVD-1 穴を掘っている 6:59":
        - cell "DVD-1"
        - cell
        - cell "穴を掘っている"
        - cell "6:59"
      - row "DVD-2 この街で生きている 6:40":
        - cell "DVD-2"
        - cell
        - cell "この街で生きている"
        - cell "6:40"
      - row "DVD-3 ナモナキヒト 5:56":
        - cell "DVD-3"
        - cell
        - cell "ナモナキヒト"
        - cell "5:56"
  - heading "Companies, etc." [level=2]
  - list:
    - listitem:
      - text: Record Company –
      - link "Sony Music Labels":
        - /url: /label/681346-Sony-Music-Labels
    - listitem:
      - text: Record Company –
      - link "Sony Music Labels Inc.":
        - /url: /label/681762-Sony-Music-Labels-Inc
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
      - text: Recorded At –
      - link "Aobadai Studio":
        - /url: /label/276021-Aobadai-Studio
    - listitem:
      - text: Mixed At –
      - link "Daimonion Recordings":
        - /url: /label/294903-Daimonion-Recordings
    - listitem:
      - text: Mastered At –
      - link "Sterling Sound":
        - /url: /label/264060-Sterling-Sound
  - heading "Credits" [level=2]
  - list:
    - listitem:
      - text: A&R [A&R/Assistant, SML] –
      - link "Shunsuke Ohashi":
        - /url: /artist/5419408-Shunsuke-Ohashi
    - listitem:
      - text: A&R [A&R/Director, SML] –
      - link "Takuya Kobayashi (2)":
        - /url: /artist/3856710-Takuya-Kobayashi-2
    - listitem:
      - text: Arranged By –
      - link "Yoshiaki Dewa":
        - /url: /artist/1735887-Yoshiaki-Dewa
      - text: ","
      - link "amazarashi":
        - /url: /artist/2188779-amazarashi
    - listitem:
      - text: Art Direction –
      - link "Masaya Asai":
        - /url: /artist/4362928-Masaya-Asai
      - text: ","
      - link "YKBX":
        - /url: /artist/3879756-YKBX
    - listitem:
      - text: Coordinator [Products Coordination, SMC] –
      - link "Hideyuki Sato (2)":
        - /url: /artist/4474889-Hideyuki-Sato-2
    - listitem:
      - text: Design –
      - link "Masaya Asai":
        - /url: /artist/4362928-Masaya-Asai
    - listitem:
      - text: Design Concept [Visual Concept], Artwork –
      - link "YKBX":
        - /url: /artist/3879756-YKBX
    - listitem:
      - text: Directed By [SML] –
      - link "Takuya Kobyashi":
        - /url: /artist/3856710-Takuya-Kobayashi-2
      - text: "*"
    - listitem:
      - text: Executive-Producer [Rainbow Entertainment] –
      - link "Hideichi Kurita":
        - /url: /artist/2843312-Hideichi-Kurita
    - listitem:
      - text: Executive-Producer [SML] –
      - link "Hidehiko Otani":
        - /url: /artist/3782820-Hidehiko-Otani
      - text: ","
      - link "Shunsuke Muramatsu":
        - /url: /artist/548690-Shunsuke-Muramatsu
    - listitem:
      - text: Film Director –
      - link "Atsushi Nakai":
        - /url: /artist/4032051-Atsushi-Nakai
      - text: "(tracks: DVD-1 to DVD-3)"
    - listitem:
      - text: Film Technician [Color Grading, L'espace Vision] –
      - link "Shintaro Sakai":
        - /url: /artist/4362933-Shintaro-Sakai
      - text: "(tracks: DVD-1 to DVD-3)"
    - listitem:
      - text: Film Technician [Live Mix, Aobadai Studio] –
      - link "Norikatsu Teruuchi":
        - /url: /artist/4086736-Norikatsu-Teruuchi
      - text: "(tracks: DVD-1 to DVD-3)"
    - listitem:
      - text: Film Technician [MA, L'espace Vision] –
      - link "Masahiro Suzuki (4)":
        - /url: /artist/4362930-Masahiro-Suzuki-4
      - text: "(tracks: DVD-1 to DVD-3)"
    - listitem:
      - text: Film Technician [Menu Design, L'espace Vision] –
      - link "Natsuki Takama":
        - /url: /artist/4582904-Natsuki-Takama
      - text: "(tracks: DVD-1 to DVD-3)"
    - listitem:
      - text: Management [Chief Manager, Rainbow Entertainment] –
      - link "Yukihide Hirata":
        - /url: /artist/4362924-Yukihide-Hirata
    - listitem:
      - text: Management [Manager, Rainbow Entertainment] –
      - link "Gen Shibano":
        - /url: /artist/4362931-Gen-Shibano
    - listitem:
      - text: Mastered By –
      - link "Chris Gehringer":
        - /url: /artist/326440-Chris-Gehringer
    - listitem:
      - text: Mixed By –
      - link "D.O.I.":
        - /url: /artist/149133-DOI
    - listitem:
      - text: Performer [Amazarashi Is] –
      - link "Hiromu Akita":
        - /url: /artist/4362923-Hiromu-Akita
      - text: ","
      - link "Manami Toyokawa":
        - /url: /artist/4362941-Manami-Toyokawa
    - listitem:
      - text: Producer [General Producer, SML] –
      - link "Takeshi Kimura (2)":
        - /url: /artist/4979212-Takeshi-Kimura-2
    - listitem:
      - text: Promotion [Sales Promotion, SMM] –
      - link "Kenta Shito":
        - /url: /artist/5419407-Kenta-Shito
      - text: ","
      - link "Yuya Kouno":
        - /url: /artist/5202179-Yuya-Kouno
    - listitem:
      - text: Promotion [Web Promotion, SMM] –
      - link "Wataru Majima":
        - /url: /artist/4979199-Wataru-Majima
    - listitem:
      - text: Recorded By –
      - link "Norikatsu Teruuchi":
        - /url: /artist/4086736-Norikatsu-Teruuchi
  - heading "Notes" [level=2]
  - text: "Slipcase and back cover: AICL 3175-7 (CD+DVD+DL) ℗©2016 Sony Music Associated Records Booklet: AICL 3175-7 ℗©2016 Sony Music Associated Records CD: ℗ 2016 Sony Music Associated Records DVD: © 2016 Sony Music Associated Records Recorded (Aobadai studio) Mixed @Daimonion Recordings Mastered (Sterling Sound) DVD lasts 19:35 minutes Packaged in double jewel case with slipcase. Includes: -16-page booklet with lyrics, - a poster (24-page, folded 5 times), - a code to download 1 track (amazarashi Live 360°)"
  - heading "Barcode and Other Identifiers" [level=2]
  - list:
    - listitem: "Barcode (As printed): 4 547403 045703"
    - listitem: "Barcode (String): 4547403045703"
    - listitem: "Rights Society: JASRAC"
    - listitem: "Other (CD, Cat#): DISC 1 AICL 3175"
    - listitem: "Matrix / Runout (CD): LLDS-6150 1"
    - listitem: "Mastering SID Code (CD): IFPI L275"
    - listitem: "Mould SID Code (CD): IFPI 455X"
    - listitem: "Other (DVD, Cat#): DISC 2 AICL 3176"
    - listitem: "Matrix / Runout (DVD): AICL-3176 A0 1"
    - listitem: "Mastering SID Code (DVD): IFPI L271"
    - listitem: "Mould SID Code (DVD): 45T9"
  - heading "Other Versions (2)" [level=2]
  - link "View All":
    - /url: /master/1238840-amazarashi-虚無病
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
      - row "虚無病 (CD, Mini-Album) SAR (3) AICL-3178 Japan 2016":
        - cell
        - cell "虚無病 (CD, Mini-Album)":
          - link "虚無病":
            - /url: /release/10870529-amazarashi-虚無病
          - text: (CD, Mini-Album)
        - cell "SAR (3)":
          - link "SAR (3)":
            - /url: /label/878626-SAR-3
        - cell "AICL-3178"
        - cell "Japan"
        - cell "2016"
        - cell
      - row "虚無病 (CD, Mini-Album, DVD, DVD-Video, NTSC) SAR (3), Sony Music 88985380042 Taiwan 2016":
        - cell
        - cell "虚無病 (CD, Mini-Album, DVD, DVD-Video, NTSC)":
          - link "虚無病":
            - /url: /release/14491950-amazarashi-虚無病
          - text: (CD, Mini-Album, DVD, DVD-Video, NTSC)
        - cell "SAR (3), Sony Music":
          - link "SAR (3)":
            - /url: /label/878626-SAR-3
          - text: ","
          - link "Sony Music":
            - /url: /label/25487-Sony-Music
        - cell "88985380042"
        - cell "Taiwan"
        - cell "2016"
        - cell
  - heading "Reviews" [level=2]
  - textbox "Enter your comment"
  - button "Submit" [disabled]
  - link "View Help":
    - /url: /help/doc/reviews-and-discussion
  - list
  - heading "Release" [level=2]
  - button "Copy Release Code": "[r9469434]"
  - link "Edit Release":
    - /url: /release/9469434-/history#latest
  - link "See all versions":
    - /url: /master/1238840-amazarashi-虚無病
  - text: Data Correct
  - heading "For sale on Discogs" [level=2]
  - link "Sell a Copy":
    - /url: /sell/post/9469434
    - text: Sell a copy
  - heading [level=2]
  - link "10 copies":
    - /url: /sell/release/9469434
  - text: from €11.29
  - link "Shop now":
    - /url: /sell/release/9469434
  - heading "Statistics" [level=2]
  - list:
    - listitem:
      - text: "Have:"
      - link "4":
        - /url: /release/stats/9469434
    - listitem:
      - text: "Want:"
      - link "2":
        - /url: /release/stats/9469434
    - listitem: "Avg Rating: 5 / 5"
    - listitem:
      - text: "Ratings:"
      - link "1":
        - /url: /release/stats/9469434
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
  - text: Added 112 minutes ago
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
  - heading "Videos" [level=2]
  - img
  - link "Edit":
    - /url: /release/9469434-/videos/update
  - link "Add video":
    - /url: /release/9469434-/videos/update
  - list
  - heading "Lists" [level=2]
  - button "Add to List"
  - button "Expand section"
  - heading "Contributors" [level=2]
  - link "caobao":
    - /url: /user/caobao
  - text: ","
  - link "osesgran":
    - /url: /user/osesgran
  - link "Report Suspicious Activity":
    - /url: /release/9469434/report
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
  21 |       .filter({ has: this.page.locator('h3', { hasText: 'In Collection' }).first() }),
  22 |   };
  23 |
  24 |   private buttons = {
  25 |     addToCollection: this.page.locator('button', { hasText: this.buttonsText.addToCollectionText }),
  26 |     removeButton: this.page.locator('button.remove_rguzu'),
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
  37 |     releaseStyle: this.page.locator('.table_c5ftk tr:nth-child(6) td'),
  38 |   };
  39 |
  40 |   constructor(page: Page) {
  41 |     super(page);
  42 |   }
  43 |
  44 |   async goto(releaseID: number) {
  45 |     await this.gotoByUrl(`${this.url}${releaseID}`);
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
  65 |     expect.soft(this.releaseElements.releaseGenre).toContainText(info.genre);
  66 |     expect.soft(this.releaseElements.releaseStyle).toContainText(info.style);
  67 |   }
  68 |
  69 |   async addReleaseToCollectionAndVerifyNotification() {
  70 |     await this.buttons.addToCollection.click();
> 71 |     expect(this.pageElements.inCollectionTable).toBeVisible();
     |                                                 ^ Error: expect.toBeVisible: Error: strict mode violation: locator('.box_PFmyl').filter({ has: locator('h3').filter({ hasText: 'In Collection' }).first() }) resolved to 6 elements:
  72 |   }
  73 |
  74 |   async removeFromCollectionAndVerifyTable() {
  75 |     await this.buttons.removeButton.click();
  76 |     expect(this.pageElements.inCollectionTable).toBeHidden();
  77 |   }
  78 | }
  79 |
```
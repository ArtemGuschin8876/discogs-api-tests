# Test info

- Name: Release page tests >> Click to add collection button check notification and remove it
- Location: C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\tests\release.spec.ts:16:7

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://www.discogs.com/release/11611473", waiting until "domcontentloaded"

    at ReleasePage.gotoByUrl (C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\pages\base.page.ts:17:21)
    at ReleasePage.goto (C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\pages\release.page.ts:46:16)
    at C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\tests\release.spec.ts:7:35
```

# Test source

```ts
   1 | import { Locator, Page } from '@playwright/test';
   2 |
   3 | export type LocatorMap = {
   4 |   [key: string]: Locator;
   5 | };
   6 |
   7 | export abstract class BasePage {
   8 |   protected page: Page;
   9 |
  10 |   acceptCookiesLocatorText = 'button:has-text("Accept All")';
  11 |
  12 |   constructor(page: Page) {
  13 |     this.page = page;
  14 |   }
  15 |
  16 |   async gotoByUrl(url: string) {
> 17 |     await this.page.goto(url, { waitUntil: 'domcontentloaded' });
     |                     ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  18 |   }
  19 |
  20 |   async acceptCookie() {
  21 |     const acceptCookies = this.page.locator(this.acceptCookiesLocatorText);
  22 |     await acceptCookies.waitFor({state: 'visible', timeout: 5000}).catch(() => {});
  23 |
  24 |     if (await acceptCookies.isVisible()) {
  25 |       await acceptCookies.click();
  26 |     }
  27 |   }
  28 | }
  29 |
```
# Test info

- Name: Check login with correct and incorrect credentials >> Login flow with valid credentials
- Location: C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\tests\login.spec.ts:6:7

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "undefinedlogin", waiting until "domcontentloaded"

    at LoginPage.gotoByUrl (C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\pages\base.page.ts:17:21)
    at LoginPage.goto (C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\pages\login.page.ts:33:20)
    at C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\tests\login.spec.ts:7:33
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
     |                     ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  18 |   }
  19 |
  20 |   async acceptCookie() {
  21 |     const acceptCookies = this.page.locator(this.acceptCookiesLocatorText);
  22 |
  23 |     if (await acceptCookies.isVisible()) {
  24 |       await acceptCookies.click();
  25 |     }
  26 |   }
  27 | }
  28 |
```
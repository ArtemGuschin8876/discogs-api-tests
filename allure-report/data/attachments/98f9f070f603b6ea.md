# Test info

- Name: Check login with correct and incorrect credentials >> Login flow with unknown credentials
- Location: C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\tests\login.spec.ts:13:7

# Error details

```
Error: expect(locator).toBeVisible()

Locator: locator('#error-element-password')
Expected: visible
Received: undefined
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('#error-element-password')

    at LoginPage.checkErrorMessage (C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\pages\login.page.ts:58:59)
    at C:\Users\Artemka\pw-learn\discogs-api-tests\src\ui\tests\login.spec.ts:16:5
```

# Test source

```ts
   1 | import { expect, Page } from '@playwright/test';
   2 | import { BasePage, LocatorMap } from './base.page';
   3 | import { Environment } from '../../env';
   4 | import { Endpoints } from '../../utils/constants/endpoints';
   5 | import { UIDataHelper } from '../../utils/ui.utils/ui.data.helper';
   6 | import { UITextErrors } from '../../utils/constants/ui.constants/ui.text.errors';
   7 |
   8 | export class LoginPage extends BasePage {
   9 |     private urlLoginPage: string;
  10 |     private errorElementPassword = '#error-element-password';
  11 |
  12 |     private fields = {
  13 |         usernameField: this.page.locator('#username'),
  14 |         passwordField: this.page.locator('#password')
  15 |     };
  16 |
  17 |     private errors = {
  18 |         messageTextUnknownCredentials: this.page.locator('#error-element-password')
  19 |     };
  20 |
  21 |     private buttons = {
  22 |         continueBtn: this.page.locator('button[type=submit][name=action]', {
  23 |             hasText: 'Continue'
  24 |         })
  25 |     };
  26 |
  27 |     constructor(page: Page) {
  28 |         super(page);
  29 |         this.urlLoginPage = `${Environment.BASE_UI_URL}${Endpoints.LOGIN}`;
  30 |     }
  31 |
  32 |     async goto() {
  33 |         await this.gotoByUrl(this.urlLoginPage);
  34 |     }
  35 |
  36 |     async enterLoginCredentialsAndClickContinue(flag: string) {
  37 |         if (flag === 'positive') {
  38 |             await this.fields.usernameField.pressSequentially(`${Environment.USER_NAME}`);
  39 |             await this.fields.passwordField.pressSequentially(`${Environment.USER_PASSWORD}`);
  40 |             await this.buttons.continueBtn.click();
  41 |         } else if (flag === 'negative') {
  42 |             await this.fields.usernameField.pressSequentially(
  43 |                 UIDataHelper.generateUnknownCredentials().username
  44 |             );
  45 |             await this.fields.passwordField.pressSequentially(
  46 |                 UIDataHelper.generateUnknownCredentials().password
  47 |             );
  48 |             await this.buttons.continueBtn.click();
  49 |         } else {
  50 |             console.log('Invalid flag');
  51 |         }
  52 |     }
  53 |
  54 |     async checkErrorMessage() {
  55 |         await this.page.waitForSelector(this.errorElementPassword, {
  56 |             timeout: 5000
  57 |         });
> 58 |         expect(this.errors.messageTextUnknownCredentials).toBeVisible();
     |                                                           ^ Error: expect(locator).toBeVisible()
  59 |         expect(this.errors.messageTextUnknownCredentials).toHaveText(
  60 |             UITextErrors.UNKNOWN_CREDENTIALS
  61 |         );
  62 |     }
  63 | }
  64 |
```
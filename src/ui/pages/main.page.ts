import { expect, Locator, Page } from '@playwright/test';
import { BasePage, LocatorMap } from './base.page';
import { Environment } from '../../env';

export class MainPage extends BasePage {
  private urlMainPage: string;
  private buttonLoginSelector = 'button[aria-label^="Logged in as"]';

  private buttons = {
    loginBtn: this.page.locator('#log_in_link'),
  };

  private elements = {
    logo: this.page.locator('#custom-prompt-logo'),
    userButton: this.page.locator('button[aria-label^="Logged in as"]'),
  };

  constructor(page: Page) {
    super(page);
    this.urlMainPage = `${Environment.BASE_UI_URL}`;
  }

  async goto() {
    await this.gotoByUrl(this.urlMainPage);
  }

  async clickOnLoginButtonAndVerifyRedirect() {
    await this.buttons.loginBtn.click();
    expect(this.elements.logo).toBeVisible();
  }

  async verifyUserAfterLogin(userName: string) {
    const expectedLabel = `Logged in as ${userName}`;
    console.log('⏳ Waiting for user button with label:', expectedLabel);

    await this.page.waitForSelector(this.buttonLoginSelector, {
      timeout: 10000,
      state: 'attached',
    });

    expect(this.elements.userButton).toHaveAttribute('aria-label', expectedLabel, {
      timeout: 10000,
    });

    const actualLabel = await this.elements.userButton.getAttribute('aria-label');
    console.log('✅ Found label:', actualLabel);
  }
}

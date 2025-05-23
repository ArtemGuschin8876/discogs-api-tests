import { expect, Page } from '@playwright/test';
import { BasePage, LocatorMap } from './base.page';
import { Environment } from '../../env';
import { Endpoints } from '../../utils/constants/endpoints';

export class WantlistPage extends BasePage {
  private urlWantlistPage: string;

  private elements: LocatorMap = {
    tabelOfReleases: this.page.locator('.release_list_table'),
    releasesFromTable: this.page.locator('.release_list_table tbody tr'),
  };

  constructor(page: Page) {
    super(page);
    this.urlWantlistPage = `${Environment.BASE_UI_URL}${Endpoints.MY_WANTLIST}`;
  }

  async goto() {
    await this.gotoByUrl(this.urlWantlistPage);
  }

  async checkWantlistPageTitle() {
    await expect(this.page).toHaveTitle(/My Wantlist/i);
  }
}

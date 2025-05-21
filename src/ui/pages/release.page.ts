import { expect, Page } from '@playwright/test';
import { Environment } from '../../env';
import { Endpoints } from '../../utils/constants/endpoints';
import { BasePage } from './base.page';
import { ReleaseResponse } from '../../models/api.models/release.response';
import { UIDataHelper } from '../../utils/ui.utils/ui.data.helper';

export class ReleasePage extends BasePage {
  private url = `${Environment.BASE_UI_URL}${Endpoints.RELEASE}`;

  private buttonsText = {
    addToCollectionText: 'Add to Collection',
  };

  private pageElements = {
    blockTrackInfo: this.page.locator('.body_utiDG'),
    trackList: this.page.locator('#release-tracklist'),
    releaseStats: this.page.locator('#release-stats'),
    inCollectionTable: this.page.locator('.box_PFmyl'),
  };

  private buttons = {
    addToCollection: this.page.locator('button', { hasText: this.buttonsText.addToCollectionText }),
    removeButton: this.page.locator('button', { hasText: 'Remove' }),
  };

  private releaseElements = {
    releaseTitle: this.page.locator('h1.title_Brnd1'),
    releaseArtist: this.page.locator('.link_PKPcS').first(),
    releaseLabel: this.page.locator('.table_c5ftk tr:nth-child(1) td'),
    releaseFormat: this.page.locator('.table_c5ftk tr:nth-child(2) td'),
    releaseCountry: this.page.locator('.table_c5ftk tr:nth-child(3) td'),
    releaseYear: this.page.locator('.table_c5ftk tr:nth-child(4) td'),
    releaseGenre: this.page.locator('.table_c5ftk tr:nth-child(5) td'),
    releaseStyle: this.page.locator('.table_c5ftk tr:nth-child(6) td'),
  };

  constructor(page: Page) {
    super(page);
  }

  async goto(releaseID: number) {
    await this.gotoByUrl(`${this.url}${releaseID}`);
  }

  async verifyReleasePage() {
    expect(this.pageElements.blockTrackInfo).toBeVisible();
    expect(this.pageElements.trackList).toBeVisible();
    expect(this.pageElements.releaseStats).toBeVisible();
  }

  async verifyReleaseStructure(release: ReleaseResponse) {
    const info = UIDataHelper.convertReleaseInfo(release);

    expect.soft(this.releaseElements.releaseTitle).toContainText(info.title);
    expect.soft(this.releaseElements.releaseArtist).toContainText(info.artist);
    expect.soft(this.releaseElements.releaseLabel).toContainText(info.label);
    for (const part of info.formatParts) {
      await expect.soft(this.releaseElements.releaseFormat).toContainText(part);
    }
    expect.soft(this.releaseElements.releaseCountry).toContainText(info.country);
    expect.soft(this.releaseElements.releaseYear).toContainText(info.year);
    expect.soft(this.releaseElements.releaseGenre).toContainText(info.genre);
    expect.soft(this.releaseElements.releaseStyle).toContainText(info.style);
  }

  async addReleaseToCollectionAndVerifyNotification() {
    await this.buttons.addToCollection.click();
    expect(this.pageElements.inCollectionTable).toBeVisible();
  }

  async removeFromCollectionAndVerifyTable() {
    await this.buttons.removeButton.click();
    expect(this.pageElements.inCollectionTable).toBeHidden();
  }
}

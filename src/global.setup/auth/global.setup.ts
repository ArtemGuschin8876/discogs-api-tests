import { chromium, FullConfig } from '@playwright/test';
import { Environment } from '../../env';
import fs from 'fs';

async function globalSetup(config: FullConfig) {
  const loggedInProject = config.projects.find(p => p.name === 'ui');
  const { storageState } = loggedInProject!.use;

  if (typeof storageState === 'string' && fs.existsSync(storageState)) {
    console.log('[globalSetup] storageState уже существует, логин не нужен');
    return;
  }

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // const continueButton = page.locator('button[data-action-primary=true]');
  // const continueBtn = page.locator('button[type=submit][name=action]', {
  //           hasText: 'Continue'
  //       })

  const continueBtn = page.locator('button[name=action]');

  await page.goto('https://www.discogs.com/login');
  await page.fill('#username', `${Environment.USER_NAME}`);
  await page.fill('#password', `${Environment.USER_PASSWORD}`);
  await continueBtn.click();

  await page.waitForURL('https://www.discogs.com/my');
  await page.context().storageState({ path: storageState as string });
  await browser.close();
}

export default globalSetup;

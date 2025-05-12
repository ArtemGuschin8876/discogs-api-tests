import { test as base } from '@playwright/test';
import { Environment } from '../../env';

type UIFixtures = {
  uiUserName: string;
};

export const test = base.extend<UIFixtures>({
    uiUserName: async ({}, use) => {
    await use(`${Environment.USER_NAME}`);
  },
});

export const expect = test.expect;


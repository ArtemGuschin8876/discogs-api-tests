import { APIRequestContext, test as base, request } from '@playwright/test';
import { Fixtures } from '../fixtures/fixtures';
import { Environment } from '../env';
import { ClientManager } from '../api/clients/clientManager';



export const authFixture = base.extend<Fixtures>({
     authorizedContext: async ({}, use) => {
        const context = await request.newContext({
            baseURL: Environment.BASE_URL,
            extraHTTPHeaders: {
                'User-Agent': Environment.USER_AGENT || '',
                'Authorization': `Bearer ${Environment.TOKEN}`,
            },
        });

        await use(context);
        await context.dispose();
    },

    unathorizedContext: async ({}, use) => {
        const context = await request.newContext();

        await use(context);
        await context.dispose();
    },

    clients: async ({ unathorizedContext }, use) => {
        const clientManager = new ClientManager(unathorizedContext);
        await use(clientManager);
    },
});


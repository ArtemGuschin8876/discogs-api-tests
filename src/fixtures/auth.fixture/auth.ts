import { APIRequestContext, APIResponse, test as base, request } from '@playwright/test';
import { Environment } from '../../env';
import { ReleaseClient } from '../../api/clients/releaseClient';
import { ClientManager } from '../../api/clients/clientManager';

export const test = base.extend<{
    authorizedContext: (url: string) => Promise<APIResponse>;
    apiContext: APIRequestContext;
    clients: ClientManager;

}>({
    authorizedContext: async ({ request }, use) => {
        const requester = async (url: string) => {
            return await request.get(url, {
                headers: {
                    'User-Agent': Environment.USER_AGENT || '',
                    'Authorization': `Bearer ${Environment.TOKEN}`,
                },
            });
        };

        await use(requester);
    },

    apiContext: async ({authorizedContext}, use) => {
        const context = await request.newContext();
        await use(context);
        await context.dispose();
    }, 

    clients: async ({apiContext}, use) => {
        const clientManager = new ClientManager(apiContext)
        await use(clientManager)
    }



})


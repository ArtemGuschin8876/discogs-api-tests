import { APIRequestContext, test as base, request } from '@playwright/test';
import { Fixtures } from '../fixtures/fixtures';
import { Environment } from '../env';
import { ClientManager } from '../api/clients/clientManager';
import { generateOAuthHeader } from '../utils/oauth.helper';



export const test = base.extend<Fixtures>({
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

    oauthContext: async ({}, use) => {
        const authHeader = await generateOAuthHeader('GET', `${Environment.BASE_URL}/users/${Environment.USER_NAME}/wants`);
        const context = await request.newContext({
            baseURL: Environment.BASE_URL,
            extraHTTPHeaders: {
                'User-Agent': Environment.USER_AGENT || '',
                'Authorization': authHeader,
            },
        });

        await use(context)
        await context.dispose();
    },

    clients: async ({authorizedContext, unathorizedContext, oauthContext}, use) => {
        const getClient = (context: APIRequestContext) => {
            return new ClientManager(context)
        };

        await use({
            get authorized() {
                return getClient(authorizedContext);
            },
            get unathorized() {
                return getClient(unathorizedContext)
            },
            get oauth() {
                return getClient(oauthContext)
            }
        });
    },

    unathorizedClients: async ({ unathorizedContext }, use) => {
        const clientManager = new ClientManager(unathorizedContext);
        await use(clientManager);
    },

    authorizedClients: async ({ authorizedContext }, use) => {
        const clientManager = new ClientManager(authorizedContext)
        await use(clientManager)
    },



});


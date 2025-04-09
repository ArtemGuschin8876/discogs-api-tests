import { APIResponse, test as base, request } from '@playwright/test';
import { Environment } from '../../env';

export const test = base.extend<{

    discogsRequest: (url: string) => Promise<APIResponse>;

}>({
    
    discogsRequest: async ({ request }, use) => {
        const requester = async (url: string) => {
            return await request.get(url, {
                headers: {
                    'User-Agent': Environment.USER_AGENT || '',
                    'Authorization': `Bearer ${Environment.TOKEN}`,
                },
            });
        };

        await use(requester);
    }
})
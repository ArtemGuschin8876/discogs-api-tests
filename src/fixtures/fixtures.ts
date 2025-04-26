import { APIRequestContext } from '@playwright/test'
import { ClientManager } from '../api/clients/clientManager';
import { test as clients } from '../fixtures/auth'
import { test as randomRelease} from '../fixtures/data'
import { mergeTests } from '@playwright/test';
import { ReleaseResponse } from '../models/api.models/release.response';

export type Fixtures = {
    authorizedContext: APIRequestContext;
    unathorizedContext: APIRequestContext;
    oauthContext: APIRequestContext;
    testData: number;
    clients: {
        authorized: ClientManager,
        unathorized: ClientManager,
        oauth: ClientManager;
    };
    unathorizedClients: ClientManager;
    authorizedClients: ClientManager;
    randomRelease: ReleaseResponse;
    randomReleases: ReleaseResponse[];
    randomReleaseID: number
    randomArtistID: number;
    randomLabelID: number;
    randomInvalidID: unknown;
}

export const test = mergeTests(clients, randomRelease)


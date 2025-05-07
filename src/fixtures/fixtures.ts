import { APIRequestContext } from '@playwright/test'
import { ClientManager } from '../api/clients/clientManager';
import { authorizationFixtures } from '../fixtures/auth'
import { test as randomRelease} from '../fixtures/data'
import { mergeTests } from '@playwright/test';
import { ReleaseResponse } from '../models/api.models/release.response';
import { WantlistResponse } from '../models/api.models/wantlist.response';

export type Fixtures = {
    authorizedContext: APIRequestContext;
    unathorizedContext: APIRequestContext;
    testData: number;
    unathorizedClients: ClientManager;
    authorizedClients: ClientManager;   
    randomRelease: ReleaseResponse;
    randomReleases: ReleaseResponse[];
    randomReleaseID: number
    randomArtistID: number;
    randomLabelID: number;
    randomInvalidID: unknown;
    addedReleaseID: number;
    userName: string
    currentWantList: () => Promise<WantlistResponse>;
}

export const test = mergeTests(authorizationFixtures, randomRelease)


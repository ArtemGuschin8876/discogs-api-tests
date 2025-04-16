import { APIRequestContext} from '@playwright/test'
import { ClientManager } from '../api/clients/clientManager';
import { test as clients } from '../fixtures/auth'
import { test as testData} from '../fixtures/data'
import { mergeTests } from '@playwright/test';

export type Fixtures = {
    authorizedContext: APIRequestContext;
    unathorizedContext: APIRequestContext;
    testData: number
    clients: ClientManager;

}

export const test = mergeTests(clients, testData)


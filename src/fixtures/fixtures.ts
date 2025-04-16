import { APIRequestContext, test as base } from '@playwright/test'
import { ClientManager } from '../api/clients/clientManager';
import { testDataFixture } from './data';


export type Fixtures = {
    authorizedContext: APIRequestContext;
    unathorizedContext: APIRequestContext;
    testData: number
    clients: ClientManager;

}
 
//вынести в общий все фикстуры

export const test = base.extend<Fixtures>({
    testData: testDataFixture.

})


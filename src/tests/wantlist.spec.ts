import { WantlistAssertions } from '../api/assertions/wantlist.assertions';
import { Environment } from '../env';
import { test } from '../fixtures/fixtures';


test.describe('Discogs API - wantlist',  () => {
    test('Should return 200 and wantlist by username', async ({clients}) => {
        const {wantlist} = await clients.oauth.wantlistClient.getWantlistByUsername(`${Environment.USER_NAME}`);
        WantlistAssertions.validateWantlistResponse(wantlist);
    });

    test('Should add random release to want list', async ({clients, randomReleaseID}) => {
        const addResponse = await clients.oauth.wantlistClient.addReleaseToWantlist(`${Environment.USER_NAME}`, randomReleaseID)
        const addBody = await addResponse.json();
        console.log(addBody)
    })
})
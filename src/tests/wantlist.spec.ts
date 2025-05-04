import { WantlistAssertions } from '../api/assertions/wantlist.assertions';
import { Environment } from '../env';
import { test } from '../fixtures/fixtures';


test.describe('Discogs API - wantlist',  () => {
    let addedReleaseID: number

    test.afterEach(async ({authorizedClients}) => {
        if (addedReleaseID) {
            await authorizedClients.wantlistClient.deleteReleaseFromWantList(`${Environment.USER_NAME}`, addedReleaseID)
            addedReleaseID = 0;
        }
    });

    test('Should return 200 and wantlist by username', async ({authorizedClients}) => {
        const {wantlist} = await authorizedClients.wantlistClient.getWantlistByUsername(`${Environment.USER_NAME}`);
        WantlistAssertions.validateWantlistResponse(wantlist);
    });

    test('Should add random release to want list', async ({authorizedClients, randomReleaseID, getUserName, randomRelease, getCurrentWantList}) => {
        addedReleaseID = randomReleaseID;

        await authorizedClients.wantlistClient.addReleaseToWantlist(getUserName, addedReleaseID);
        const wantlist = await getCurrentWantList();

        WantlistAssertions.validateReleaseIsAdded(wantlist, addedReleaseID);
        WantlistAssertions.validateReleaseContent(wantlist, randomRelease);

    });

    test('Should delete release and return 204', async ({authorizedClients, addedReleaseID, getUserName, getCurrentWantList}) => {
        await authorizedClients.wantlistClient.deleteReleaseFromWantList(getUserName, addedReleaseID);
        const wantlist = await getCurrentWantList();
        
        WantlistAssertions.validateReleaseIsDeleted(wantlist, addedReleaseID)
        
    })
})
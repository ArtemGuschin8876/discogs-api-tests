import { test } from '../fixtures/fixtures';
import { ReleaseResponse } from '../models/api.models/release.response';
import { DataHelper } from '../utils/data.helper';
import { ReleaseAssertions } from '../api/assertions/release.assertions';

//Community Release Rating прикрутить к релизам 
//Release Stats прикрутить

test.describe('Discogs API - Releases', () => {

    test('should return 200, get release', async ({clients, randomRelease, randomReleaseID}) => {
       
        const response = await clients.releaseClient.getReleaseById(randomReleaseID);
        const release: ReleaseResponse = await response.json();

        ReleaseAssertions.validateCorrectResponse(response, release, randomRelease, randomReleaseID)
    });
})


test.describe('negative test for invalid release IDs', () => {

    const invalidReleasesID = DataHelper.getInvalidID(); 

    invalidReleasesID.forEach((invalidID, index) => {
        test(`should return text error and 404 with invalid ID: ${index + 1}`, async ({clients}) => {

            const response = await clients.releaseClient.getReleaseById(invalidID);
            const responseBody = await response.json();

            ReleaseAssertions.validateIncorrectResponse(response, responseBody);
        });
    });
});


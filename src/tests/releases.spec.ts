import { test } from '../fixtures/fixtures';
import { DataHelper } from '../utils/data.helper';
import { ReleaseAssertions } from '../api/assertions/release.assertions';
import { ReleaseResponse } from '../models/api.models/release.response';
import { EntityErrors } from '../models/api.models/error.responses';



test.describe('Discogs API - Releases', () => {
    test('Should return 200, get release', async ({unathorizedClients, randomReleaseID, randomRelease}) => {

        const {releaseResponse} = await  unathorizedClients.releaseClient.getReleaseById(randomReleaseID);
        ReleaseAssertions.validateCorrectResponseRelease(releaseResponse as ReleaseResponse, randomRelease, randomReleaseID);
    });

    test('Should return 200 and get release rating', async ({unathorizedClients, randomReleaseID}) => {
        
        const {releaseRatinResponse} = await unathorizedClients.releaseClient.getReleaseRatingByReleaseId(randomReleaseID);
        ReleaseAssertions.validateReleaseRating(releaseRatinResponse)
    });

});


test.describe('Negative test for invalid release IDs', () => {
    DataHelper.getInvalidID().forEach(({label, invalidID}, index) => {
        test(`${index + 1}) Should return text error and 404 with invalid ID: ${label}`, async ({unathorizedClients}) => {
            const {releaseResponse} = await unathorizedClients.releaseClient.getReleaseById(invalidID, {
                expectedStatusCode: 404,
            });
            ReleaseAssertions.validateIncorrectResponseRelease(releaseResponse as EntityErrors);
        });
    });
});


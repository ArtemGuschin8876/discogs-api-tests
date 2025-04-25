import { test } from '../fixtures/fixtures';
import { DataHelper } from '../utils/data.helper';
import { ReleaseAssertions } from '../api/assertions/release.assertions';
import { ReleaseResponse } from '../models/api.models/release.response';
import { EntityErrors } from '../models/api.models/error.responses';



test.describe('Discogs API - Releases', () => {
    test('Should return 200, get release', async ({clients, randomReleaseID, randomRelease}) => {

        const {releaseResponse} = await clients.releaseClient.getReleaseById(randomReleaseID);
        ReleaseAssertions.validateCorrectResponse(releaseResponse as ReleaseResponse, randomRelease, randomReleaseID);
    });

    test('Should return 200 and get release rating', async ({clients, randomReleaseID}) => {
        
        const {releaseRatinResponse} = await clients.releaseClient.getReleaseRatingByReleaseId(randomReleaseID);
        ReleaseAssertions.validateReleaseRating(releaseRatinResponse)
    });
});


test.describe('Negative test for invalid release IDs', () => {
    DataHelper.getInvalidID().forEach(({label, invalidID}, index) => {
        test(`${index + 1}) Should return text error and 404 with invalid ID: ${label}`, async ({clients}) => {
            const {releaseResponse} = await clients.releaseClient.getReleaseById(invalidID, {
                expectedStatusCode: 404,
            });
            ReleaseAssertions.validateIncorrectResponse(releaseResponse as EntityErrors);
        });
    });
});


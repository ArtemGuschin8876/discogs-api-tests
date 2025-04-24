import { test } from '../fixtures/fixtures';
import { DataHelper } from '../utils/data.helper';
import { ReleaseAssertions } from '../api/assertions/release.assertions';
import { ReleaseResponse } from '../models/api.models/release.response';

//Release Stats прикрутить

test.describe('Discogs API - Releases', () => {
    test('Should return 200, get release', async ({clients, randomReleaseID, randomRelease}) => {

        const {releaseResponse} = await clients.releaseClient.getValidReleaseById(randomReleaseID);
        ReleaseAssertions.validateCorrectResponse(releaseResponse, randomRelease, randomReleaseID);

    });
});

test.describe('Discogs API - Release rating', () => {
    test('Should return 200 and get release rating', async ({clients, randomReleaseID}) => {
        
        const {releaseRatinResponse} = await clients.releaseClient.getReleaseRatingByReleaseId(randomReleaseID);
        ReleaseAssertions.validateReleaseRating(releaseRatinResponse)
    });
});


test.describe('Negative test for invalid release IDs', () => {
    DataHelper.getInvalidID().forEach(({label, invalidID}, index) => {
        test(`${index + 1}) Should return text error and 404 with invalid ID: ${label}`, async ({clients}) => {
            const {body} = await clients.releaseClient.getInValidReleaseById(invalidID, {
                expectedStatusCode: 404,
            });
            ReleaseAssertions.validateIncorrectResponse(body);
        });
    });
});


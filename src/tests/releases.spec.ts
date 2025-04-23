import { test } from '../fixtures/fixtures';
import { DataHelper } from '../utils/data.helper';
import { ReleaseAssertions } from '../api/assertions/release.assertions';
import { ReleaseResponse } from '../models/api.models/release.response';

//Release Stats прикрутить

test.describe('Discogs API - Releases', () => {
    test('should return 200, get release', async ({clients, randomReleaseID, randomRelease}) => {
        const response = await clients.releaseClient.getReleaseById(randomReleaseID);
        const release: ReleaseResponse = await response.json();

        ReleaseAssertions.validateCorrectResponse(release, randomRelease, randomReleaseID)
    });
});

test.describe('Discogs API - Release rating', () => {
    
    test('should return 200 and get release rating', async ({clients, randomReleaseID}) => {
        const response = await clients.releaseClient.getReleaseRatingByReleaseId(randomReleaseID);
        ReleaseAssertions.validateReleaseRating(response);
        
    });

    test('check type of release rating fields', async ({clients, randomReleaseID}) => {
        const response = await clients.releaseClient.getReleaseRatingByReleaseId(randomReleaseID);
        const releaseRatingResponse = await response.json();

        ReleaseAssertions.validateReleaseRatingFields(releaseRatingResponse);
    });
});


test.describe('negative test for invalid release IDs', () => {

    const invalidReleasesID = DataHelper.getInvalidID();
    //Если getInvalidID() просто возвращает массив с faker-данными — 
    // всё работает и не нужно использовать фикстуру.
    invalidReleasesID.forEach((invalidID, index) => {
        test(`should return text error and 404 with invalid ID: ${index + 1}`, async ({clients}) => {

            const response = await clients.releaseClient.getReleaseById(invalidID);
            const responseBody = await response.json();

            ReleaseAssertions.validateIncorrectResponse(response, responseBody);
        });
    });
});


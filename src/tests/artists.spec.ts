import { test } from '../fixtures/fixtures';
import { ArtistAssertions } from '../api/assertions/artist.assertions';
import { DataHelper } from '../utils/data.helper';
import { ArtistResponse } from '../models/api.models/artist.response';
import { EntityErrors } from '../models/api.models/error.responses';


test.describe('Discogs API - artists', () => {

    test('Should return 200 for a valid release ID', async ({clients, randomArtistID}) => {
        const {artistResponse} = await clients.unathorized.artistClient.getArtistById(randomArtistID);
        ArtistAssertions.validateCorrectResponse(artistResponse as ArtistResponse, randomArtistID)
    });
})

test.describe('Negative test for invalid artist IDs', () => {

    DataHelper.getInvalidID().forEach(({invalidID, label}, index) => {
        test(`${index + 1}) Should return text error and 404 with invalid ID: ${label}`, async ({clients}) => {
            const {artistResponse} = await clients.unathorized.artistClient.getArtistById(invalidID, {
                expectedStatusCode: 404
            });
            ArtistAssertions.validateIncorrectResponse(artistResponse as EntityErrors);
        });
    });
});


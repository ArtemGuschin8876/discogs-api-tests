import { test } from '../fixtures/fixtures';
import { ArtistResponse } from '../models/api.models/artist.response';
import { ArtistAssertions } from '../api/assertions/artist.assertions';
import { DataHelper } from '../utils/data.helper';


test.describe('Discogs API - artists', () => {

    test('Should return 200 for a valid release ID', async ({clients, randomArtistID}) => {
        const response = await clients.artistClient.getArtistById(randomArtistID);
        const artist: ArtistResponse = await response.json();

        ArtistAssertions.validateCorrectResponse(response, artist, randomArtistID)
    });
})

test.describe('negative test for invalid artist IDs', () => {

    const invalidArtistsID = DataHelper.getInvalidID(); 

    invalidArtistsID.forEach((invalidID, index) => {
        test(`should return text error and 404 with invalid ID: ${index + 1}`, async ({clients}) => {

            const response = await clients.artistClient.getArtistById(invalidID);
            const responseBody = await response.json();

            ArtistAssertions.validateIncorrectResponse(response, responseBody);
        });
    });
});


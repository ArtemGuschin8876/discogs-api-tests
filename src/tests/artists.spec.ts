import { test } from '../fixtures/fixtures';
import { ArtistAssertions } from '../api/assertions/artist.assertions';
import { DataHelper } from '../utils/data.helper';


test.describe('Discogs API - artists', () => {

    test('Should return 200 for a valid release ID', async ({clients, randomArtistID}) => {
        const {artistResponse} = await clients.artistClient.getValidArtistById(randomArtistID);
        ArtistAssertions.validateCorrectResponse(artistResponse, randomArtistID)
    });
})

test.describe('Negative test for invalid artist IDs', () => {
    DataHelper.getInvalidID().forEach(({invalidID, label}, index) => {
        test(`${index + 1}) Should return text error and 404 with invalid ID: ${label}`, async ({clients}) => {
            const {body} = await clients.artistClient.getInvalidValidArtistById(invalidID);
            ArtistAssertions.validateIncorrectResponse(body);
        });
    });
});


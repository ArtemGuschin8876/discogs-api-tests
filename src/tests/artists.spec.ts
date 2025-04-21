import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtures';
import { ar } from '@faker-js/faker';

const validArtistID = 4016434;
const invalidArtistID = 313332344111234;
const validArtistName = 'Post Malone'
const invalidArtistName = 'Bob Marley'




test.describe('Discogs API - artists', () => {

    test('Should return 200 for a valid release ID', async ({clients, randomReleases}) => {
        console.log(randomReleases)

        const response = await clients.artistClient.getArtistById(validArtistID)
        expect(response.status()).toBe(200);
    })

    test('Should return 404 if id unknown ID', async({clients}) => {

        const response = await clients.artistClient.getArtistById(invalidArtistID)
        expect(response.status()).toBe(404)
    })
})


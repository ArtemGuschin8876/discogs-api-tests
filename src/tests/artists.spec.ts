import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtures';

const validArtistID = 4016434;
const invalidArtistID = 313332344111234;
const validArtistName = 'Post Malone'
const invalidArtistName = 'Bob Marley'




test.describe('Discogs API - artists', () => {

    test('Should return 200 for a valid release ID', async ({clients}) => {
        
        const response = await clients.artistClient.getArtistById(validArtistID)
        expect(response.status()).toBe(200);
    })

    test('Should return 404 if id unknown ID', async({clients}) => {

        const response = await clients.artistClient.getArtistById(invalidArtistID)
        expect(response.status()).toBe(404)
    })

    test('Should return correct name of artist', async({clients}) => {

        const response = await clients.artistClient.getArtistById(validArtistID)
        expect(response.status()).toBe(200)

        const body = await response.json()
        expect(body.name).toBe(validArtistName)
    })


})


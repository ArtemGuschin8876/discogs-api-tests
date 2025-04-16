import { test } from '../fixtures/fixtures'
import { expect } from '@playwright/test';
import { ReleaseResponse } from '../models/release.response';
import { DataHelper } from '../utils/data.helper';


const invalidReleaseID = 213239238; //null undefiend,  -1, 2.1,  

//ПОДУМАТЬ тестовые данные из фикстуры




test.describe('Discogs API - Releases', () => {

    test('Should return 200 for a valid release ID', async ({clients, testData}) => {

        const releaseId = DataHelper.getRandomReleaseId();

        const response = await clients.releaseClient.getReleaseById(releaseId)
        expect(response.status()).toBe(200)

        const body: ReleaseResponse = await response.json()
        expect(body.title).toBeTruthy();
        expect(body.year).toBeGreaterThan(1900);
        expect(body.artists.length).toBeGreaterThan(0)
    });

    test('Should return 404 if id unknown ID', async ({clients}) => {

        const response = await clients.releaseClient.getReleaseById(invalidReleaseID)
        expect(response.status()).toBe(404)
    });

    // test('Should return correct name of artist', async({clients}) => {

    //     const response = await clients.releaseClient.getReleaseById(validReleaseID)
    //     expect(response.status()).toBe(200)

    //     const body = await response.json();
    //     const name = body.artists[0].name

    //     expect(name).toBe(validArtist)
    // }); 
})



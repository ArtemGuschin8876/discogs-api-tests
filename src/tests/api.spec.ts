import { test } from '../fixtures/auth.fixture/auth';
import { expect } from '@playwright/test';
import { fetchRelease } from '../utils/api-utils';


const validReleaseID = 33448895; // Black Sabbath
const invalidReleaseID = 213239238;


test.describe('Discogs API - Releases', () => {
    test('Should return 200 for a valid release ID', async () => {
        const response =  await fetchRelease(validReleaseID)
        expect(response.status()).toBe(200);
    });


    test('Should return 404 if id unknown ID', async () => {
        const response = await fetchRelease(invalidReleaseID)
        expect(response.status()).toBe(404)
    });
})


// test.describe('Discogs API - Authorization', () => {
//     test()
// })
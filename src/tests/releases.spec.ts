import { test } from '../fixtures/fixtures'
import { expect } from '@playwright/test';
import { ReleaseResponse } from '../models/api.models/release.response';
import { DataHelper } from '../utils/data.helper';
import { ReleaseAssertions } from '../api/assertions/release.assertions';

//Сделать тесты на лейбл
//Community Release Rating прикрутить к релизам 
//Release Stats прикрутить


test.describe('Discogs API - Releases', () => {

    test('should return 200, get release', async ({clients, randomRelease, randomReleaseID}) => {

        const response = await clients.releaseClient.getReleaseById(randomReleaseID)
        expect(response.status()).toBe(200)

        const release: ReleaseResponse = await response.json();
        ReleaseAssertions.validateResponse(release, randomRelease, randomReleaseID)

    });
})

test.describe('negative test for invalid release IDs', () => {
    const invalidReleaseIDs = DataHelper.getInvalidReleaseID();  
        invalidReleaseIDs.forEach((invalidID) => {

            test(`should return error for invalid ID: ${String(invalidID)}`, async ({clients}) => {
                const response = await clients.releaseClient.getReleaseById(invalidID as number);
                expect([400, 404]).toContain(response.status())
                //response.status(). toContain(итд)
                //проверить message ответа (message в константах)
            });
        


        })
})



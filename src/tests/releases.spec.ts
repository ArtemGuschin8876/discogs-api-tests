import { test } from '../fixtures/fixtures'
import { ReleaseResponse } from '../models/api.models/release.response';
import { DataHelper } from '../utils/data.helper';
import { ReleaseAssertions } from '../api/assertions/release.assertions';

//Сделать тесты на лейбл
//Community Release Rating прикрутить к релизам 
//Release Stats прикрутить


//В релизах вопросы

test.describe('Discogs API - Releases', () => {

    test('should return 200, get release', async ({clients, randomRelease, randomReleaseID}) => {
       
        const response = await clients.releaseClient.getReleaseById(randomReleaseID);
        // ??? где брать response.json? внутри assertions или в тесте?
        const release: ReleaseResponse = await response.json();

        ReleaseAssertions.validateCorrectResponse(response, release, randomRelease, randomReleaseID)
    });
})


test.describe('negative test for invalid release IDs', () => {

    const invalidReleasesID = DataHelper.getInvalidReleaseID(); 

    invalidReleasesID.forEach((invalidID, index) => {
        //Тут индекс т.к тесты виснут если ID меняется динамически или будет дубликат
        test(`should return text error and 404 with invalid ID: ${index + 1}`, async ({clients}) => {

            const response = await clients.releaseClient.getReleaseById(invalidID);
            // ??? нужно ли 2 метода? правльного и неправильного 
            ReleaseAssertions.validateIncorrectResponse(response)
        });
    })
    
});


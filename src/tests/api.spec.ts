import { test } from '../fixtures/auth.fixture/auth';
import { expect } from '@playwright/test';


const validReleaseID = 33448895; // Black Sabbath
const invalidReleaseID = 213239238; 
const validArtist = 'Black Sabbath';
const invalidArtist = 'qqqqqqqq'

//Покрыть энд артист в отдельной спеке
//АПИклиент менеджер создать
//ПОДУМАТЬ тестовые данные из фикстуры
// Объединить в одну фикстуру (в ликносе)
//APICLIENTMANAGER (класс в котором хранятся все клиенты) а потом его через фикстуру в тесты
//Generatormanger он есть в ликносе


test.describe('Discogs API - Releases', () => {

    test('Should return 200 for a valid release ID', async ({clients}) => {

        const response = await clients.releaseClient.getReleaseById(validReleaseID)

        expect(response.status()).toBe(200)
    });

    test('Should return 404 if id unknown ID', async ({clients}) => {

        const response = await clients.releaseClient.getReleaseById(invalidReleaseID)

        expect( response.status()).toBe(404)
    });

    test('Should return correct name of artist', async({clients}) => {

        const response = await clients.releaseClient.getReleaseById(validReleaseID)

        expect(response.status()).toBe(200)

        const body = await response.json();
        const name = body.artists[0].name

        expect(name).toBe(validArtist)
    }); 
})



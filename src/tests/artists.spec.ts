import { expect } from '@playwright/test';
import { test } from '../fixtures/auth';
import { ArtistResponse } from '../models/artist.response';

const validArtistID = 4016434;
const invalidArtistID = 313332344111234;
const validArtistName = 'Post Malone'
const invalidArtistName = 'Bob Marley'

//Типизировать все ответы АПи
//Сделать тесты на лейбл
//Брать рандомный релиз из какого лейбла (лейбл захардкожен в env) это всё через фикстуру
//Разделить фикстуры на 2 файла 
//Тест на строку


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
        const name = body.name
        expect(name).toBe(validArtistName)
    })

    test('check', async({clients}) => {

        const response = await clients.artistClient.getArtistById(validArtistID)

        const art: ArtistResponse = await response.json();
        console.log(`Artist name: ${art.name}`);

    })
})


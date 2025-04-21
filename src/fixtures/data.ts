import { test as base} from '@playwright/test'
import { DataHelper } from '../utils/data.helper'
import { Fixtures } from '../fixtures/fixtures';
import { ReleaseResponse } from '../models/api.models/release.response';

//фикстура рандом релиз, а внутри две другие фикстуры , randomRelease(randomData), randomReleaseID, randomArtistID
export const test = base.extend<Fixtures>({
    randomReleases: async ({clients}, use) => {
        const response = await clients.labelsClient.getLabelReleases();
        const releases: ReleaseResponse[] = (await response.json()).releases;

        await use(releases)
    },

    randomRelease: async ({randomReleases}, use) => {
        const release = await DataHelper.getRandomRelease(randomReleases)
        
        await use(release)
    },

    randomReleaseID: async({randomRelease}, use) => {
        await use(randomRelease.id)
    },

    randomArtistID: async ({}, use) => {
        
    }


})




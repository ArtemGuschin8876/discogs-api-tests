import { test as base} from '@playwright/test'
import { DataHelper } from '../utils/data.helper'
import { Fixtures } from '../fixtures/fixtures';
import { ReleaseResponse } from '../models/api.models/release.response';

//фикстура рандом релиз, а внутри две другие фикстуры , randomRelease(randomData), randomReleaseID, randomArtistID
export const test = base.extend<Fixtures>({
    randomRelease: async ({clients}, use) => {
        
        const response = await clients.labelsClient.getLabelReleases();
        const releases: ReleaseResponse[] = (await response.json()).releases;

        if (!releases.length) {
            throw new Error('No releases found for label');
          }
          //faker.helpers.arrayElement 
        const release = await DataHelper.getRandomRelease(releases)
        await use(release)
    },

    randomReleaseID: async({randomRelease}, use) => {
        await use(randomRelease.id)
    }


})




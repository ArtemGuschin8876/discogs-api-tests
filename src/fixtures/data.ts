import { test as base} from '@playwright/test'
import { DataHelper } from '../utils/data.helper'
import { Fixtures } from '../fixtures/fixtures';
import { ReleaseResponse } from '../models/api.models/release.response';

//фикстура рандом релиз, а внутри две другие фикстуры , randomRelease(randomData), randomReleaseID, randomArtistID
export const test = base.extend<Fixtures>({
    randomReleases: async ({unathorizedClients}, use) => {
        const response = await unathorizedClients.labelsClient.getLabelReleases();
        const releases: ReleaseResponse[] = (await response.json()).releases;

        await use(releases)
    },

    randomRelease: async ({randomReleases}, use) => {
        const release = await DataHelper.getRandomRelease(randomReleases);

        await use(release)
    },

    randomReleaseID: async({randomRelease}, use) => {
        await use(randomRelease.id)
    },

    randomArtistID: async ({unathorizedClients, randomRelease}, use) => {
        const { releaseResponse } = await unathorizedClients.releaseClient.getReleaseById(randomRelease.id)
        const fullRelease = releaseResponse as ReleaseResponse;
        const artistID = fullRelease.artists[0].id;

        await use(artistID)
    },

    randomLabelID: async ({unathorizedClients, randomRelease}, use) => {
        const {releaseResponse} = await unathorizedClients.releaseClient.getReleaseById(randomRelease.id)
        const fullRelease = releaseResponse as ReleaseResponse;
        const labelID = fullRelease.labels[0].id;

        await use(labelID)
    },

    randomInvalidID: async ({}, use) => {
        const invalidID = DataHelper.getInvalidID();

        await use(invalidID)
    }

    
})




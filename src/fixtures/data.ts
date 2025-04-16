import { test as base} from '@playwright/test'
import { DataHelper } from '../utils/data.helper'
import { Fixtures } from '../fixtures/fixtures';



export const test = base.extend<Fixtures>({
    testData: async ({}, use) => {
        const testData = DataHelper.getRandomReleaseId()
        await use(testData)
    },

})




import { test } from '../fixtures/fixtures';
import { LabelAssertions } from '../api/assertions/label.assertions';
import { LabelResponse } from '../models/api.models/label.response';
import { DataHelper } from '../utils/data.helper';



test.describe('Discogs API - labels', () => {

    test('Should return 200 for a valid label ID', async ({clients, randomLabelID}) => {
        const response = await clients.labelsClient.getLabelById(randomLabelID)
        const label: LabelResponse = await response.json();

        LabelAssertions.validateCorrectResponse(response, label, randomLabelID)
    });
});

test.describe('negative test for invalid artist IDs', () => {

    const invalidLabelID = DataHelper.getInvalidID(); 

    invalidLabelID.forEach((invalidID, index) => {
        test(`should return text error and 404 with invalid ID: ${index + 1}`, async ({clients}) => {

            const response = await clients.labelsClient.getLabelById(invalidID);
            const responseBody = await response.json();

            LabelAssertions.validateIncorrectResponse(response, responseBody);
        });
    });
});
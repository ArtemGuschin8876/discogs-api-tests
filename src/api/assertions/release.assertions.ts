import { APIResponse, expect } from "@playwright/test";
import { ReleaseResponse } from "../../models/api.models/release.response";
import { BaseAssertions } from "./base.assertions";
import { EntityErrors } from "../../utils/contstants/text.errors";

export class ReleaseAssertions extends BaseAssertions{

    static validateCorrectResponse(
        response: APIResponse, 
        responseJson: unknown, 
        expectedRelease: ReleaseResponse, 
        expectedID: number
    ) {
        const release = responseJson as ReleaseResponse;

        BaseAssertions.validateStatusCode(response, 200)
        BaseAssertions.validateEntityId(release, expectedID);

        expect(expectedRelease.title).toBeDefined();
        expect(typeof expectedRelease.title).toBe('string');

        expect(expectedRelease.year).toBeDefined();
        expect(typeof expectedRelease.year).toBe('number');

        expect(expectedRelease.status).toBeDefined();
        expect(typeof expectedRelease.status).toBe('string');

        expect(release.title).toBe(expectedRelease.title);
        expect(release.status).toBe(expectedRelease.status);    
    };

    static async validateIncorrectResponse(
        response: APIResponse, 
        responseJson: unknown
    ) {
        const responseBody = await responseJson as EntityErrors;

        BaseAssertions.validateStatusCode(response, 404);
        BaseAssertions.validateMessageError(responseBody.message);
    }
}
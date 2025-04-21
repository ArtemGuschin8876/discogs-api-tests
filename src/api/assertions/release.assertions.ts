import { APIResponse, expect } from "@playwright/test";
import { ReleaseErrors, ReleaseResponse } from "../../models/api.models/release.response";
import { TextErrors } from "../../utils/contstants/text.errors";

export class ReleaseAssertions {

    

    static validateCorrectResponse(response: APIResponse, responseJson: unknown, expectedRelease: ReleaseResponse, expectedID: number) {
        
        const release = responseJson as ReleaseResponse;

        expect(response.status()).toBe(200)

        expect(expectedRelease).toBeDefined();
        expect(expectedRelease.id).toBe(expectedID);

        expect(expectedRelease.title).toBeDefined();
        expect(typeof expectedRelease.title).toBe('string');

        expect(expectedRelease.year).toBeDefined();
        expect(typeof expectedRelease.year).toBe('number');

        expect(expectedRelease.status).toBeDefined();
        expect(typeof expectedRelease.status).toBe('string');

        expect(release.title).toBe(expectedRelease.title);
        expect(release.status).toBe(expectedRelease.status);    
    };

    static async validateIncorrectResponse(response: APIResponse) {

        const responseBody = await response.json() as ReleaseErrors;

        const allowedMessage = [
            TextErrors.NOT_FOUND_RESOURCE,
            TextErrors.RELEASE_NOT_EXIST,
        ];

        expect(response.status()).toBe(404);
        expect(allowedMessage).toContain(responseBody.message);
    }
}
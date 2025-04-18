import { expect } from "@playwright/test";
import { ReleaseResponse } from "../../models/api.models/release.response";

export class ReleaseAssertions {
    static validateResponse(responseJson: unknown, expectedRelease: ReleaseResponse, expectedID: number) {

        const release = responseJson as ReleaseResponse;

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
}
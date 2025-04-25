import { expect } from "@playwright/test";
import { ReleaseResponse } from "../../models/api.models/release.response";
import { BaseAssertions } from "./base.assertions";
import { EntityErrors } from "../../models/api.models/error.responses";
import { ReleaseRatingResponse } from "../../models/api.models/release.rating.response";

export class ReleaseAssertions extends BaseAssertions{

    static validateCorrectResponse(
        release: ReleaseResponse, 
        expectedRelease: ReleaseResponse, 
        expectedID: number
    ) {
        BaseAssertions.validateEntityId(release, expectedID);

        expect(expectedRelease.title).toBeDefined();
        expect(expectedRelease.year).toBeDefined();
        expect(expectedRelease.status).toBeDefined();

        expect(release.title).toBe(expectedRelease.title);
        expect(release.status).toBe(expectedRelease.status);    
    };

    static async validateIncorrectResponse(
        body: EntityErrors
    ) {
        BaseAssertions.validateMessageError(body.message);
    };

    static async validateReleaseRating(
        releaseRatinResponse: ReleaseRatingResponse, 
    ) {
        expect(releaseRatinResponse.rating).toBeDefined();
        expect(releaseRatinResponse.rating.average).toBeDefined();
        expect(releaseRatinResponse.rating.count).toBeDefined();
    }
}
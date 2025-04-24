import { APIResponse, expect } from "@playwright/test";
import { ArtistResponse } from "../../models/api.models/artist.response";
import { EntityErrors } from "../../utils/contstants/text.errors";
import { BaseAssertions } from "./base.assertions";

export class ArtistAssertions extends BaseAssertions {

    static validateCorrectResponse(
        artist: ArtistResponse,
        expectedID: number
    ) {

        BaseAssertions.validateEntityId(artist, expectedID)
        expect(artist.name).toBeDefined();
        
    };

    static async validateIncorrectResponse(
        body: EntityErrors
    ) {
        BaseAssertions.validateMessageError(body.message)
    };
}
import { APIResponse, expect } from "@playwright/test";
import { ArtistResponse } from "../../models/api.models/artist.response";
import { EntityErrors } from "../../utils/contstants/text.errors";
import { BaseAssertions } from "./base.assertions";

export class ArtistAssertions extends BaseAssertions {

    static validateCorrectResponse(
        response: APIResponse,
        artist: ArtistResponse,
        expectedID: number
    ) {

        BaseAssertions.validateStatusCode(response, 200)
        BaseAssertions.validateEntityId(artist, expectedID)

        expect(artist.name).toBeDefined();
        expect(typeof artist.name).toBe('string');
        
    };

    static async validateIncorrectResponse(
        response: APIResponse, 
        responseJson: unknown
    ) {
        const responseBody = await responseJson as EntityErrors;
    
        BaseAssertions.validateStatusCode(response, 404)
        BaseAssertions.validateMessageError(responseBody.message)
    };
}
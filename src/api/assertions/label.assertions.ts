import { APIResponse, expect } from "@playwright/test";
import { BaseAssertions } from "./base.assertions";
import { LabelResponse } from "../../models/api.models/label.response";
import { EntityErrors } from "../../utils/contstants/text.errors";

export class LabelAssertions extends BaseAssertions {

    static validateCorrectResponse(
        response: APIResponse,
        label: LabelResponse,
        expectedID: number
    ) {
        BaseAssertions.validateStatusCode(response, 200);
        BaseAssertions.validateEntityId(label, expectedID)

        expect(label.name).toBeDefined();
        expect(typeof label.name).toBe('string');
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
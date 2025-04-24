import { APIRequestContext, APIResponse, expect } from "@playwright/test";
import { BaseAssertions } from "../api/assertions/base.assertions";


export type RequestParams = {
    expectedStatusCode?: number;
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' |'DELETE';
    body?: unknown;
}


export class ApiHelper {
    static async sendApiRequest(ctx: APIRequestContext, url: string, params: RequestParams): Promise<APIResponse> {
        const {
            expectedStatusCode,
            method = 'GET',
            body,
        } = params;

        const response = await ctx.fetch(url, {
            method,
            data: body,
        });

        if (expectedStatusCode) {
            BaseAssertions.validateStatusCode(response, expectedStatusCode)
        } else {
            expect(response).toBeOK();
        }

        return response;
    }
}
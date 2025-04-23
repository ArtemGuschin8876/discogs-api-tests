import { APIRequestContext, APIResponse, expect } from "@playwright/test";
import { RequestParams } from "../models/request.params";

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
            expect(response.status()).toBe(expectedStatusCode);
        } else {
            expect(response).toBeOK();
        }

        return response;
    }
}
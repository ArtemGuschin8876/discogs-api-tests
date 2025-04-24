import { APIRequestContext } from "@playwright/test";
import { Environment } from "../../env";
import { Endpoints } from "../../utils/contstants/endpoints";
import { ApiHelper, RequestParams } from "../../utils/api.helper";
import { ReleaseResponse } from "../../models/api.models/release.response";
import { ReleaseRatingResponse } from "../../models/api.models/release.rating.response";
import { EntityErrors } from "../../utils/contstants/text.errors";



export class ReleaseClient {
    
    private url = `${Environment.BASE_URL}${Endpoints.RELEASES}`
    private context: APIRequestContext;

    constructor(context: APIRequestContext) {
        this.context = context;
    }

    async getValidReleaseById(
        id: unknown, 
        params?: RequestParams
    ): Promise<{ releaseResponse : ReleaseResponse,  status: number}> {

         const response = await ApiHelper.sendApiRequest(
            this.context, 
            `${this.url}${id}`,
            {
                ...params ?? {}, 
                method: 'GET',
            }
        );
        return {
            releaseResponse: await response.json(),
            status: response.status(),
        };
    };

    async getInValidReleaseById(
        id: unknown, 
        params?: RequestParams
    ): Promise<{ body : EntityErrors,  status: number}> {

         const response = await ApiHelper.sendApiRequest(
            this.context, 
            `${this.url}${id}`,
            {
                ...params ?? {}, 
                method: 'GET',
            }
        );
        return {
            body: await response.json(),
            status: response.status(),
        };
    };

    async getReleaseRatingByReleaseId(
        id:unknown,
        params?: RequestParams
    ): Promise<{releaseRatinResponse: ReleaseRatingResponse, status: number}> {

        const response = await ApiHelper.sendApiRequest(
            this.context,
            `${this.url}${id}/${Endpoints.RELEASE_RATING}`,
            {
                ...params ?? {},
                method: 'GET',
            }
        )
        return {
            releaseRatinResponse: await response.json(),
            status: response.status(),
        };
    };



}
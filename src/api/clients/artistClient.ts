import { APIRequestContext, APIResponse } from "@playwright/test"
import { Environment } from "../../env";
import { Endpoints } from "../../utils/contstants/endpoints";
import { ApiHelper, RequestParams } from "../../utils/api.helper";
import { ArtistResponse } from "../../models/api.models/artist.response";
import { EntityErrors } from "../../models/api.models/error.responses";

export class ArtistClient {

    url = `${Environment.BASE_URL}${Endpoints.ARTISTS}`
    private context: APIRequestContext;

    constructor(context: APIRequestContext) {
        this.context = context;
    }

    async getArtistById(
            id: unknown, 
            params?: RequestParams
        ): Promise<{ artistResponse : ArtistResponse | EntityErrors,  status: number}> {
             const response = await ApiHelper.sendApiRequest(
                this.context, 
                `${this.url}${id}`,
                {
                    ...params, 
                    method: 'GET',
                }
            );
            return {
                artistResponse: await response.json(),
                status: response.status(),
            };
        }; 
}
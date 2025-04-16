import { APIRequestContext, APIResponse } from "@playwright/test";
import { Endpoints } from "../../utils/contstants/endpoints";
import { Environment } from "../../env";


export class SearchClient {

    private context: APIRequestContext;
    private url = `${Environment.BASE_URL}${Endpoints.SEARCH}`

    constructor(context: APIRequestContext) {
        this.context = context
    }

    async searchArtistByArtist(name: string): Promise<APIResponse> {
     const response =  await this.context.get(`${this.url}`, {
        params: {
            q: name,
            type: 'artist'
        },   
     });


    return response.json();
    }
}
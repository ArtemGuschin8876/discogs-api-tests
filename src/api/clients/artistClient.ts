import { APIRequestContext, APIResponse } from "@playwright/test"
import { Environment } from "../../env";
import { Endpoints } from "../../utils/contstants/endpoints";

export class ArtistClient {

    url = `${Environment.BASE_URL}${Endpoints.ARTISTS}`
    private context: APIRequestContext;

    constructor(context: APIRequestContext) {
        this.context = context;
    }

    async getArtistById(id: number): Promise<APIResponse> {
        return await this.context.get(`${this.url}${id}`)
    }

    
}
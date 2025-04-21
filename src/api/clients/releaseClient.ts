import { APIRequest, APIRequestContext, APIResponse } from "@playwright/test";
import { Environment } from "../../env";
import { Endpoints } from "../../utils/contstants/endpoints";



export class ReleaseClient {
    
    private url = `${Environment.BASE_URL}${Endpoints.RELEASES}`
    private context: APIRequestContext;

    constructor(context: APIRequestContext) {
        this.context = context;
    }

    async getReleaseById(id: unknown): Promise<APIResponse> {
        return await this.context.get(`${this.url}${id}`) 
    }

}
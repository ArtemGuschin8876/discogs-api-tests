import { APIRequestContext, APIResponse } from "@playwright/test";
import { Environment } from "../../env";
import { Endpoints } from "../../utils/contstants/endpoints";


export class LabelCLient {

    private context: APIRequestContext;
    private url =`${Environment.BASE_URL}${Endpoints.LABELS}${Environment.LABEL_ID}/${Endpoints.RELEASES}`.replace(/\/$/, '')


    constructor(context: APIRequestContext) {
        this.context = context;
    }

    async getLabelReleases(): Promise<APIResponse> {
         return await this.context.get(this.url)
    }

    
}
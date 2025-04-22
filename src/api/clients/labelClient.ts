import { APIRequestContext, APIResponse } from "@playwright/test";
import { Environment } from "../../env";
import { Endpoints } from "../../utils/contstants/endpoints";


export class LabelCLient {

    private context: APIRequestContext;
    private getReleasesUrl =`${Environment.BASE_URL}${Endpoints.LABELS}${Environment.LABEL_ID}/${Endpoints.RELEASES}`.replace(/\/$/, '')
    private getLabelUrl = `${Environment.BASE_URL}${Endpoints.LABELS}`

    constructor(context: APIRequestContext) {
        this.context = context;
    }

    async getLabelById(id: unknown): Promise<APIResponse> {
        return await this.context.get(`${this.getLabelUrl}${id}`);
    }

    async getLabelReleases(): Promise<APIResponse> {
         return await this.context.get(this.getReleasesUrl)
    }

    
}
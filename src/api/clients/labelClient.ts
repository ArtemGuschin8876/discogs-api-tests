import { APIRequestContext, APIResponse } from "@playwright/test";
import { Environment } from "../../env";
import { Endpoints } from "../../utils/contstants/endpoints";
import { ApiHelper, RequestParams } from "../../utils/api.helper";
import { EntityErrors } from "../../models/api.models/error.responses";
import { LabelResponse } from "../../models/api.models/label.response";




export class LabelCLient {

    private context: APIRequestContext;
    private getReleasesUrl =`${Environment.BASE_URL}${Endpoints.LABELS}${Environment.LABEL_ID}/${Endpoints.RELEASES}`.replace(/\/$/, '')
    private getLabelUrl = `${Environment.BASE_URL}${Endpoints.LABELS}`

    constructor(context: APIRequestContext) {
        this.context = context;
    }

    async getLabelById(
        id: unknown, 
        params?: RequestParams
    ): Promise<{ labelResponse : LabelResponse | EntityErrors,  status: number}> {
         const response = await ApiHelper.sendApiRequest(
            this.context, 
            `${this.getLabelUrl}${id}`,
            {
                ...params, 
                method: 'GET',
            }
        );
        return {
            labelResponse: await response.json(),
            status: response.status(),
        };
    }; 

    async getLabelReleases(): Promise<APIResponse> {
         return await this.context.get(this.getReleasesUrl)
    }

    
}
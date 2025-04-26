import { APIRequestContext } from "@playwright/test";
import { Environment } from "../../env";
import { WantlistResponse } from "../../models/api.models/wantlist.response";
import { ApiHelper, RequestParams } from "../../utils/api.helper";
import { Endpoints } from "../../utils/contstants/endpoints";


export class WantlistClient {

    private getWanlistUrl = `${Environment.BASE_URL}${Endpoints.USERS}`
    private context: APIRequestContext;
    
    constructor(context: APIRequestContext) {
        this.context = context;
    }

    async getWantlistByUsername(
            username: string, 
            params?: RequestParams
        ): Promise<{ wantlist : WantlistResponse,  status: number}> {
    
             const response = await ApiHelper.sendApiRequest(
                this.context, 
                `${this.getWanlistUrl}${username}/${Endpoints.WANTS}`,
                {
                    ...params, 
                    method: 'GET',
                }
            );
            return {
                wantlist: await response.json(),
                status: response.status(),
            };
        };

}
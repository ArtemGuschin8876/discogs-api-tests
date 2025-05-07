import { APIRequestContext } from "@playwright/test";
import { Environment } from "../../env";
import { WantlistResponse } from "../../models/api.models/wantlist.response";
import { ApiHelper, ClientOptions, RequestParams } from "../../utils/api.helper";
import { Endpoints } from "../../utils/contstants/endpoints";


export class WantlistClient {

    private WanlistUrl = `${Environment.BASE_URL}${Endpoints.USERS}`
    private context: APIRequestContext;
    
    constructor(context: APIRequestContext) {
        this.context = context;
    }

    async getWantlistByUsername(
        username: string, 
        params?: RequestParams
    ): Promise<{ responseBody: WantlistResponse,  status: number}> {
            const response = await ApiHelper.sendApiRequest(
                this.context, 
                `${this.WanlistUrl}${username}/${Endpoints.WANTS}`,
                { ...params, method: 'GET'}
        );

        return response;
    };

    async addReleaseToWantlist(
        username: string,
        id: number,
        params?: RequestParams
    ): Promise<{ responseBody: WantlistResponse, status: number}> {
        return await ApiHelper.sendApiRequest(
            this.context,
            `${this.WanlistUrl}${username}/${Endpoints.WANTS}/${id}`,
            { ...params ,method: 'PUT'}
        );
       
    }

    async deleteReleaseFromWantList(
        username: string,
        id: number,
        options?: ClientOptions
    ) {
        // const expectedStatusCode = options?.expectedStatusCode ?? 204;

        return await ApiHelper.sendApiRequest(
            this.context,
            `${this.WanlistUrl}${username}/${Endpoints.WANTS}/${id}`,
            {
                method: 'DELETE',
                expectedStatusCode: 204,
                ...options
            },
        );
    }
}
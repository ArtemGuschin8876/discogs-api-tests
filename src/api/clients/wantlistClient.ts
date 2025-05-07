import { APIRequestContext } from "@playwright/test";
import { Environment } from "../../env";
import { WantlistResponse } from "../../models/api.models/wantlist.response";
import { ApiHelper, RequestParams } from "../../utils/api.helper";
import { Endpoints } from "../../utils/contstants/endpoints";

export type ClientOptions = {
    expectedStatusCode?: number,
}
//каждый метод клиента опционально принимает этот тип

export class WantlistClient {

    private WanlistUrl = `${Environment.BASE_URL}${Endpoints.USERS}`
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
                `${this.WanlistUrl}${username}/${Endpoints.WANTS}`,
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

    async addReleaseToWantlist(
        username: string,
        id: number
    ) {
        return await ApiHelper.sendApiRequest(
            this.context,
            `${this.WanlistUrl}${username}/${Endpoints.WANTS}/${id}`,
            {
                method: 'PUT'
            });
    }

    async deleteReleaseFromWantList(
        username: string,
        id: number,
        options?: ClientOptions
    ) {
        const expectedStatusCode = options?.expectedStatusCode || 204
        //если expectedStatusCode передан внутри Options то сохраняю именно его, иначе 204 сохраняю

        return await ApiHelper.sendApiRequest(
            this.context,
            `${this.WanlistUrl}${username}/${Endpoints.WANTS}/${id}`,
            {
                method: 'DELETE',
                expectedStatusCode: expectedStatusCode, //expectedStatusCode
                returnType : both or body (returnType from tests)
            },
        );
    }
}
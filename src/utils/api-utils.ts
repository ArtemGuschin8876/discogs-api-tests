import { request } from "@playwright/test";
import { Environment } from "../env";
import { Endpoints } from "./contstants/endpoints";


export async function fetchRelease(releaseID: number) {
    const apiContext = await request.newContext();
    return await apiContext.get(`${Environment.BASE_URL}${Endpoints.RELEASES}${releaseID}`)
}
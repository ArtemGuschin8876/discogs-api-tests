import { request } from "@playwright/test";
import { Environment } from "../env";


export async function fetchRelease(releaseID: number) {
    const apiContext = await request.newContext();
    return await apiContext.get(`${Environment.BASE_URL}${releaseID}`)
}
import { request } from "@playwright/test";
import { Environment } from "../env";


const baseUrl = Environment.BASE_URL;


export async function getReleaseById(releaseID: number) {
   
    const url = `${baseUrl}${releaseID}`;
    const context = await request.newContext();


    const response = await context.get(url, {
        headers: {
            'User-Agent': Environment.USER_AGENT || '',
            'Authorization': `Bearer ${Environment.TOKEN}`,
        },
    });

    if (!response.ok()) {
        throw new Error(`Error fetching release ${response.status()}`);
    }

  
    return response
}
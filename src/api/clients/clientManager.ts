import { APIRequestContext } from "@playwright/test";
import { ReleaseClient } from "./releaseClient";



export class ClientManager {
  
    releaseClient: ReleaseClient;



    
    constructor(private readonly context: APIRequestContext) {
        this.releaseClient = new ReleaseClient(context)
    }

    
}
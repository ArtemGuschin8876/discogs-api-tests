import { APIRequestContext } from "@playwright/test";
import { ReleaseClient } from "./releaseClient";
import { ArtistClient } from "./artistClient";
import { LabelCLient } from "./labelClient";



export class ClientManager {
  
    releaseClient: ReleaseClient;
    artistClient: ArtistClient;
    labelsClient: LabelCLient;


    constructor(private readonly context: APIRequestContext) {
        this.releaseClient = new ReleaseClient(context)
        this.artistClient = new ArtistClient(context)
        this.labelsClient = new LabelCLient(context)
    }

    
}
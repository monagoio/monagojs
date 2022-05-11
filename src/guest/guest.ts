
import { config } from "../config/config";
import { GuestAPI } from "./api/api";
import { IGuestParams } from "./guestInterface";



export interface IGuestCredential {
    hostUri?: string
    authorization?: string
    token?: string
}

export class Guest {
    
    api: GuestAPI

    constructor(params: IGuestParams) {
        this.api = new GuestAPI({
            authorization: "",
            hostUri: params.serviceUri ?? config.MONAGO_URI + "/app/" + params.userName + "/" + params.projectName,
            token: "",
        })
    }


}
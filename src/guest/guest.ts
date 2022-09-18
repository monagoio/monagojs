
import { config } from "../config/config";
import { GuestAPI } from "./api/api";
import { IGuestParams } from "./guest.interface";



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
            hostUri: params.serviceUri ?? config.MONAGO_CLIENT_URI+ "/"+ params.userName + "/" + params.projectName,
            token: "",
        })
    }


}
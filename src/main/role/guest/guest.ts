import { config } from "../../../config/config";
import { GuestAPI } from "./api/api";
import { IGuestParams } from "./guest.interface";


export interface IPrivateCredential {
    authorization?: string;
    expiry?: string;
    token?: string;
}

export interface IGuestCredential extends IPrivateCredential {
    hostUri?: string
    authorization?: string
    token?: string
}

export class Guest {
    
    api: GuestAPI

    constructor(params: IGuestParams) {
        this.api = new GuestAPI({
            authorization:  "Bearer",
            hostUri: params.serviceUri ?? config.MONAGO_CLIENT_URI+ "/"+ params.userName + "/" + params.projectName,
            token: "",
        })
    }

}
import { config } from "../config/config";
import { GuestAPI } from "../guest";
import { IClientParams } from "./client.interface";

export class MonagoClient extends GuestAPI {

    constructor(params: IClientParams) {

        const [userName, projectName] = Buffer.from(params.secretKey, "base64").toString().split(":")
        if (!userName) {
            throw new Error("Invalid token")
        }

        super({
            authorization: "",
            hostUri: params.serviceUri ?? config.MONAGO_CLIENT_URI + "/"+ userName + "/" + projectName,
            token: params.secretKey
        })
    }
}
import { config } from "../config/config";
import { GuestAPI } from "../guest";
import { IClientParams } from "./clientInterface";

export class MonagoClient extends GuestAPI {

    constructor(params: IClientParams) {

        const [userName, projectName] = Buffer.from(params.secretKey, "base64").toString().split(":")
        if (!userName) {
            throw new Error("Invalid token")
        }

        super({
            authorization: "",
            hostUri: params.serviceUri ?? config.MONAGO_URI + "/app/" + userName + "/" + projectName,
            token: params.secretKey
        })
    }
}
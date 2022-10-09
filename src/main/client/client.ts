import { config } from "../../config/config";
import { GuestAPI } from "../role/guest";
import { IClientParams } from "./client.interface";

export class MonagoClient extends GuestAPI {

    constructor(params: IClientParams) {

        if (process.env.MONAGO_SECRET_KEY) {
            params.secretKey = process.env.MONAGO_SECRET_KEY
        }
        const [userName, projectName] = Buffer.from(params.secretKey, "base64").toString().split(":")
        if (!userName) {
            throw new Error("Invalid secretKey, readmore: https://docs.monago.io")
        }

        super({
            authorization: "Bearer",
            hostUri: params.serviceUri ?? config.MONAGO_CLIENT_URI + "/" + userName + "/" + projectName,
            token: params.secretKey
        })
    }
}
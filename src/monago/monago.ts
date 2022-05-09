import { Admin } from "../admin/admin";
import { config } from "../config/config";
import { Guest } from "../guest/guest";
import { IMonagoParams } from "./monagoInterface";

export class Monago {
    guest: Guest
    admin: Admin

    constructor(params: IMonagoParams){
        this.guest = new Guest(params.guest ?? {
            serviceUri: ""
        })

        this.admin = new Admin(params.admin ?? {
            githubToken: "",
            hostUri: config.MONAGO_URI,
        })
    }

}
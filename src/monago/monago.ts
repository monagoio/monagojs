import { Admin } from "../admin/admin";
import { config } from "../config/config";
import { Guest } from "../guest/guest";
import { IMonagoParams } from "./monagoInterface";

export class Monago {
    guest: Guest
    admin: Admin

    constructor(params?: IMonagoParams){
        if (!params){
            params = {
                guest: {
                    serviceUri: "",
                    projectName: "",
                    token: "",
                    userName: ""
                },
                admin: {
                    token: "",
                    hostUri: config.MONAGO_URI,
                }
            }
        }
        this.guest = new Guest(params.guest ?? {
            serviceUri: "",
            projectName: "",
            token: "",
            userName: ""
        })

        this.admin = new Admin(params.admin ?? {
            token: "",
            hostUri: config.MONAGO_URI,
        })
    }

}
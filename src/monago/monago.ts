import { MonagoAdmin } from "../admin/admin";
import { config } from "../config/config";
import { Guest } from "../guest/guest";
import { IMonagoParams } from "./monago.interface";

export class Monago {
    guest: Guest
    admin: MonagoAdmin

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
                    hostUri: config.MONAGO_ADMIN_URI,
                }
            }
        }
        this.guest = new Guest(params.guest ?? {
            serviceUri: "",
            projectName: "",
            token: "",
            userName: ""
        })

        this.admin = new MonagoAdmin(params.admin ?? {
            token: "",
            hostUri: config.MONAGO_ADMIN_URI,
        })
    }

}
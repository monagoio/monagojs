import axios from "axios";
import { config } from "../config/config";
import { IAdminParams } from "./adminInterface";
import { Project } from "./project/project";

export interface IAdminCredential {
    hostUri?: string
    authorization?: string
    token?: string
}

export interface ILoginWithUsername {
    username: string;
    password: string
}

export interface ILoginWithEmail {
    email: string;
    password: string
}

export interface ILoginWithToken {
    token: string
    grant_type: string
}

export type LoginParams<T> = ((...args: any[]) => any) | ILoginWithUsername | ILoginWithEmail | ILoginWithToken

export interface RegisterParams {
    full_name:string
    username: string
    email: string
    password: string
}


export class MonagoAdmin {

    private hostUri?: string
    public project?: Project

    constructor(params: IAdminParams) {
        this.hostUri = params.hostUri ?? config.MONAGO_URI
        this.logged({ authorization: "Bearer", hostUri: this.hostUri, token: params.token })
    }

    async login<T>(params?: LoginParams<T>) {

        if (typeof window !== "undefined") {

            let eventMethod: any = window.addEventListener != null ? "addEventListener" : "attachEvent";
            let eventer: any = window[eventMethod];
            let messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

            let child = window.open(this.hostUri + "/v1/github/login", '_blank', 'location=yes,height=970,width=600,scrollbars=yes,status=yes')
            let interval = setInterval(() => {
                child?.postMessage({ message: "requestResult" }, "*")
                console.log("waiting for response")
            }, 1000)

            eventer(messageEvent, (e: any) => {
                if (e.data.result) {
                    clearInterval(interval)
                    localStorage.setItem('userInfo', JSON.stringify(e.data.message))
                    this.logged(e.data.message)

                    if (params && typeof params == "function") {
                        params(e)
                    }
                }
            })

        } else if (params && typeof params == "object" && "password" in params) {

            return axios({ method: 'post', url: this.hostUri + "/v1/auth/user/login", data: params }).then(data => data).catch(err => err.response)

        } else if (params && typeof params == "object" && "token" in params) {

            throw Error("Login with token currently not supported")
        }
    }

    async register(params?: RegisterParams) {

        if (typeof window !== "undefined") {

            this.login(params)

        } else if (params && typeof params == "object" && "password" in params) {

            return axios({ method: 'post', url: this.hostUri + "/v1/user/register", data: params }).then(data => data).catch(err => err.response)

        } else if (params && typeof params == "object" && "token" in params) {

            throw Error("Register with token currently not supported")
        }
    }

    private logged(credential: IAdminCredential) {
        if (credential) {
            this.project = new Project(credential)
        } else {
            throw Error("Login failed, credential not found")
        }
    }

}
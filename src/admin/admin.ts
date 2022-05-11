import { config } from "../config/config";
import { IAdminParams } from "./adminInterface";
import { Project } from "./project/project";

export interface IAdminCredential {
    hostUri?: string
    authorization?: string
    token?: string
}

export class Admin {

    private hostUri?: string
    private credential?: IAdminCredential
    private project?: Project

    constructor(params: IAdminParams) {
        this.hostUri = params.hostUri
    }

    login(callback?: Function | any) {
        let eventMethod: any = window.addEventListener != null ? "addEventListener" : "attachEvent";
        let eventer: any = window[eventMethod];
        let messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
        let child = window.open(this.hostUri ?? config.MONAGO_URI + "/v1/github/login", '_blank', 'location=yes,height=970,width=600,scrollbars=yes,status=yes')
        let interval = setInterval(() => {
            child?.postMessage({ message: "requestResult" }, "*")
            console.log("waiting for response")
        }, 1000)

        eventer(messageEvent, (e: any) => {
            if (e.data.result) {
                clearInterval(interval)
                localStorage.setItem('userInfo', JSON.stringify(e.data.message))
                this.credential = e.data.message
                this.logged()
                
                if (callback) {
                    callback(e)
                }
            }
        })
    }

    private logged() {
        if(this.credential){
            this.project = new Project(this.credential)

        } else {
            throw Error("Login failed, credential not found")
        }
    }

}
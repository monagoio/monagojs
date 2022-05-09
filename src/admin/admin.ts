import { IAdminParams } from "./adminInterface";

export class Admin {

    private hostUri?: string

    constructor(params: IAdminParams) {
        this.hostUri = params.hostUri
    }


    login(callback: Function | any) {
        let eventMethod: any = window.addEventListener != null ? "addEventListener" : "attachEvent";
        let eventer: any = window[eventMethod];
        let messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
        let child = window.open(this.hostUri + "/v1/github/login", '_blank', 'location=yes,height=970,width=600,scrollbars=yes,status=yes')
        let interval = setInterval(() => {
            child?.postMessage({ message: "requestResult" }, "*")
            console.log("hit")
        }, 1000)

        console.log(child)
        
        eventer(messageEvent, (e:any) => {
            if(e.data.result){
                clearInterval(interval)
                localStorage.setItem('userInfo', JSON.stringify(e.data.message))
                console.log(e.data)
                callback(e)
            }
        })
    }
}
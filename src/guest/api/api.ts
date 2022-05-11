import axios, { AxiosRequestHeaders } from "axios"
import { IGuestCredential } from "../guest"

interface RequestData {
    data?: any
    params?: any
    url: string
    version?: number
}

export class GuestAPI {

    private credential?: IGuestCredential
    private headers?: AxiosRequestHeaders

    constructor(params?: IGuestCredential) {
        this.credential = params
        this.headers = {
            'Authorization': `${this.credential?.authorization} ${this.credential?.token}`,
            'Content-Type': 'application/json'
        }
    }

    private url(url: string, version?: number) {
        return this.credential?.hostUri + '/v' + (version ?? 1) + url
    }

    post(data: RequestData) {
        return axios({
            method: 'post',
            url: this.url(data.url, data.version),
            headers: this.headers,
            data: data.data,
            params: data.params
        })
    }

    put(data: RequestData) {
        return axios({
            method: 'put',
            url: this.url(data.url, data.version),
            headers: this.headers,
            data: data.data,
            params: data.params
        })
    }

    patch(data: RequestData) {
        return axios({
            method: 'patch',
            url: this.url(data.url, data.version),
            headers: this.headers,
            data: data.data,
            params: data.params
        })
    }

    delete(data: RequestData) {
        return axios({
            method: 'delete',
            url: this.url(data.url, data.version),
            headers: this.headers,
            data: data.data,
            params: data.params
        })
    }

    get(data: RequestData) {
        return axios({
            method: 'get',
            url: this.url(data.url, data.version),
            headers: this.headers,
            data: data.data,
            params: data.params
        })
    }
}
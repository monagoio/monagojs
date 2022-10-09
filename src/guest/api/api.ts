import axios, { AxiosRequestHeaders, AxiosResponse } from "axios"
import { IGuestCredential } from "../guest"

interface RequestData {
    data?: any
    params?: any
    url: string
    version?: number
}

export interface ClientLoginParams {
    username?: string
    password?: string
    grant_type?: string
}

export interface ClientRegisterParams {
    username?: string
    email?: string
    password?: string
    grant_type?: string
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

    async login(data: ClientLoginParams): Promise<AxiosResponse> {

        return axios({
            method: 'post',
            url: this.url("/auth/login", 1),
            headers: this.headers,
            data: data,
        }).then(data => data).catch(err => err.response)
    }

    async register(data: ClientRegisterParams): Promise<AxiosResponse> {

        return axios({
            method: 'post',
            url: this.url("/auth/login", 1),
            headers: this.headers,
            data: data,
        }).then(data => data).catch(err => err.response)
    }

    async post(data: RequestData): Promise<AxiosResponse> {
        console.log(this.url(data.url, data.version))
        return axios({
            method: 'post',
            url: this.url(data.url, data.version),
            headers: this.headers,
            data: data.data,
            params: data.params
        }).then(data => data).catch(err => err.response)
    }

    async put(data: RequestData): Promise<AxiosResponse> {
        return axios({
            method: 'put',
            url: this.url(data.url, data.version),
            headers: this.headers,
            data: data.data,
            params: data.params
        }).then(data => data).catch(err => err.response)
    }

    async patch(data: RequestData): Promise<AxiosResponse> {
        return axios({
            method: 'patch',
            url: this.url(data.url, data.version),
            headers: this.headers,
            data: data.data,
            params: data.params
        }).then(data => data).catch(err => err.response)
    }

    async delete(data: RequestData): Promise<AxiosResponse> {
        return axios({
            method: 'delete',
            url: this.url(data.url, data.version),
            headers: this.headers,
            data: data.data,
            params: data.params
        }).then(data => data).catch(err => err.response)
    }

    async get(data: RequestData): Promise<AxiosResponse> {
        return axios({
            method: 'get',
            url: this.url(data.url, data.version),
            headers: this.headers,
            data: data.data,
            params: data.params
        }).then(data => data).catch(err => err.response)
    }
}
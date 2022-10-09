import { config } from './../../../../config/config';
import { DEFAULT_API_VERSION } from './../const/version';
import axios, { AxiosRequestHeaders, AxiosResponse } from "axios"
import { IGuestCredential } from "../guest"
import { cookies } from '../../../../shared/cookie';
import { COOKIE_HEADER_KEY } from '../const/cookies';

interface RequestData {
    data?: any
    params?: any
    url: string
    version?: number
}

export interface ClientLoginParams {
    name?: string
    email?: string
    password?: string
    grant_type?: string
    version?: number
}

export interface ClientRegisterParams {
    name?: string
    email?: string
    password?: string
    grant_type?: string
    version?: number
}

export class GuestAPI {

    private credential?: IGuestCredential

    set headers(header: AxiosRequestHeaders) {
        cookies.setCookie(
            COOKIE_HEADER_KEY,
            JSON.stringify(header),
            config.MONAGO_PRIVATE_SESSION_EXP,
        )
    }
    get headers(): AxiosRequestHeaders {
        return JSON.parse(cookies.getCookie(
            COOKIE_HEADER_KEY
        ))
    }

    constructor(params?: IGuestCredential) {
        this.credential = params
        this.setHeader(params)
    }

    private setHeader(credential?: IGuestCredential) {
        this.headers = {
            'Authorization': `${credential?.authorization} ${credential?.token}`,
            'Content-Type': 'application/json'
        }
    }

    private url(url: string, version?: number) {
        return this.credential?.hostUri + '/v' + (version ?? DEFAULT_API_VERSION) + url
    }

    async login(data: ClientLoginParams): Promise<AxiosResponse> {

        return axios({
            method: 'post',
            url: this.url("/auth/login", data.version),
            headers: this.headers,
            data: data,
        }).then(res => {
            const newcredential = {
                ...this.credential,
                ...(res.data.data)
            }
            this.setHeader(newcredential)
            return res
        }).catch(err => err.response)
    }

    async register(data: ClientRegisterParams): Promise<AxiosResponse> {

        return axios({
            method: 'post',
            url: this.url("/auth/register", data.version),
            headers: this.headers,
            data: data,
        }).then(res => res).catch(err => err.response)
    }

    async post(data: RequestData): Promise<AxiosResponse> {
        return axios({
            method: 'post',
            url: this.url(data.url, data.version),
            headers: this.headers,
            data: data.data,
            params: data.params
        }).then(res => res).catch(err => err.response)
    }

    async put(data: RequestData): Promise<AxiosResponse> {
        return axios({
            method: 'put',
            url: this.url(data.url, data.version),
            headers: this.headers,
            data: data.data,
            params: data.params
        }).then(res => res).catch(err => err.response)
    }

    async patch(data: RequestData): Promise<AxiosResponse> {
        return axios({
            method: 'patch',
            url: this.url(data.url, data.version),
            headers: this.headers,
            data: data.data,
            params: data.params
        }).then(res => res).catch(err => err.response)
    }

    async delete(data: RequestData): Promise<AxiosResponse> {
        return axios({
            method: 'delete',
            url: this.url(data.url, data.version),
            headers: this.headers,
            data: data.data,
            params: data.params
        }).then(res => res).catch(err => err.response)
    }

    async get(data: RequestData): Promise<AxiosResponse> {
        return axios({
            method: 'get',
            url: this.url(data.url, data.version),
            headers: this.headers,
            data: data.data,
            params: data.params
        }).then(res => res).catch(err => err.response)
    }
}
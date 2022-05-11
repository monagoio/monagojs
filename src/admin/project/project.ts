import { IAdminCredential } from "../admin";
import axios, { AxiosRequestHeaders } from 'axios';
import { ICreateProject, IDeletePorject } from "./interfaces/project";

export class Project {
    private credential?: IAdminCredential
    private headers?: AxiosRequestHeaders

    constructor(params?: IAdminCredential) {
        this.credential = params
        this.headers = {
            'Authorization': `${this.credential?.authorization} ${this.credential?.token}`,
            'Content-Type': 'application/json'
        }
    }

    createProject(params: ICreateProject) {
        return axios({ method: 'post', url: this.credential?.hostUri + '/v1/projects', headers: this.headers, data: params })
    }

    deleteProject(params: IDeletePorject) {
        return axios({ method: 'delete', url: this.credential?.hostUri + '/v1/projects' + `/${params.id}`, headers: this.headers, data: params })
    }
}
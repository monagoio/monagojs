import { IAdminCredential } from "../admin";
import axios from 'axios';

export interface ICreateProject {
    name: string
    description: string
}

export class Project {
    private credential?: IAdminCredential
    private headers?: any

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
}
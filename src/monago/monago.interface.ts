import { IAdminParams } from "../admin/admin.interface";
import { IGuestParams } from "../guest/guest.interface";

export interface IMonagoParams {
    admin?: IAdminParams,
    guest?: IGuestParams 
}
export interface IMonago { }
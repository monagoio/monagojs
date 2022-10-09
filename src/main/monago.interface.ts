import { IAdminParams } from "./role/admin/admin.interface";
import { IGuestParams } from "./role/guest/guest.interface";

export interface IMonagoParams {
    admin?: IAdminParams,
    guest?: IGuestParams 
}
export interface IMonago { }
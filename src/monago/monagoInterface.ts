import { IAdminParams } from "../admin/adminInterface";
import { IGuestParams } from "../guest/guestInterface";

export interface IMonagoParams {
    admin?: IAdminParams,
    guest?: IGuestParams 
}
export interface IMonago { }
import { Rol } from '.';

export type UsersCrud = UserCrud[];

export interface UserCrud {
    CI_ID_USUARIO: number;
    CV_NOMBRE: string;
    CV_APELLIDO1: string;
    CV_APELLIDO2: string;
    CV_CEDULA: string;
    CV_CORREO: string;
    CV_DIRECCION: string;
    CV_TELEFONO: string;
    CI_ID_ROL: Rol;
    CB_ESTADO: boolean;
    CV_CLAVE?: string;
}

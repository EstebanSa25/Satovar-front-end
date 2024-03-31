export interface UserProfileApiInterface {
    userWithoutCLAVE: UserWithoutClave;
}

export interface UserWithoutClave {
    CI_ID_USUARIO: number;
    CV_NOMBRE: string;
    CV_APELLIDO1: string;
    CV_APELLIDO2: string;
    CV_CEDULA: string;
    CV_CORREO: string;
    CV_DIRECCION: string;
    CV_TELEFONO: string;
    CI_ID_ROL: number;
    CB_ESTADO: boolean;
}

export interface UserOrdersApiInterface {
    CI_ID_PEDIDO: number;
    T_COMPRA: TCompra;
}

export interface TCompra {
    CF_FECHA_PAGO: string;
}

//Medida camisa
export interface MedidaCamisaInterfaceApi {
    medida: MedidaCamisa;
}

export interface MedidaCamisa {
    CI_ID_CAMISA: number;
    CI_PECHO: number;
    CI_CINTURA: number;
    CI_CADERA: number;
    CI_ESPALDA: number;
    CI_HOMBRO: number;
    CI_CUELLO: number;
    CI_L_MANGA: number;
    CI_L_TOTAL: number;
    CI_BRAZO: number;
    CI_PUNO: number;
    CV_DETALLES: string;
}

//Medida Chaleco
export interface MedidaChalecoInterfaceApi {
    medida: Medida;
}

interface Medida {
    CI_ID_CHALECO: number;
    CI_PECHO: number;
    CI_CINTURA: number;
    CI_CADERA: number;
    CI_L_TOTAL: number;
    CV_DETALLES: string;
}

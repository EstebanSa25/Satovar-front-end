export interface OrderApiInterface {
    CI_ID_ESTADO: number;
    CI_ID_PEDIDO: number;
    T_COMPRA: TCompra;
}

export interface TCompra {
    T_DETALLE_COMPRA: TDetalleCompra[];
    CD_TOTAL: string;
    T_USUARIO: TUsuario;
}

export interface TDetalleCompra {
    CF_FECHA_ENTREGA: string;
}

export interface TUsuario {
    CV_CEDULA: string;
    CV_NOMBRE: string;
    CV_APELLIDO1: string;
    CV_DIRECCION: string;
    CV_TELEFONO: string;
}

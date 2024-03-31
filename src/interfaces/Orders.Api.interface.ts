export interface OrderApiInterface {
    CI_ID_ESTADO: number;
    CI_ID_PEDIDO: number;
    T_COMPRA: O_TCompra;
}

export interface O_TCompra {
    T_DETALLE_COMPRA: O_TDetalleCompra[];
    CD_TOTAL: string;
    T_USUARIO: O_TUsuario;
}

export interface O_TDetalleCompra {
    CF_FECHA_ENTREGA: string;
}

export interface O_TUsuario {
    CV_CEDULA: string;
    CV_NOMBRE: string;
    CV_APELLIDO1: string;
    CV_DIRECCION: string;
    CV_TELEFONO: string;
}

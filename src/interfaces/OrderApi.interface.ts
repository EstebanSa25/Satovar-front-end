export interface RootOrder {
    CI_ID_PEDIDO: number;
    T_ESTADO: G_TEstado;
    T_COMPRA: G_TCompra;
}

export interface G_TEstado {
    CV_DESCRIPCION: string;
}

export interface G_TCompra {
    CF_FECHA_PAGO: string;
    CD_SUBTOTAL: string;
    CD_IMPUESTOS: string;
    CD_TOTAL: string;
    T_USUARIO: G_TUsuario;
    T_DETALLE_COMPRA: G_TDetalleCompra[];
}

export interface G_TUsuario {
    CV_NOMBRE: string;
    CV_APELLIDO1: string;
    CV_APELLIDO2: string;
    CV_DIRECCION: string;
    CV_CORREO: string;
    CV_TELEFONO: string;
    CV_CEDULA: string;
}

export interface G_TDetalleCompra {
    CF_FECHA_ENTREGA: string;
    CI_CANTIDAD: number;
    T_PRODUCTO_X_TALLA: G_TProductoXTalla;
    T_PRODUCTO: G_TProducto;
}

export interface G_TProductoXTalla {
    T_TALLA: G_TTalla;
}

export interface G_TTalla {
    CV_TALLA: string;
}

export interface G_TProducto {
    CV_NOMBRE: string;
    CD_PRECIO: string;
}

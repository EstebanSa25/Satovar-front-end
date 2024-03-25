export interface ProductInterfaceAPI {
    CI_ID_PRODUCTO: number;
    CV_NOMBRE: string;
    CV_FOTO: string;
    CI_ID_TELA: number;
    CD_PRECIO: string;
    CI_ID_CATEGORIA: number;
    CI_ID_CATALOGO: number;
    CB_ESTADO: boolean;
    T_PRODUCTO_X_TALLA: TProductoXTalla[];
    T_TELA: TTela;
}

export interface TProductoXTalla {
    T_TALLA: TTalla;
    CI_CANTIDAD: number;
}

export interface TTalla {
    CI_ID_TALLA: number;
    CV_TALLA: string;
}

export interface TTela {
    CV_NOMBRE: string;
}

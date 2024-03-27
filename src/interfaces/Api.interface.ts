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
    T_CATALOGO: TCatalogo;
}

export interface TProductoXTalla {
    T_TALLA: TTalla;
    CI_CANTIDAD: number;
}
export interface TCatalogo {
    CI_ID_CATALOGO: number;
}
export interface TTalla {
    CI_ID_TALLA: number;
    CV_TALLA: string;
}

export interface TTela {
    CV_NOMBRE: string;
}

export interface CategoryInterfaceAPI {
    categories: Category[];
}

export interface Category {
    CI_ID_CATEGORIA: number;
    CV_DESCRIPCION: string;
}

//obtener medidas de chaleco del usuario

export interface MeasureWaistcoatInterfaceAPI {
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

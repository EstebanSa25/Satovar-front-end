interface Cantidad {
    Pantalon: number;
    Saco: number;
    Chaleco: number;
    Corbata: number;
    camisa: number;
}

export enum CatalogoType {
    Venta = 1,
    Alquiler = 2,
}

export interface Product {
    id: number;
    nombre: string;
    precio: number;
    imagen: string;
    descripcion: string;
    cantidad: Cantidad;
    color: string;
    tallas: P_T_TALLA[];
    catalogo: CatalogoType | number;
    fecha?: Date;
}

export interface ProductBuy {
    id: number;
    nombre: string;
    precio: number;
    imagen: string;
    descripcion: string;
    cantidad: Cantidad;
    color: string;
    tallas: P_T_TALLA[];
    catalogo: CatalogoType | number;
    fecha?: Date;
    count: number;
    setCountCart: () => void;
}
interface P_T_TALLA {
    T_TALLA: P_T_TALLA;
    CI_CANTIDAD: number;
}
interface P_T_TALLA {
    CI_ID_TALLA: number;
    CV_TALLA: string;
}
export interface ProductAdd {
    Id?: number;
    Nombre: string;
    Foto: string;
    Tela: number;
    Precio: number;
    Categoria: number;
    Catalogo: number;
    Tallas: AddTalla[];
    Estilos: number[];
    Estado: boolean;
}

export interface AddTalla {
    Id_talla: number;
    Cantidad: number;
}

export interface ProductShop {
    id: number;
    nombre: string;
    precio: number;
    imagen: string;
    descripcion: string;
    cantidad: number;
    talla?: number;
}

//Crud de productos

export interface ProductInterfaceCRUD {
    CI_ID_PRODUCTO: number;
    CV_NOMBRE: string;
    CV_FOTO: string;
    CD_PRECIO: string;
    CB_ESTADO: boolean;
    T_TELA: C_TTela;
    T_ESTILO_X_PRODUCTO: C_TEstiloXProducto[];
    T_CATALOGO: C_TCatalogo;
    T_CATEGORIA: C_TCategoria;
    T_PRODUCTO_X_TALLA: C_TProductoXTalla[];
}
export interface C_TProductoXTalla {
    CI_CANTIDAD: number;
    T_TALLA: C_TTalla;
}
export interface C_TTalla {
    CV_TALLA: string;
    CI_ID_TALLA: number;
}
export interface C_TTela {
    CV_NOMBRE: string;
    CI_ID_TELA: number;
}

export interface C_TEstiloXProducto {
    CI_ID_ESTILO_X_PRODUCTO: number;
    T_ESTILO: C_TEstilo;
}

export interface C_TEstilo {
    CI_ID_ESTILO: number;
    CV_DESCRIPCION: string;
}

export interface C_TCatalogo {
    CI_ID_CATALOGO: number;
    CV_DESCRIPCION: string;
}

export interface C_TCategoria {
    CI_ID_CATEGORIA: number;
    CV_DESCRIPCION: string;
}

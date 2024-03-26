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
    tallas: [];
    catalogo: CatalogoType | number;
    fecha?: Date;
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

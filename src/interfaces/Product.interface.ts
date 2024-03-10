interface Cantidad {
    Pantalon: number;
    Saco: number;
    Chaleco: number;
    Corbata: number;
    camisa: number;
}

export interface Product {
    id: number;
    nombre: string;
    precio: number;
    imagen: string;
    descripcion: string;
    cantidad: Cantidad;
    color: string;
    fecha?: Date;
}

export interface ProductShop {
    id: number;
    nombre: string;
    precio: number;
    imagen: string;
    descripcion: string;
    cantidad: number;
}

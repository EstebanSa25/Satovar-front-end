export interface SalesYear {
    ANIO: number;
    VALOR: string;
}

export interface ProductSales {
    Producto: string;
    TotalCantidad: number;
}
export interface FabricMostUsed {
    CV_NOMBRE: string;
    CANTIDAD: number;
}
export interface SalesMonth {
    ENERO: string;
    FEBRERO: string;
    MARZO: string;
    ABRIL: string;
    MAYO: string;
    JUNIO: string;
    JULIO: string;
    AGOSTO: string;
    SEPTIEMBRE: string;
    OCTUBRE: string;
    NOVIEMBRE: string;
    DICIEMBRE: string;
}
export interface SalesTotal {
    total_ingresos: string;
}

export interface CurrentOrders {
    CantidadPedidos: number;
}

export interface SuccessOrders {
    CantidadPedidos: number;
}

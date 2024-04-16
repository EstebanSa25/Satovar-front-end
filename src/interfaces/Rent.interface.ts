export interface RentProps {
    id: number;
    title: string;
    category: string;
    sizes: Root;
    price: number;
    image: string;
}
type Root = Root2[];

interface Root2 {
    T_TALLA: TTalla;
    CI_CANTIDAD: number;
}

interface TTalla {
    CI_ID_TALLA: number;
    CV_TALLA: string;
}

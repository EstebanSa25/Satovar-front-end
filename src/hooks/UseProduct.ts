/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from 'react-redux';
import { Product, ProductInterfaceAPI } from '../interfaces';
import {
    onAddNewProduct,
    onCategoryActive,
    onLoadProducts,
} from '../redux-store';
import satovarApi from '../api/SatovarApi';
export const UseProduct = () => {
    const { products, activeProduct, isLoadingProduct, CategoryActive } =
        useSelector(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (state: any) => state.Product
        );
    const dispatch = useDispatch();

    const startGetProduct = async () => {
        const { data } = await satovarApi.get<ProductInterfaceAPI[]>(
            '/Products?size=true'
        );
        const products = data.map((product: ProductInterfaceAPI) => {
            return {
                id: product.CI_ID_PRODUCTO,
                nombre: product.CV_NOMBRE,
                precio: product.CD_PRECIO,
                imagen: product.CV_FOTO,
                descripcion: '',
                cantidad: {
                    Pantalon: 1,
                    Saco: 2,
                    Chaleco: 3,
                    Corbata: 4,
                    camisa: 5,
                },
                catalogo: product.T_CATALOGO.CI_ID_CATALOGO,
                color: product.T_TELA.CV_NOMBRE,
                tallas: product.T_PRODUCTO_X_TALLA,
            };
        }) as unknown as Product[];
        dispatch(onLoadProducts(products));
    };
    const startCategoryActive = (category: string) => {
        dispatch(onCategoryActive(category));
    };

    const startCreateProduct = (product: Product) => {
        dispatch(onAddNewProduct(product));
    };
    return {
        //Valores
        products,
        activeProduct,
        isLoadingProduct,
        CategoryActive,
        //Metodos
        startCreateProduct,
        startGetProduct,
        startCategoryActive,
    };
};

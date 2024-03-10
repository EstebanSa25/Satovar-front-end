import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../interfaces';
import { onAddNewProduct } from '../redux-store';
export const UseProduct = () => {
    const { products, activeProduct, isLoadingProduct } = useSelector(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (state: any) => state.Product
    );
    const dispatch = useDispatch();

    const startCreateProduct = (product: Product) => {
        dispatch(onAddNewProduct(product));
    };

    return {
        //Valores
        products,
        activeProduct,
        isLoadingProduct,
        //Metodos
        startCreateProduct,
    };
};

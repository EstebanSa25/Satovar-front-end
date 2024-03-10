import { useDispatch, useSelector } from 'react-redux';
import { ProductShop } from '../interfaces';
import { OnProductAdd, OnProductDelete } from '../redux-store';

export const UseShoppinCart = () => {
    const dispatch = useDispatch();
    const { products, subtotal, envio, total } = useSelector(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (state: any) => state.Cart
    );
    const startAddProduct = (product: ProductShop) => {
        dispatch(OnProductAdd(product));
    };
    const startProductDelete = (id: number) => {
        dispatch(OnProductDelete(id));
    };

    return {
        //Propiedades
        products,
        subtotal,
        envio,
        total,
        //Metodos
        startAddProduct,
        startProductDelete,
    };
};

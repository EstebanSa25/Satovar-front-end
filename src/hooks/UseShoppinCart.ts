import { useDispatch, useSelector } from 'react-redux';
import { AxiosErrorData, ProductShop } from '../interfaces';
import {
    OnProductAdd,
    OnProductDelete,
    onAddSize,
    onBuyCart,
    onCalculateMount,
    onLoading,
} from '../redux-store';
import satovarApi from '../api/SatovarApi';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AxiosError } from 'axios';
import { ErrorSweetAlert } from '../helpers';
import { UseProduct } from '.';

export const UseShoppinCart = () => {
    const dispatch = useDispatch();
    const { products, subtotal, envio, impuesto, total, isLoading } =
        useSelector(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (state: any) => state.Cart
        );
    const { startGetProduct } = UseProduct();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { status } = useSelector((state: any) => state.Auth);
    const navigate = useNavigate();
    const startAddProduct = (product: ProductShop) => {
        dispatch(OnProductAdd(product));
    };
    const startProductDelete = (id: number) => {
        dispatch(OnProductDelete(id));
    };
    const startAddSize = (id: number, size: number) => {
        dispatch(onAddSize({ id, talla: size }));
    };
    const starCalculateMount = () => {
        let mount: number = 0;
        if (products.length === 0) {
            return dispatch(
                onCalculateMount({
                    subtotal: 0,
                    envio: 0,
                    impuesto: 0,
                })
            );
        }
        products.map((product: ProductShop) => {
            mount += +product.precio;
        });
        dispatch(
            onCalculateMount({
                subtotal: mount,
                envio: 3000,
                impuesto: mount * 0.13,
            })
        );
    };
    const startShoppinCart = async () => {
        if (status === 'not-authenticated') {
            return navigate('/auth/login');
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const productShop = products.map((product: any) => {
            return {
                id: +product.id,
                cantidad: +product.cantidad,
                talla: +product.talla,
            };
        });
        try {
            dispatch(onLoading(true));
            await satovarApi.post('/buy/products', {
                subtotal: subtotal,
                impuestos: impuesto,
                descuentos: 0,
                total: total,
                productos: productShop,
            });
            dispatch(onLoading(false));
            navigate('/');
            Swal.fire({
                icon: 'success',
                title: 'Compra realizada con exito',
                text: 'Gracias por su compra',
                showConfirmButton: true,
                timer: 3000,
            });
            dispatch(onBuyCart());
        } catch (error) {
            const axiosError = error as AxiosError;
            const errorCode = axiosError.response?.status as number;
            const errorString = axiosError.response?.data as AxiosErrorData;
            ErrorSweetAlert(
                errorCode,
                'Error al realizar la compra',
                errorString.error || errorString.message || ''
            );
        }
    };
    return {
        //Propiedades
        products,
        subtotal,
        envio,
        impuesto,
        total,
        isLoading,
        //Metodos
        startAddProduct,
        startProductDelete,
        startAddSize,
        startShoppinCart,
        starCalculateMount,
    };
};

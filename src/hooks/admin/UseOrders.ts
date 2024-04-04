/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from 'react-redux';
import satovarApi from '../../api/SatovarApi';
import { OrderApiInterface } from '../../interfaces';
import { onChangeOrderStatus, onGetAllOrders } from '../../redux-store';

export const UseOrders = () => {
    const { orders } = useSelector((state: any) => state.Order);
    const dispatch = useDispatch();
    const startGetAllOrders = async () => {
        try {
            const { data } = await satovarApi.get<OrderApiInterface[]>(
                '/buy/products'
            );
            dispatch(onGetAllOrders(data));
        } catch (error) {
            console.log(error);
        }
    };
    const startUpdateStatusOrder = async (id: number, value: number) => {
        try {
            await satovarApi.put(`/buy/products/${id}`, {
                Estado: value,
            });
            dispatch(onChangeOrderStatus({ id, estado: value }));
        } catch (error) {
            console.log(error);
        }
    };
    return {
        orders,
        //metodos
        startGetAllOrders,
        startUpdateStatusOrder,
    };
};

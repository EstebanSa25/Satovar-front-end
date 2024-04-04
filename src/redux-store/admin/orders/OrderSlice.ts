import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { OrderApiInterface } from '../../../interfaces';

const initialState = {
    orders: [] as OrderApiInterface[],
};
enum OrderState {
    Pendiente = 1,
    Completo = 2,
    EnProceso = 3,
}
interface OrderStateInterface {
    id: number;
    estado: number;
}

export const OrderSlice = createSlice({
    name: 'Order',
    initialState,
    reducers: {
        onGetAllOrders: (state, action: PayloadAction<OrderApiInterface[]>) => {
            action.payload.forEach((order: OrderApiInterface) => {
                const exists = state.orders.some(
                    (orders) => orders.CI_ID_PEDIDO === order.CI_ID_PEDIDO
                );
                if (!exists) {
                    state.orders.push(order);
                } else {
                    state.orders = state.orders.map((dbOrder) => {
                        if (dbOrder.CI_ID_PEDIDO === order.CI_ID_PEDIDO) {
                            return order;
                        }
                        return dbOrder;
                    });
                }
            });
        },
        onChangeOrderStatus: (
            state,
            action: PayloadAction<OrderStateInterface>
        ) => {
            state.orders = state.orders.map((order) => {
                if (order.CI_ID_PEDIDO === action.payload.id) {
                    order.CI_ID_ESTADO = action.payload.estado;
                }
                return order;
            });
        },
    },
});

export const { onGetAllOrders, onChangeOrderStatus } = OrderSlice.actions;

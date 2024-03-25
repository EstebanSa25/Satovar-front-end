import { createSlice } from '@reduxjs/toolkit';
import { ProductShop } from '../../interfaces';

const initialState = {
    products: [] as ProductShop[],
    subtotal: 0 as number,
    envio: 0 as number,
    impuesto: 0 as number,
    total: 0 as number,
};

export const CartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        OnProductAdd: (state, { payload }) => {
            if (state.products.some((product) => product.id === payload.id)) {
                state.products = state.products.map((product) => {
                    if (product.id === payload.id) {
                        return {
                            ...product,
                            cantidad: product.cantidad + 1,
                        };
                    }
                    return product;
                });
            } else {
                state.products.push(payload);
            }
        },
        OnProductDelete: (state, { payload }) => {
            state.products = state.products.filter(
                (product) => product.id !== payload
            );
        },
        onAddSize: (state, { payload }) => {
            state.products.map((product) => {
                if (product.id === payload.id) {
                    product.talla = payload.talla;
                }
            });
        },
        onBuyCart: (state) => {
            state.products = [];
            state.subtotal = 0;
            state.envio = 0;
            state.impuesto = 0;
            state.total = 0;
        },
        onCalculateMount: (state, { payload }) => {
            state.subtotal = payload.subtotal;
            state.envio = payload.envio;
            state.impuesto = payload.impuesto;
            state.total = state.subtotal + state.envio + state.impuesto;
        },
    },
});

export const {
    OnProductAdd,
    OnProductDelete,
    onAddSize,
    onBuyCart,
    onCalculateMount,
} = CartSlice.actions;

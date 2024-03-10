import { createSlice } from '@reduxjs/toolkit';
import { ProductShop } from '../../interfaces';

const initialState = {
    products: [] as ProductShop[],
    subtotal: 0 as number,
    envio: 0 as number,
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
    },
});

export const { OnProductAdd, OnProductDelete } = CartSlice.actions;

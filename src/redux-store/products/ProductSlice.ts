import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../interfaces';

const initialState = {
    products: [] as Product[],
    activeProduct: null as Product | null,
    isLoadingProduct: false as boolean,
};

export const ProductSlice = createSlice({
    name: 'Product',
    initialState,
    reducers: {
        onSetActiveProduct: (state, { payload }) => {
            state.activeProduct = payload;
        },
        onAddNewProduct: (state, { payload }) => {
            //Validar si el producto ya existe
            const exists = state.products.some(
                (product) => product.id === payload.id
            );
            if (!exists) {
                state.products.push(payload);
            }
        },
        onUpdateProduct: (state, { payload }) => {
            state.products = state.products.map((product) => {
                if (product.id === payload.id) {
                    return payload;
                }

                return product;
            });
        },
        onDeleteProduct: (state) => {
            if (state.activeProduct) {
                state.products = state.products.filter(
                    (product) => product.id !== state.activeProduct!.id
                );
                state.activeProduct = null;
            }
        },
        onLoadProducts: (state, { payload = [] }) => {
            state.isLoadingProduct = true;
            // state.events = payload;
            payload.forEach((product: Product) => {
                const exists = state.products.some(
                    (dbProduct) => dbProduct.id === product.id
                );
                if (!exists) {
                    state.products.push(product);
                }
            });
        },
    },
});

export const {
    onSetActiveProduct,
    onAddNewProduct,
    onUpdateProduct,
    onDeleteProduct,
    onLoadProducts,
} = ProductSlice.actions;
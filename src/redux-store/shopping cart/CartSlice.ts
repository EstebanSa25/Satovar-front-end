import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductShop } from '../../interfaces';

const initialState = {
    products: localStorage.getItem('cart')
        ? (Array.from(
              JSON.parse(localStorage.getItem('cart') || '[]')
          ) as ProductShop[])
        : ([] as ProductShop[]),
    subtotal: 0 as number,
    envio: 0 as number,
    impuesto: 0 as number,
    total: 0 as number,
    isLoading: false as boolean,
};
interface ProductShopCount {
    id: number;
    cantidad: number;
}
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
        onCountProduct: (state, action: PayloadAction<ProductShopCount>) => {
            state.products = state.products.map((product) => {
                if (product.id === action.payload.id) {
                    product.cantidad = action.payload.cantidad;
                }
                return product;
            });
        },
        onAddSize: (state, { payload }) => {
            state.products.map((product) => {
                if (product.id === payload.id) {
                    product.talla = payload.talla;
                }
            });
        },
        onBuyCart: (state) => {
            state.isLoading = false;
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
        onLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
    },
});

export const {
    OnProductAdd,
    OnProductDelete,
    onAddSize,
    onBuyCart,
    onCalculateMount,
    onLoading,
    onCountProduct,
} = CartSlice.actions;

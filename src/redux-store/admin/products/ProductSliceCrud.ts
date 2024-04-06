import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductInterfaceCRUD } from '../../../interfaces';
const initialState = {
    products: [] as ProductInterfaceCRUD[],
    isLoading: false,
    activeProduct: {} as ProductInterfaceCRUD,
};

export interface ProductCrudState {
    products: ProductInterfaceCRUD[];
    isLoading: boolean;
    activeProduct: ProductInterfaceCRUD;
}
export const productSliceCrud = createSlice({
    name: 'ProductCrud',
    initialState,
    reducers: {
        onIsLoadingCrud: (state) => {
            state.isLoading = true;
        },
        onAddProductCrud: (
            state,
            action: PayloadAction<ProductInterfaceCRUD>
        ) => {
            if (
                !state.products.find(
                    (product) =>
                        product.CI_ID_PRODUCTO ===
                            action.payload.CI_ID_PRODUCTO ||
                        product.CV_NOMBRE === action.payload.CV_NOMBRE
                )
            ) {
                state.products.push(action.payload);
            }

            state.isLoading = false;
        },
        onGetProductCrud: (
            state,
            action: PayloadAction<ProductInterfaceCRUD[]>
        ) => {
            action.payload.forEach((product: ProductInterfaceCRUD) => {
                const exists = state.products.some(
                    (dbProduct) =>
                        dbProduct.CI_ID_PRODUCTO === product.CI_ID_PRODUCTO
                );
                if (!exists) {
                    state.products.push(product);
                } else {
                    state.products = state.products.map((dbProduct) => {
                        if (
                            dbProduct.CI_ID_PRODUCTO === product.CI_ID_PRODUCTO
                        ) {
                            return product;
                        }
                        return dbProduct;
                    });
                }
            });
            state.isLoading = false;
        },
        onUpdateProductCrud: (
            state,
            action: PayloadAction<ProductInterfaceCRUD>
        ) => {
            state.products = state.products.map((product) => {
                if (product.CI_ID_PRODUCTO === action.payload.CI_ID_PRODUCTO) {
                    return action.payload;
                }
                return product;
            });
            state.isLoading = false;
        },
        onDeleteProductCrud: (state, action: PayloadAction<number>) => {
            state.products = state.products.map((product) => {
                if (product.CI_ID_PRODUCTO === action.payload) {
                    product.CB_ESTADO = !product.CB_ESTADO;
                }
                return product;
            });
            state.isLoading = false;
        },
        onActiveProductCrud: (
            state,
            action: PayloadAction<ProductInterfaceCRUD>
        ) => {
            state.activeProduct = action.payload;
        },
        onResetActiveProductCrud: (state) => {
            state.activeProduct = {} as ProductInterfaceCRUD;
        },
    },
});

export const {
    onAddProductCrud,
    onDeleteProductCrud,
    onGetProductCrud,
    onUpdateProductCrud,
    onActiveProductCrud,
    onResetActiveProductCrud,
    onIsLoadingCrud,
} = productSliceCrud.actions;

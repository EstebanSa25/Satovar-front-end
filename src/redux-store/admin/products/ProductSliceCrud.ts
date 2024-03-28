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
            state.products.push(action.payload);
            state.isLoading = false;
        },
        onGetProductCrud: (
            state,
            action: PayloadAction<ProductInterfaceCRUD[]>
        ) => {
            state.products = action.payload;
            state.isLoading = false;
        },
        onUpdateProductCrud: (
            state,
            action: PayloadAction<ProductInterfaceCRUD>
        ) => {
            state.products = state.products.map((product) =>
                product.CI_ID_PRODUCTO === action.payload.CI_ID_PRODUCTO
                    ? action.payload
                    : product
            );
            state.isLoading = false;
        },
        onDeleteProductCrud: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(
                (product) => product.CI_ID_PRODUCTO !== action.payload
            );
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

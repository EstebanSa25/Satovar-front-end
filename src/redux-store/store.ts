import { configureStore } from '@reduxjs/toolkit';
import { ProductSlice } from './products/ProductSlice';
import { CartSlice } from './shopping cart/CartSlice';
import { AuthSlice } from './auth/AuthSlice';
import { MeasureSlice } from './measure/MeasureSlice';
import { productSliceCrud } from './admin/products/ProductSliceCrud';

export const store = configureStore({
    reducer: {
        [ProductSlice.name]: ProductSlice.reducer,
        [CartSlice.name]: CartSlice.reducer,
        [AuthSlice.name]: AuthSlice.reducer,
        [MeasureSlice.name]: MeasureSlice.reducer,
        [productSliceCrud.name]: productSliceCrud.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

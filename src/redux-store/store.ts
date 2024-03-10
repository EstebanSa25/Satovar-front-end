import { configureStore } from '@reduxjs/toolkit';
import { ProductSlice } from './products/ProductSlice';
import { CartSlice } from './shopping cart/CartSlice';
export const store = configureStore({
    reducer: {
        [ProductSlice.name]: ProductSlice.reducer,
        [CartSlice.name]: CartSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

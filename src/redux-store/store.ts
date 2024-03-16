import { configureStore } from '@reduxjs/toolkit';
import { ProductSlice } from './products/ProductSlice';
import { CartSlice } from './shopping cart/CartSlice';
import { AuthSlice } from './auth/AuthSlice';

export const store = configureStore({
    reducer: {
        [ProductSlice.name]: ProductSlice.reducer,
        [CartSlice.name]: CartSlice.reducer,
        [AuthSlice.name]: AuthSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

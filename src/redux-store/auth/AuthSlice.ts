import { createSlice } from '@reduxjs/toolkit';
import { UserEntity } from '../../interfaces';

const initialState = {
    status: 'not-authenticated',
    user: {} as UserEntity,
    errorMessage: undefined,
    isLoading: false,
};

export const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        onChecking: (state) => {
            state.isLoading = true;
            state.status = 'checking';
            state.user = {};
            state.errorMessage = undefined;
        },
        onLogin: (state, { payload }) => {
            state.isLoading = false;
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined;
        },
        onLogout: (state, { payload }) => {
            state.isLoading = false;
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = payload;
        },
        clearErrorMessage: (state) => {
            state.errorMessage = undefined;
        },
    },
});

export const { onChecking, onLogin, onLogout, clearErrorMessage } =
    AuthSlice.actions;

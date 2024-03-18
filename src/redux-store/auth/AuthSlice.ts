import { createSlice } from '@reduxjs/toolkit';
import { UserEntity } from '../../interfaces';

const initialState = {
    status: 'not-authenticated',
    user: {} as UserEntity,
    errorMessage: undefined,
    isLoading: false,
    userGoogle: null,
};

export const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        onChecking: (state) => {
            state.isLoading = true;
            state.status = 'checking';
            state.user = {};
            state.userGoogle = null;
            state.errorMessage = undefined;
        },
        onLogin: (state, { payload }) => {
            state.isLoading = false;
            state.status = 'authenticated';
            state.user = payload;
            state.userGoogle = null;
            state.errorMessage = undefined;
        },
        onLogout: (state, { payload }) => {
            state.isLoading = false;
            state.status = 'not-authenticated';
            state.user = {};
            state.userGoogle = null;
            state.errorMessage = payload;
        },
        clearErrorMessage: (state) => {
            state.errorMessage = undefined;
        },
        onLoginGoogle: (state, { payload }) => {
            state.isLoading = false;
            state.status = 'not-authenticated';
            state.userGoogle = payload;
            state.errorMessage = undefined;
        },
    },
});

export const {
    onChecking,
    onLogin,
    onLogout,
    clearErrorMessage,
    onLoginGoogle,
} = AuthSlice.actions;

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserCrud } from '../../../interfaces';
import { UsersCrud } from '../../../interfaces/UserCrudApi.interface';

const initialState = {
    Users: [] as UserCrud[],
    isLoading: false,
    ActiveUser: {} as UserCrud,
};

export const UserCrudSlice = createSlice({
    name: 'UserCrud',
    initialState,
    reducers: {
        onActiveUser: (state, action: PayloadAction<UserCrud>) => {
            state.ActiveUser = action.payload;
        },
        onResetActiveUser: (state) => {
            state.ActiveUser = {} as UserCrud;
        },
        onStartLoading: (state) => {
            state.isLoading = true;
        },
        onCreateUsers: (state, action: PayloadAction<UserCrud>) => {
            if (
                !state.Users.find(
                    (user) =>
                        user.CI_ID_USUARIO === action.payload.CI_ID_USUARIO
                )
            ) {
                state.Users.push(action.payload);
            }

            state.isLoading = false;
        },

        onUpdateUser: (state, action: PayloadAction<UserCrud>) => {
            state.Users = state.Users.map((user) => {
                if (user.CI_ID_USUARIO === action.payload.CI_ID_USUARIO) {
                    return action.payload;
                }
                return user;
            });
            state.isLoading = false;
        },
        onDeteleteUser: (state, action: PayloadAction<number>) => {
            state.Users = state.Users.filter(
                (user) => user.CI_ID_USUARIO !== action.payload
            );
            state.isLoading = false;
        },
        onGetAllUsers: (state, action: PayloadAction<UsersCrud>) => {
            action.payload.forEach((user: UserCrud) => {
                const exists = state.Users.some(
                    (dbUser) => dbUser.CI_ID_USUARIO === user.CI_ID_USUARIO
                );
                if (!exists) {
                    state.Users.push(user);
                } else {
                    state.Users = state.Users.map((dbUsers) => {
                        if (dbUsers.CI_ID_USUARIO === user.CI_ID_USUARIO) {
                            return user;
                        }
                        return dbUsers;
                    });
                }
            });
            state.isLoading = false;
        },
        onChangeUserState: (state, action: PayloadAction<number>) => {
            state.Users = state.Users.map((user) => {
                if (user.CI_ID_USUARIO === action.payload) {
                    if (user.CB_ESTADO === true) {
                        user.CB_ESTADO = false;
                    } else {
                        user.CB_ESTADO = true;
                    }
                }
                return user;
            });
        },
    },
});

export const {
    onGetAllUsers,
    onCreateUsers,
    onDeteleteUser,
    onStartLoading,
    onUpdateUser,
    onResetActiveUser,
    onActiveUser,
    onChangeUserState,
} = UserCrudSlice.actions;

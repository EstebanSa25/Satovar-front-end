/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from 'react-redux';
import { AxiosErrorData, UserCrud, UsersCrud } from '../../interfaces';
import {
    onActiveUser,
    onChangeUserState,
    onGetAllUsers,
    onResetActiveUser,
    onUpdateUser,
} from '../../redux-store';
import { Rol } from '../../interfaces/User.interface';
import satovarApi from '../../api/SatovarApi';
import { AxiosError } from 'axios';
import { ErrorSweetAlert } from '../../helpers';
import Swal from 'sweetalert2';

export const UseUsersCrud = () => {
    const dispatch = useDispatch();
    interface IState {
        UserCrud: {
            Users: UserCrud[];
            isLoading: boolean;
            ActiveUser: UserCrud;
        };
    }
    const { Users, isLoading, ActiveUser } = useSelector(
        (state: IState) => state.UserCrud
    );
    // Metodos
    const startCreateUser = async (
        form: UserCrud | any,
        onResetForm: () => void,
        inputRef: React.RefObject<HTMLElement>
    ) => {
        try {
            if (+form.Rol === Rol.Administrador) {
                await satovarApi.post('/auth/create/admin', form);
                // dispatch(onCreateUsers(form));
                startGetAllUsers();
                Swal.fire({
                    title: 'Usuario creado',
                    text: 'El usuario se ha creado correctamente',
                    icon: 'success',
                });
                onResetForm();
                inputRef.current?.click();
            } else {
                await satovarApi.post('/auth/create', form);
                // dispatch(onCreateUsers(form));
                startGetAllUsers();
                Swal.fire({
                    title: 'Usuario creado',
                    text: 'El usuario se ha creado correctamente',
                    icon: 'success',
                });
                onResetForm();
                inputRef.current?.click();
            }
        } catch (error) {
            const axiosError = error as AxiosError;
            const errorCode = axiosError.response?.status as number;
            const errorString = axiosError.response?.data as AxiosErrorData;
            console.log(error);
            ErrorSweetAlert(
                errorCode,
                'Error al crear usuario',
                errorString.error || errorString.message || ''
            );
            console.log(error);
        }
    };
    const startGetAllUsers = async () => {
        try {
            const { data } = await satovarApi.get<UsersCrud>('/auth');
            dispatch(onGetAllUsers(data));
        } catch (error) {
            console.log(error);
        }
    };
    const startUpdateUser = async (
        form: UserCrud | any,
        onResetForm: () => void,
        inputRef: React.RefObject<HTMLElement>,
        id: number
    ) => {
        try {
            const { data } = await satovarApi.put<UserCrud>(
                `/auth/${id}`,
                form
            );
            inputRef.current?.click();
            dispatch(onUpdateUser(data));
            startGetAllUsers();
            onResetForm();
            Swal.fire({
                title: 'Usuario actualizado',
                text: 'El usuario se ha actualizado correctamente',
                icon: 'success',
            });
        } catch (error) {
            const axiosError = error as AxiosError;
            const errorCode = axiosError.response?.status as number;
            const errorString = axiosError.response?.data as AxiosErrorData;
            ErrorSweetAlert(
                errorCode,
                'Error al actualizar usuario',
                errorString.error || errorString.message || ''
            );
        }
    };
    const startDeleteUser = async (id: number) => {
        try {
            await satovarApi.put(`/auth/state/${id}`);
            dispatch(onChangeUserState(id));
            startGetAllUsers();
        } catch (error) {
            const axiosError = error as AxiosError;
            const errorCode = axiosError.response?.status as number;
            const errorString = axiosError.response?.data as AxiosErrorData;
            ErrorSweetAlert(
                errorCode,
                'Error al cambiar estado de usuario',
                errorString.error || errorString.message || ''
            );
        }
    };

    const startSetActiveUser = (user: UserCrud) => {
        dispatch(onActiveUser(user));
    };
    const startResetActiveUser = () => {
        dispatch(onResetActiveUser());
    };
    return {
        //variables
        Users,
        isLoading,
        ActiveUser,
        // Metodos
        startCreateUser,
        startGetAllUsers,
        startUpdateUser,
        startDeleteUser,
        startSetActiveUser,
        startResetActiveUser,
    };
};
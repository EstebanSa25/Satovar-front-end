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
import {
    EncryptData,
    ErrorSweetAlert,
    validarFormatoCorreo,
} from '../../helpers';
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
            if (!validarFormatoCorreo(form.Correo)) {
                return ErrorSweetAlert(
                    0,
                    'Correo invalido',
                    'Verifique su correo electronico e intente de nuevo'
                );
            }
            if (+form.Rol === Rol.Administrador) {
                const encryptedData = EncryptData(form);
                await satovarApi.post('/auth/create/admin', { encryptedData });
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
                const encryptedData = EncryptData(form);
                await satovarApi.post('/auth/create', { encryptedData });
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
            const encryptedData = EncryptData(form);
            const EncriptedId = EncryptData({ Id: id });
            const EncriptedChange = EncriptedId.replace(/\//g, '-');
            const { data } = await satovarApi.put<UserCrud>(
                `/auth/${EncriptedChange}`,
                {
                    encryptedData,
                }
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
        const EncriptedId = await EncryptData({ Id: id });
        const EncriptedChange = EncriptedId.replace(/\//g, '-');
        try {
            await satovarApi.put(`/auth/state/${EncriptedChange}`);
            dispatch(onChangeUserState(id));
            startGetAllUsers();
        } catch (error) {
            console.log(error);
            const axiosError = error as AxiosError;
            const errorCode = axiosError.response?.status as number;
            const errorString = axiosError.response?.data as AxiosErrorData;
            ErrorSweetAlert(
                errorCode,
                'Error al cambiar estado de usuario',
                errorString.error ||
                    errorString.message ||
                    errorString.Error ||
                    ''
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

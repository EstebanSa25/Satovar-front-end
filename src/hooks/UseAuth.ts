/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from 'react-redux';
import {
    clearErrorMessage,
    onChecking,
    onLogin,
    onLogout,
} from '../redux-store';
import satovarApi from '../api/SatovarApi';
import Swal from 'sweetalert2';
import { RegisterForm } from '../interfaces';
import {
    CampoVacioSweetAlert,
    ErrorSweetAlert,
    validarCamposVacios,
    validarFormatoCorreo,
} from '../helpers';
import { AxiosError } from 'axios';

export const UseAuth = () => {
    const dispatch = useDispatch();
    const { status, user, errorMessage, isLoading } = useSelector(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (state: any) => state.Auth
    );
    const startCreateUser = async (user: RegisterForm, e: any) => {
        e.preventDefault();
        if (!validarFormatoCorreo(user.Correo)) {
            return ErrorSweetAlert(
                0,
                'Correo invalido',
                'Verifique su correo electronico e intente de nuevo'
            );
        }
        const campos = validarCamposVacios(user);
        if (campos) return CampoVacioSweetAlert('con el registro');
        try {
            await satovarApi.post('/auth/create', {
                ...user,
            });
            Swal.fire('Verifica tu correo electronico para activar tu cuenta');
        } catch (error) {
            const axiosError = error as AxiosError;

            const errorCode = error?.toJSON().status;
            // console.log(error?.toJSON().error);
            ErrorSweetAlert(
                errorCode,
                'Error al crear usuario',
                `${axiosError.response.data.error || ''}`
            );
        }
    };
    const startLogin = async (email: string, password: string, e: any) => {
        e.preventDefault();
        if (email.trim() === '' || password.trim() === '') {
            const campos = validarCamposVacios({ email, password });
            if (campos) return CampoVacioSweetAlert('con el inicio de sesión');
        }
        dispatch(onChecking());
        try {
            const { data } = await satovarApi.post('/auth/login', {
                correo: email,
                clave: password,
            });
            const { token, user } = data;
            localStorage.setItem('token', token);
            localStorage.setItem(
                'token-init-date',
                new Date().getTime().toString()
            );
            dispatch(onLogin(user));
        } catch (error) {
            const axiosError = error as AxiosError;
            const errorCode = error?.toJSON().status;
            dispatch(onLogout('Credenciales incorrectas'));
            ErrorSweetAlert(
                errorCode,
                'Credenciales incorrectas',
                axiosError.response.data.error
            );
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    };
    const startLogout = () => {};
    return {
        // Valores
        status,
        user,
        errorMessage,
        isLoading,
        // Metodos
        startLogin,
        startLogout,
        startCreateUser,
    };
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from 'react-redux';
import {
    clearErrorMessage,
    onChecking,
    onLogin,
    onLogout,
    onLoginGoogle,
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
import { signInWithGoogle } from '../firebase';
import { useNavigate } from 'react-router-dom';

export const UseAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { status, user, errorMessage, isLoading, userGoogle } = useSelector(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (state: any) => state.Auth
    );
    const startCreateUser = async (
        user: RegisterForm,
        e: any,
        onResetForm: () => void
    ) => {
        e.preventDefault();
        if (!validarFormatoCorreo(user.Correo)) {
            return ErrorSweetAlert(
                0,
                'Correo invalido',
                'Verifique su correo electronico e intente de nuevo'
            );
        }
        if (userGoogle) {
            user.Clave = userGoogle.GoogleId;
        }
        const campos = validarCamposVacios(user);
        if (campos) return CampoVacioSweetAlert('con el registro');
        try {
            await satovarApi.post('/auth/create', {
                ...user,
            });
            Swal.fire('Verifica tu correo electronico para activar tu cuenta');
            onResetForm();
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
                'Error al iniciar sesion',
                axiosError.response.data.error
            );
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    };
    const startGoogleSignIn = async () => {
        const result = await signInWithGoogle();
        if (!result.ok) return dispatch(onLogout('Error al iniciar sesion'));
        const { displayName, email, uid, phoneNumber } = result;
        const name = displayName!.split(' ');
        const user = {
            Nombre: name[0],
            Apellido1: name[1] || '',
            Apellido2: name[2] || '',
            Correo: email,
            Telefono: phoneNumber || '',
            GoogleId: uid,
        };
        try {
            const { data } = await satovarApi.post('/auth/login', {
                correo: email,
                clave: uid,
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
            switch (axiosError.response?.status) {
                case 404:
                    dispatch(onLoginGoogle(user));
                    navigate('/auth/registro');
                    break;
            }
        }
    };
    const startLogout = () => {};
    return {
        // Valores
        status,
        user,
        errorMessage,
        userGoogle,
        isLoading,
        // Metodos
        startLogin,
        startGoogleSignIn,
        startLogout,
        startCreateUser,
    };
};

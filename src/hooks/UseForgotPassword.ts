/* eslint-disable @typescript-eslint/no-explicit-any */
import Swal from 'sweetalert2';
import { decryptData, validarFormatoCorreo } from '../helpers';
import { EncryptData } from '../helpers';
import satovarApi from '../api/SatovarApi';
import { AxiosError } from 'axios';
import { AxiosErrorData } from '../interfaces';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const UseForgotPassword = () => {
    const [reset, setReset] = useState(false);
    const navigate = useNavigate();
    const startSendEmail = async () => {
        Swal.fire({
            title: 'Ingresa tu correo electrónico',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off',
            },
            showCancelButton: true,
            confirmButtonText: 'Enviar',
            showLoaderOnConfirm: true,
            preConfirm: async (email) => {
                if (!validarFormatoCorreo(email)) {
                    return Swal.showValidationMessage(
                        'Ingresa un correo valido'
                    );
                }
                try {
                    const encryptedData = EncryptData(email);
                    await satovarApi.post('/auth/forgot-password', {
                        encryptedData,
                    });
                    Swal.fire({
                        icon: 'success',
                        title: 'Correo enviado',
                        text: 'Revisa tu correo para continuar con el proceso',
                    });
                } catch (error) {
                    const axiosError = error as AxiosError;
                    const errorString = axiosError.response
                        ?.data as AxiosErrorData;
                    Swal.showValidationMessage(
                        `Error: ${
                            errorString.Error ||
                            errorString.error ||
                            errorString.message ||
                            ''
                        }`
                    );
                }
            },
            allowOutsideClick: () => !Swal.isLoading(),
        });
    };

    const startResetPassword = async (
        form: any,
        token: string,
        resetForm: () => void
    ) => {
        if (
            form.password === undefined ||
            form.password === '' ||
            form.passwordConfirmation === undefined ||
            form.passwordConfirmation === ''
        )
            return Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Debes ingresar una contraseña y confirmarla',
            });
        if (form.password !== form.passwordConfirmation) {
            return Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Las contraseñas no coinciden',
            });
        }
        try {
            const encryptedData = EncryptData(form.password);
            await satovarApi.post(`/auth/reset-password/${token}`, {
                encryptedData,
            });
            Swal.fire({
                icon: 'success',
                title: 'Contraseña actualizada',
                text: 'Tu contraseña ha sido actualizada correctamente',
            });
            setReset(true);
            resetForm();
            setTimeout(function () {
                window.close();
            }, 30000);
        } catch (error) {
            const axiosError = error as AxiosError;
            const errorString = axiosError.response?.data as AxiosErrorData;
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: `${
                    errorString.Error ||
                    errorString.error ||
                    errorString.message ||
                    ''
                }`,
            });
        }
    };
    interface Root {
        encripted: string;
    }
    interface StatePasswordStatus {
        estado: boolean;
    }

    const startGetStatePassword = async (token: string) => {
        try {
            const { data } = await satovarApi.get<Root>(
                `/auth/state-password/${token}`
            );
            const { encripted } = data;
            const decipher = decryptData<StatePasswordStatus>(encripted);
            if (!encripted) {
                navigate('/');
            }
            const state: StatePasswordStatus =
                decipher.data || ({} as StatePasswordStatus);
            const { estado } = state;
            if (estado === false) {
                navigate('/');
            }
        } catch (error) {
            navigate('/');
        }
    };

    return {
        reset,
        startSendEmail,
        startResetPassword,
        startGetStatePassword,
    };
};

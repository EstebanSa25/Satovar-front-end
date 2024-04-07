/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from 'react-redux';
import satovarApi from '../../api/SatovarApi';
import { AxiosErrorData } from '../../interfaces';
import { Fabric } from '..';
import {
    onActiveFabric,
    onChangeFabricState,
    onGetAllFabric,
    onResetActiveFabric,
} from '../../redux-store/admin/fabric/FabricCrudSlice';
import { EncryptData, ErrorSweetAlert } from '../../helpers';
import { AxiosError } from 'axios';
import Swal from 'sweetalert2';

export const UseFabricCrud = () => {
    const dispatch = useDispatch();
    const reader = new FileReader();

    interface IState {
        FabricCrud: {
            Fabrics: Fabric[];
            isLoading: boolean;
            ActiveFabric: Fabric;
        };
    }
    const { Fabrics, isLoading, ActiveFabric } = useSelector(
        (state: IState) => state.FabricCrud
    );
    // Metodos
    const startCreateFabric = async (
        form: Fabric | any,
        onResetForm: () => void,
        inputRef: React.RefObject<HTMLElement>
    ) => {
        try {
            const file = document.getElementById('Foto') as HTMLInputElement;
            if (!file.files) return;
            const image = file.files[0];
            if (!form.Foto) {
                return Swal.fire({
                    title: 'Error',
                    text: 'Debe seleccionar una imagen',
                    icon: 'error',
                });
            }
            //convertir a base64
            reader.readAsDataURL(image);
            reader.onload = async function () {
                const base64 = reader.result as string;
                try {
                    const encryptedData = EncryptData({
                        ...form,
                        Foto: base64,
                    });
                    await satovarApi.post('/fabric/create', {
                        encryptedData,
                    });

                    onResetForm();
                    inputRef.current?.click();
                    startGetAllFabric();
                    Swal.fire({
                        title: 'Tela creada',
                        icon: 'success',
                    });
                } catch (error) {
                    const axiosError = error as AxiosError;
                    const errorCode = axiosError.response?.status as number;
                    const errorString = axiosError.response
                        ?.data as AxiosErrorData;
                    console.log(error);
                    ErrorSweetAlert(
                        errorCode,
                        'Error al crear tela',
                        errorString.error || errorString.message || ''
                    );
                }
            };
        } catch (error) {
            const axiosError = error as AxiosError;
            const errorCode = axiosError.response?.status as number;
            const errorString = axiosError.response?.data as AxiosErrorData;
            console.log(error);
            ErrorSweetAlert(
                errorCode,
                'Error al crear tela',
                errorString.error || errorString.message || ''
            );
            console.log(error);
        }
    };
    const startGetAllFabric = async () => {
        try {
            const { data } = await satovarApi.get<Fabric[]>('/fabric');
            dispatch(onGetAllFabric(data));
        } catch (error) {
            console.log(error);
        }
    };
    const startUpdateFabric = async (
        form: Fabric | any,
        onResetForm: () => void,
        inputRef: React.RefObject<HTMLElement>,
        id: number
    ) => {
        console.log(form);
        try {
            const file = document.getElementById(
                'FotoActualizar'
            ) as HTMLInputElement;
            if (!file.files) return;
            const image = file.files[0];
            if (
                form.FotoActualizar === undefined ||
                form.FotoActualizar === null ||
                form.FotoActualizar === ''
            ) {
                const encryptedData = EncryptData({
                    ...form,
                    Foto: undefined,
                });
                const EncriptedId = EncryptData({ Id: id });
                const EncriptedChange = EncriptedId.replace(/\//g, '-');
                await satovarApi.put<Fabric>(`/fabric/${EncriptedChange}`, {
                    encryptedData,
                });
                startGetAllFabric();

                onResetForm();
                inputRef.current?.click();
                return Swal.fire({
                    title: 'Tela actualizada',
                    icon: 'success',
                });
            }
            reader.readAsDataURL(image);
            reader.onload = async function () {
                const base64 = reader.result as string;
                try {
                    const encryptedData = EncryptData({
                        ...form,
                        Foto: base64 || '',
                    });
                    const EncriptedId = EncryptData({ Id: id });
                    const EncriptedChange = EncriptedId.replace(/\//g, '-');
                    await satovarApi.put<Fabric>(`/fabric/${EncriptedChange}`, {
                        encryptedData,
                    });
                    onResetForm();
                    inputRef.current?.click();
                    startGetAllFabric();
                    Swal.fire({
                        title: 'Tela actualizada',
                        icon: 'success',
                    });
                } catch (error) {
                    const axiosError = error as AxiosError;
                    const errorCode = axiosError.response?.status as number;
                    const errorString = axiosError.response
                        ?.data as AxiosErrorData;
                    console.log(error);
                    ErrorSweetAlert(
                        errorCode,
                        'Error al actualizar tela',
                        errorString.error || errorString.message || ''
                    );
                }
            };
        } catch (error) {
            const axiosError = error as AxiosError;
            const errorCode = axiosError.response?.status as number;
            const errorString = axiosError.response?.data as AxiosErrorData;
            ErrorSweetAlert(
                errorCode,
                'Error al actualizar tela',
                errorString.error || errorString.message || ''
            );
        }
    };
    const startDeleteFabric = async (id: number) => {
        try {
            const EncriptedId = EncryptData({ Id: id });
            const EncriptedChange = EncriptedId.replace(/\//g, '-');
            await satovarApi.put(`/fabric/state/${EncriptedChange}`);
            dispatch(onChangeFabricState(id));
            startGetAllFabric();
        } catch (error) {
            const axiosError = error as AxiosError;
            const errorCode = axiosError.response?.status as number;
            const errorString = axiosError.response?.data as AxiosErrorData;
            ErrorSweetAlert(
                errorCode,
                'Error al cambiar estado de tela',
                errorString.error || errorString.message || ''
            );
        }
    };

    const startSetActiveFabric = (fabric: Fabric) => {
        dispatch(onActiveFabric(fabric));
    };
    const startResetActiveFabric = () => {
        dispatch(onResetActiveFabric());
    };
    return {
        //variables
        Fabrics,
        isLoading,
        ActiveFabric,
        // Metodos
        startCreateFabric,
        startGetAllFabric,
        startUpdateFabric,
        startDeleteFabric,
        startSetActiveFabric,
        startResetActiveFabric,
    };
};

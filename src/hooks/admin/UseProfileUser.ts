/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from 'react';
import satovarApi from '../../api/SatovarApi';
import {
    AxiosErrorData,
    MeasureSuiJacketGetApiInterface,
    MedidaCamisaInterfaceApi,
    MedidaChalecoInterfaceApi,
    PantMeasureInterfaceApi,
    UserOrdersApiInterface,
    UserProfileApiInterface,
} from '../../interfaces';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios, { AxiosError } from 'axios';
import { ErrorSweetAlert } from '../../helpers';

export const UseProfileUser = () => {
    // #region Hooks
    const [userInfo, setUserInfo] = useState({} as UserProfileApiInterface);
    const [userOrders, setUserOrders] = useState(
        [] as UserOrdersApiInterface[]
    );
    const [measureShirt, setMeasureShirt] = useState(
        {} as MedidaCamisaInterfaceApi
    );
    const [measureWaistcoat, setMeasureWaistcoat] = useState(
        {} as MedidaChalecoInterfaceApi
    );
    const [measureSuitJacket, setMeasureSuitJacket] = useState(
        {} as MeasureSuiJacketGetApiInterface
    );
    const [measurePants, setMeasurePants] = useState(
        {} as PantMeasureInterfaceApi
    );
    const navigate = useNavigate();
    // #endregion Hooks

    // #region Metodos de obtener informacion de usuario
    const startGetProfileUserInfo = async (id: string | undefined) => {
        try {
            const { data } = await satovarApi.get<UserProfileApiInterface>(
                `/auth/${parseInt(id || '0')}`
            );
            setUserInfo(data);
            return data;
        } catch (error) {
            navigate(-1);
            console.log(error);
        }
    };
    const startGetProfileUserOrder = async (id: string | undefined) => {
        try {
            const { data } = await satovarApi.get<UserOrdersApiInterface[]>(
                `/buy/products/${parseInt(id || '0')}`
            );
            setUserOrders(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };
    const startGetMeasureShirt = async (id: string | undefined) => {
        try {
            const { data } = await satovarApi.get<MedidaCamisaInterfaceApi>(
                `/measure/shirt/${parseInt(id || '0')}`
            );
            setMeasureShirt(data);
        } catch (error) {
            console.log(error);
        }
    };
    const startGetMeasureWaistcoat = async (id: string | undefined) => {
        try {
            const { data } = await satovarApi.get<MedidaChalecoInterfaceApi>(
                `/measure/waistcoat/${parseInt(id || '0')}`
            );
            setMeasureWaistcoat(data);
        } catch (error) {
            console.log(error);
        }
    };
    const startGetMeasureSuitJacket = async (id: string | undefined) => {
        try {
            const { data } =
                await satovarApi.get<MeasureSuiJacketGetApiInterface>(
                    `/measure/suit-jacket/${parseInt(id || '0')}`
                );
            setMeasureSuitJacket(data);
        } catch (error) {
            console.log(error);
        }
    };
    const startGetMeasurePants = async (id: string | undefined) => {
        try {
            const { data } = await satovarApi.get<PantMeasureInterfaceApi>(
                `/measure/pant/${parseInt(id || '0')}`
            );
            setMeasurePants(data);
        } catch (error) {
            console.log(error);
        }
    };
    // #endregion Metodos de obtener informacion de usuario

    // #region Metodos de guardar medidas
    const startCreateMeasureShirt = async (
        form: any,
        id: string | undefined
    ) => {
        console.log(form);

        try {
            await satovarApi.post('/measure/shirt', {
                id: parseInt(id || '0'),
                pecho: +form.PechoCamisa,
                cintura: +form.CinturaCamisa,
                cadera: +form.CaderaCamisa,
                espalda: +form.EspaldaCamisa,
                hombro: +form.HombroCamisa,
                cuello: +form.CuelloCamisa,
                largoManga: +form.L_mangaCamisa,
                largoTotal: +form.L_totalCamisa,
                brazo: +form.BrazoCamisa,
                puno: +form.PunioCamisa,
                detalles: form.DetalleCamisa,
            });
            startGetMeasureShirt(id);
            Swal.fire({
                icon: 'success',
                title: 'Medida de camisa guardada',
                showConfirmButton: false,
                timer: 1800,
            });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                const errorCode = axiosError.response?.status as number;
                const errorString = axiosError.response?.data as AxiosErrorData;
                ErrorSweetAlert(
                    errorCode,
                    'Error al guardar medida de camisa',
                    `${errorString.error || errorString.message || ''}`
                );
            }
        }
    };
    const startSaveSuitJacket = async (form: any, id: string | undefined) => {
        try {
            await satovarApi.post('/measure/suit-jacket', {
                id: parseInt(id || '0'),
                pecho: +form.PechoSaco,
                cintura: +form.CinturaSaco,
                cadera: +form.CaderaSaco,
                espalda: +form.EspaldaSaco,
                hombro: +form.HombroSaco,
                largoManga: +form.L_mangaSaco,
                largoTotal: +form.L_totalSaco,
                brazo: +form.BrazoSaco,
                puno: +form.PunioSaco,
                detalles: form.DetalleSaco,
            });
            startGetMeasureSuitJacket(id);
            Swal.fire({
                icon: 'success',
                title: 'Medida de saco guardada',
                showConfirmButton: false,
                timer: 1800,
            });
        } catch (error) {
            const axiosError = error as AxiosError;
            const errorCode = axiosError.response?.status as number;
            const errorString = axiosError.response?.data as AxiosErrorData;
            ErrorSweetAlert(
                errorCode,
                'Error al crear medida de saco',
                `${
                    errorString.error ||
                    errorString.Error ||
                    errorString.message ||
                    'Internal server error'
                }`
            );
        }
    };
    const startSavePant = async (form: any, id: string | undefined) => {
        try {
            const { data } = await satovarApi.post('/measure/pant', {
                id: parseInt(id || '0'),
                cintura: +form.CinturaPantalon,
                cadera: +form.CaderaPantalon,
                tiro: +form.TiroPantalon,
                rodilla: +form.RodillaPantalon,
                ruedo: +form.RuedoPantalon,
                largo: +form.LargoPantalon,
                detalles: form.DetallePantalon || '',
            });
            if (!data.estado) {
                throw new Error('Error al guardar la medida de pantalon');
            }
            startGetMeasurePants(id);
            Swal.fire({
                icon: 'success',
                title: 'Medida de pantalon guardada',
                showConfirmButton: false,
                timer: 1800,
            });
        } catch (error) {
            console.log(error);
            const axiosError = error as AxiosError;
            const errorCode = axiosError.response?.status as number;
            const errorString = axiosError.response?.data as AxiosErrorData;
            ErrorSweetAlert(
                errorCode,
                'Error al crear medida de pantalon',
                `${
                    errorString.error ||
                    errorString.Error ||
                    errorString.message ||
                    'Internal server error'
                }`
            );
        }
    };
    const CreateMeasureWaistcoat = async (
        form: any,
        id: string | undefined
    ) => {
        try {
            await satovarApi.post('/measure/waistcoat', {
                id: parseInt(id || '0'),
                pecho: +form.PechoChaleco,
                cintura: +form.CinturaChaleco,
                cadera: +form.CaderaChaleco,
                largoTotal: +form.L_totalChaleco,
                detalles: form.DetalleChaleco,
            });
            startGetMeasureWaistcoat(id);
            Swal.fire({
                icon: 'success',
                title: 'Medida de Chaleco guardada',
                showConfirmButton: false,
                timer: 1800,
            });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                const errorCode = axiosError.response?.status as number;
                const errorString = axiosError.response?.data as AxiosErrorData;
                ErrorSweetAlert(
                    errorCode,
                    'Error al guardar medida de chaleco',
                    `${errorString.error || errorString.message || ''}`
                );
            }
        }
    };
    //#endregion Metodos de guardar medidas

    // #region Metodos de actualizar medidas
    const startUpdateMeasureShirt = async (
        form: any,
        id: number,
        idUsuario: string | undefined
    ) => {
        try {
            await satovarApi.put(`/measure/shirt/${+id}`, {
                pecho: +form.PechoCamisa,
                cintura: +form.CinturaCamisa,
                cadera: +form.CaderaCamisa,
                espalda: +form.EspaldaCamisa,
                hombro: +form.HombroCamisa,
                cuello: +form.CuelloCamisa,
                largoManga: +form.L_mangaCamisa,
                largoTotal: +form.L_totalCamisa,
                brazo: +form.BrazoCamisa,
                puno: +form.PunioCamisa,
                detalles: form.DetalleCamisa,
            });
            startGetMeasureShirt(idUsuario);
            Swal.fire({
                icon: 'success',
                title: 'Medida de camisa actualizada',
                showConfirmButton: false,
                timer: 1800,
            });
        } catch (error) {
            const axiosError = error as AxiosError;
            const errorCode = axiosError.response?.status as number;
            const errorString = axiosError.response?.data as AxiosErrorData;
            ErrorSweetAlert(
                errorCode,
                'Error al editar medida de camisa',
                `${errorString.error || errorString.message || ''}`
            );
            console.log(error);
        }
    };
    const startUpdateMeasureWaistcoat = async (
        form: any,
        id: number,
        idUsuario: string | undefined
    ) => {
        try {
            await satovarApi.put(`/measure/waistcoat/${+id}`, {
                pecho: +form.PechoChaleco,
                cintura: +form.CinturaChaleco,
                cadera: +form.CaderaChaleco,
                largoTotal: +form.L_totalChaleco,
                detalles: form.DetalleChaleco,
            });
            startGetMeasureWaistcoat(idUsuario);
            Swal.fire({
                icon: 'success',
                title: 'Medida de Chaleco actualizada',
                showConfirmButton: false,
                timer: 1800,
            });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                const errorCode = axiosError.response?.status as number;
                const errorString = axiosError.response?.data as AxiosErrorData;
                ErrorSweetAlert(
                    errorCode,
                    'Error al editar medida de chaleco',
                    `${errorString.error || errorString.message || ''}`
                );
            }
        }
    };
    const startUpdateMeasureSuitJacket = async (
        form: any,
        id: number,
        idUsuario: string | undefined
    ) => {
        try {
            await satovarApi.put(`/measure/suit-jacket/${+id}`, {
                pecho: +form.PechoSaco,
                cintura: +form.CinturaSaco,
                cadera: +form.CaderaSaco,
                espalda: +form.EspaldaSaco,
                hombro: +form.HombroSaco,
                largoManga: +form.L_mangaSaco,
                largoTotal: +form.L_totalSaco,
                brazo: +form.BrazoSaco,
                puno: +form.PunioSaco,
                detalles: form.DetalleSaco,
            });
            startGetMeasureSuitJacket(idUsuario);
            Swal.fire({
                icon: 'success',
                title: 'Medida de Saco actualizada',
                showConfirmButton: false,
                timer: 1800,
            });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                const errorCode = axiosError.response?.status as number;
                const errorString = axiosError.response?.data as AxiosErrorData;
                ErrorSweetAlert(
                    errorCode,
                    'Error al editar medida de saco',
                    `${errorString.error || errorString.message || ''}`
                );
            }
        }
    };
    const startUpdateMeasurePants = async (
        form: any,
        id: number,
        idUsuario: string | undefined
    ) => {
        try {
            await satovarApi.put(`/measure/pant/${+id}`, {
                cintura: +form.CinturaPantalon,
                cadera: +form.CaderaPantalon,
                tiro: +form.TiroPantalon,
                rodilla: +form.RodillaPantalon,
                ruedo: +form.RuedoPantalon,
                largo: +form.LargoPantalon,
                detalles: form.DetallePantalon,
            });
            startGetMeasurePants(idUsuario);
            Swal.fire({
                icon: 'success',
                title: 'Medida de pantalon actualizada',
                showConfirmButton: false,
                timer: 1800,
            });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                const errorCode = axiosError.response?.status as number;
                const errorString = axiosError.response?.data as AxiosErrorData;
                ErrorSweetAlert(
                    errorCode,
                    'Error al editar medida de pantalon',
                    `${errorString.error || errorString.message || ''}`
                );
            }
        }
    };
    //#endregion Metodos de actualizar medidas
    return {
        //valores
        userInfo,
        userOrders,
        measureShirt,
        measureWaistcoat,
        measureSuitJacket,
        measurePants,
        //metodos para obtener informacion de usuario
        startGetProfileUserInfo,
        startGetProfileUserOrder,
        startGetMeasureShirt,
        startGetMeasureWaistcoat,
        startGetMeasureSuitJacket,
        startGetMeasurePants,
        //metodos de guardar medidas
        startCreateMeasureShirt,
        startSaveSuitJacket,
        startSavePant,
        CreateMeasureWaistcoat,
        // metodos de actualizar medidas
        startUpdateMeasureShirt,
        startUpdateMeasureWaistcoat,
        startUpdateMeasureSuitJacket,
        startUpdateMeasurePants,
    };
};

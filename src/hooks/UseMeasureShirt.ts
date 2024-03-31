/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import {
    onCreateMeasureShirtDetails,
    onCreateMeasureShirtLarge,
    onCreateMeasureShirtTop,
    onGetMeasureShirt,
} from '../redux-store';
import satovarApi from '../api/SatovarApi';
import Swal from 'sweetalert2';
import { ErrorSweetAlert } from '../helpers';
import axios, { AxiosError } from 'axios';
import { AxiosErrorData } from '../interfaces';

export const UseMeasureShirt = () => {
    const dispatch = useDispatch();
    const {
        measureShirtTop,
        measureShirtLarge,
        measureShirtDetails,
        measureShirt,
        //
    } = useSelector(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (state: any) => state.MeasureCreateShirt
    );
    const { user } = useSelector((state: any) => state.Auth);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const startSaveMeasureShirtTop = (formstate: any) => {
        dispatch(onCreateMeasureShirtTop(formstate));
    };
    const startSaveMeasureShirtLarge = (formstate: any) => {
        dispatch(onCreateMeasureShirtLarge(formstate));
    };
    const startSaveMeasureShirtDetails = (formstate: any) => {
        dispatch(onCreateMeasureShirtDetails(formstate));
    };
    const CreateMeasureShirt = async () => {
        try {
            const { data } = await satovarApi.post('/measure/shirt', {
                id: user.CI_ID_USUARIO,
                pecho: measureShirtTop.pechocamisa,
                cintura: measureShirtTop.cinturaCamisa,
                cadera: measureShirtTop.caderaCamisa,
                espalda: measureShirtTop.espaldaCamisa,
                hombro: measureShirtTop.hombroCamisa,
                cuello: measureShirtTop.cuelloCamisa,
                largoManga: measureShirtLarge.LargoMangaCamisa,
                largoTotal: measureShirtLarge.LargoTotalCamisa,
                brazo: measureShirtLarge.BrazoCamisa,
                puno: measureShirtLarge.PunoCamisa,
                detalles: measureShirtDetails,
            });
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
    const startGetMeasureShirt = async () => {
        try {
            if (!user.CI_ID_USUARIO) return;
            const { data } = await satovarApi.get(
                `/measure/shirt/${user.CI_ID_USUARIO}`
            );
            dispatch(onGetMeasureShirt(data));
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    return {
        //valores
        measureShirtTop,
        measureShirtLarge,
        measureShirtDetails,
        measureShirt,
        //funciones
        startSaveMeasureShirtTop,
        startSaveMeasureShirtLarge,
        startSaveMeasureShirtDetails,
        startGetMeasureShirt,
        CreateMeasureShirt,
    };
};

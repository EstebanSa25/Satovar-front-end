/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from 'react-redux';
import {
    onCreateMeasureSuitJacketDetails,
    onCreateMeasureSuitJacketLarge,
    onCreateMeasureSuitJacketTop,
    onGetMeasureSuitJacket,
} from '../redux-store';
import satovarApi from '../api/SatovarApi';
import Swal from 'sweetalert2';
import { AxiosError } from 'axios';
import { AxiosErrorData } from '../interfaces';
import { ErrorSweetAlert } from '../helpers';

export const UseMeasureSuitJacket = () => {
    const {
        measureSuitJacketTop,
        measureSuitJacketLarge,
        measureSuitJacketDetails,
        measureSuitJacket,
    } = useSelector((state: any) => state.MeasureCreateShirt);
    const { user } = useSelector((state: any) => state.Auth);
    const dispatch = useDispatch();

    const startSaveSuitJacketTop = (form: any) => {
        dispatch(onCreateMeasureSuitJacketTop(form));
    };
    const startSaveSuitJacketLarge = (form: any) => {
        dispatch(onCreateMeasureSuitJacketLarge(form));
    };
    const startSaveSuitJacketDetails = (form: any) => {
        dispatch(onCreateMeasureSuitJacketDetails(form));
    };

    const startSaveSuitJacket = async () => {
        try {
            await satovarApi.post('/measure/suit-jacket', {
                id: +user.CI_ID_USUARIO,
                pecho: +measureSuitJacketTop.PechoSaco,
                cintura: +measureSuitJacketTop.CinturaSaco,
                cadera: +measureSuitJacketTop.CaderaSaco,
                espalda: +measureSuitJacketTop.EspaldaSaco,
                hombro: +measureSuitJacketTop.HombroSaco,
                largoManga: +measureSuitJacketLarge.L_mangaSaco,
                largoTotal: +measureSuitJacketLarge.L_totalSaco,
                brazo: +measureSuitJacketLarge.BrazoSaco,
                puno: +measureSuitJacketLarge.PunioSaco,
                detalles: measureSuitJacketDetails.DetallesSaco,
            });
            Swal.fire({
                icon: 'success',
                title: 'Medida de saco guardada',
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
    interface MeasureSuiJacketApiInterface {
        medida: Medida;
    }

    interface Medida {
        CI_ID_SACO: number;
        CI_PECHO: number;
        CI_CINTURA: number;
        CI_CADERA: number;
        CI_ESPALDA: number;
        CI_HOMBRO: number;
        CI_L_MANGA: number;
        CI_L_TOTAL: number;
        CI_BRAZO: number;
        CI_PUNO: number;
        CV_DETALLES: string;
    }

    const startGetMeasureSuitJacket = async () => {
        try {
            const { data } = await satovarApi.get<MeasureSuiJacketApiInterface>(
                `/measure/suit-jacket/${+user.CI_ID_USUARIO}`
            );
            dispatch(onGetMeasureSuitJacket(data.medida));
        } catch (error) {
            console.log(error);
        }
    };
    return {
        // Variables
        measureSuitJacket,
        // Metodos
        startSaveSuitJacketTop,
        startSaveSuitJacketLarge,
        startSaveSuitJacketDetails,
        startSaveSuitJacket,
        startGetMeasureSuitJacket,
    };
};

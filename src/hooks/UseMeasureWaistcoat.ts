/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import {
    onGetMeasureWaistcoat,
    onCreateMeasureWaistcoatTop,
    onCreateMeasureWaistcoatLarge,
    onCreateMeasureWaistcoatDetails,
} from '../redux-store';
import satovarApi from '../api/SatovarApi';
import Swal from 'sweetalert2';
import { ErrorSweetAlert } from '../helpers';
import axios, { AxiosError } from 'axios';
import { AxiosErrorData, MeasureWaistcoatInterfaceAPI } from '../interfaces';

export const UseMeasureWaistcoat = () => {
    const dispatch = useDispatch();
    const {
        measureWaistcoatTop,
        measureWaistcoatLarge,
        measureWaistcoatDetails,
        measureWaistcoat,
        //
    } = useSelector(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (state: any) => state.MeasureCreateShirt
    );
    const { user } = useSelector((state: any) => state.Auth);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const startSaveMeasureWaistcoatTop = (formstate: any) => {
        dispatch(onCreateMeasureWaistcoatTop(formstate));
    };
    const startSaveMeasureWaistcoatLarge = (formstate: any) => {
        dispatch(onCreateMeasureWaistcoatLarge(formstate));
    };
    const startSaveMeasureWaistcoatDetails = (formstate: any) => {
        dispatch(onCreateMeasureWaistcoatDetails(formstate));
    };
    const CreateMeasureWaistcoat = async () => {
        try {
            await satovarApi.post('/measure/waistcoat', {
                id: +user.CI_ID_USUARIO,
                pecho: +measureWaistcoatTop.pechoChaleco,
                cintura: +measureWaistcoatTop.CinturaChaleco,
                cadera: +measureWaistcoatTop.CaderaChaleco,
                largoTotal: +measureWaistcoatLarge.LargoTotalChaleco,
                detalles: measureWaistcoatDetails,
            });
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
    const startGetMeasureWaistcoat = async () => {
        try {
            if (!user.CI_ID_USUARIO) return;
            const { data } = await satovarApi.get<MeasureWaistcoatInterfaceAPI>(
                `/measure/waistcoat/${user.CI_ID_USUARIO}`
            );
            dispatch(onGetMeasureWaistcoat(data));
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    return {
        //valores
        measureWaistcoatTop,
        measureWaistcoatLarge,
        measureWaistcoatDetails,
        measureWaistcoat,
        //funciones
        onGetMeasureWaistcoat,
        onCreateMeasureWaistcoatTop,
        onCreateMeasureWaistcoatLarge,
        onCreateMeasureWaistcoatDetails,
        startGetMeasureWaistcoat,
        startSaveMeasureWaistcoatTop,
        startSaveMeasureWaistcoatLarge,
        startSaveMeasureWaistcoatDetails,
        CreateMeasureWaistcoat,
    };
};

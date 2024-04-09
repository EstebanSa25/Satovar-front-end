/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from 'react-redux';
import {
    onCreateMeasurePantDetails,
    onCreateMeasurePantLarge,
    onCreateMeasurePantTop,
    onGetMeasurePant,
} from '../redux-store';
import satovarApi from '../api/SatovarApi';
import Swal from 'sweetalert2';
import { AxiosError } from 'axios';
import { AxiosErrorData, PantMeasureInterfaceApi } from '../interfaces';
import { ErrorSweetAlert } from '../helpers';

export const UseMeasurePant = () => {
    const dispatch = useDispatch();

    const {
        measurePantTop,
        measurePantLarge,
        measurePantDetails,
        measurePant,
    } = useSelector((state: any) => state.MeasureCreateShirt);

    const { user } = useSelector((state: any) => state.Auth);
    const startSaveUpperPant = (formstate: any) => {
        dispatch(onCreateMeasurePantTop(formstate));
    };
    const startLargePant = (formstate: any) => {
        dispatch(onCreateMeasurePantLarge(formstate));
    };
    const startDetailsPant = (formstate: any) => {
        dispatch(onCreateMeasurePantDetails(formstate));
    };

    const startSavePant = async () => {
        try {
            const { data } = await satovarApi.post('/measure/pant', {
                id: +user.CI_ID_USUARIO,
                cintura: +measurePantTop.CinturaPantalon,
                cadera: +measurePantTop.CaderaPantalon,
                tiro: +measurePantTop.TiroPantalon,
                rodilla: +measurePantTop.RodillaPantalon,
                ruedo: +measurePantTop.RuedoPantalon,
                largo: +measurePantLarge.LargoTotalPantalon,
                detalles: measurePantDetails.DetallesPantalon || '',
            });
            if (!data.estado) {
                throw new Error('Error al guardar la medida de pantalón');
            }
            Swal.fire({
                icon: 'success',
                title: 'Medida de pantalón guardada',
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
                'Error al crear medida de pantalón',
                `${
                    errorString.error ||
                    errorString.Error ||
                    errorString.message ||
                    'Internal server error'
                }`
            );
        }
    };

    const startGetMeasurePant = async () => {
        try {
            const { data } = await satovarApi.get<PantMeasureInterfaceApi>(
                `/measure/pant/${+user.CI_ID_USUARIO}`
            );
            dispatch(onGetMeasurePant(data.medida));
        } catch (error) {
            console.log(error);
        }
    };
    return {
        startSaveUpperPant,
        startLargePant,
        startDetailsPant,
        startSavePant,
        startGetMeasurePant,
        measurePant,
    };
};

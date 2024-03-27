import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    measureShirtTop: {},
    measureShirtLarge: {},
    measureShirtDetails: {},
    //chaleco
    measureWaistcoatTop: {},
    measureWaistcoatLarge: {},
    measureWaistcoatDetails: {},
    //API
    measureShirt: {
        medida: {
            CI_CINTURA: null,
            CI_PECHO: null,
            CI_CADERA: null,
            CI_ESPALDA: null,
            CI_HOMBRO: null,
            CI_CUELLO: null,
        },
    },
    measureWaistcoat: {
        medida: {
            CI_PECHO: null,
            CI_CINTURA: null,
            CI_CADERA: null,
            CI_L_TOTAL: null,
            CV_DETALLES: null,
        },
    },
};

export const MeasureSlice = createSlice({
    name: 'MeasureCreateShirt',
    initialState,
    reducers: {
        onCreateMeasureShirtTop: (state, { payload }) => {
            state.measureShirtTop = payload;
        },
        onCreateMeasureShirtLarge: (state, { payload }) => {
            state.measureShirtLarge = payload;
        },
        onCreateMeasureShirtDetails: (state, { payload }) => {
            state.measureShirtDetails = payload;
        },
        onGetMeasureShirt: (state, { payload }) => {
            state.measureShirt = payload;
        },
        onGetMeasureWaistcoat: (state, { payload }) => {
            state.measureWaistcoat = payload;
        },
        onCreateMeasureWaistcoatTop: (state, { payload }) => {
            state.measureWaistcoatTop = payload;
        },
        onCreateMeasureWaistcoatLarge: (state, { payload }) => {
            state.measureWaistcoatLarge = payload;
        },
        onCreateMeasureWaistcoatDetails: (state, { payload }) => {
            state.measureWaistcoatDetails = payload;
        },
        onReset: (state) => {
            state.measureShirtDetails = {};
            state.measureShirtLarge = {};
            state.measureShirtTop = {};
        },
        onResetMeasure: (state) => {
            state.measureShirt = {
                medida: {
                    CI_CINTURA: null,
                    CI_PECHO: null,
                    CI_CADERA: null,
                    CI_ESPALDA: null,
                    CI_HOMBRO: null,
                    CI_CUELLO: null,
                },
            };
            state.measureWaistcoat = {
                medida: {
                    CI_PECHO: null,
                    CI_CINTURA: null,
                    CI_CADERA: null,
                    CI_L_TOTAL: null,
                    CV_DETALLES: null,
                },
            };
        },
    },
});

export const {
    onCreateMeasureShirtTop,
    onCreateMeasureShirtLarge,
    onCreateMeasureShirtDetails,
    onReset,
    onGetMeasureShirt,
    onResetMeasure,
    onGetMeasureWaistcoat,
    onCreateMeasureWaistcoatTop,
    onCreateMeasureWaistcoatLarge,
    onCreateMeasureWaistcoatDetails,
} = MeasureSlice.actions;

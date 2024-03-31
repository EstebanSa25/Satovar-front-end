import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    measureShirtTop: {},
    measureShirtLarge: {},
    measureShirtDetails: {},
    //chaleco
    measureWaistcoatTop: {},
    measureWaistcoatLarge: {},
    measureWaistcoatDetails: {},

    //PANTALON
    measurePantTop: {},
    measurePantLarge: {},
    measurePantDetails: {},

    //Saco
    measureSuitJacketTop: {},
    measureSuitJacketLarge: {},
    measureSuitJacketDetails: {},

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
    measurePant: {},
    measureSuitJacket: {},
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
        onCreateMeasurePantTop: (state, { payload }) => {
            state.measurePantTop = payload;
        },
        onCreateMeasurePantLarge: (state, { payload }) => {
            state.measurePantLarge = payload;
        },
        onCreateMeasurePantDetails: (state, { payload }) => {
            state.measurePantDetails = payload;
        },
        onGetMeasurePant: (state, { payload }) => {
            state.measurePant = payload;
        },
        onCreateMeasureSuitJacketTop: (state, { payload }) => {
            state.measureSuitJacketTop = payload;
        },
        onCreateMeasureSuitJacketLarge: (state, { payload }) => {
            state.measureSuitJacketLarge = payload;
        },
        onCreateMeasureSuitJacketDetails: (state, { payload }) => {
            state.measureSuitJacketDetails = payload;
        },
        onGetMeasureSuitJacket: (state, { payload }) => {
            state.measureSuitJacket = payload;
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
    onCreateMeasurePantTop,
    onCreateMeasurePantLarge,
    onCreateMeasurePantDetails,
    onGetMeasurePant,
    onCreateMeasureSuitJacketTop,
    onCreateMeasureSuitJacketLarge,
    onCreateMeasureSuitJacketDetails,
    onGetMeasureSuitJacket,
} = MeasureSlice.actions;

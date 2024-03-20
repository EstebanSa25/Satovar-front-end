import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    measureShirtTop: {},
    measureShirtLarge: {},
    measureShirtDetails: {},
    //API
    measureShirt: {},
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

        onReset: (state) => {
            state.measureShirtDetails = {};
            state.measureShirtLarge = {};
            state.measureShirtTop = {};
        },
    },
});

export const {
    onCreateMeasureShirtTop,
    onCreateMeasureShirtLarge,
    onCreateMeasureShirtDetails,
    onReset,
    onGetMeasureShirt,
} = MeasureSlice.actions;

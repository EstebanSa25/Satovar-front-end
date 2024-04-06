import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Fabric } from '../../../hooks';

const initialState = {
    Fabrics: [] as Fabric[],
    isLoading: false,
    ActiveFabric: {} as Fabric,
};

export const FabricCrudSlice = createSlice({
    name: 'FabricCrud',
    initialState,
    reducers: {
        onActiveFabric: (state, action: PayloadAction<Fabric>) => {
            state.ActiveFabric = action.payload;
        },
        onResetActiveFabric: (state) => {
            state.ActiveFabric = {} as Fabric;
        },
        onStartLoading: (state) => {
            state.isLoading = true;
        },
        onCreateFabric: (state, action: PayloadAction<Fabric>) => {
            if (
                !state.Fabrics.find(
                    (fabric) => fabric.CI_ID_TELA === action.payload.CI_ID_TELA
                )
            ) {
                state.Fabrics.push(action.payload);
            }

            state.isLoading = false;
        },

        onUpdateFabric: (state, action: PayloadAction<Fabric>) => {
            state.Fabrics = state.Fabrics.map((fabric) => {
                if (fabric.CI_ID_TELA === action.payload.CI_ID_TELA) {
                    return action.payload;
                }
                return fabric;
            });
            state.isLoading = false;
        },

        onGetAllFabric: (state, action: PayloadAction<Fabric[]>) => {
            action.payload.forEach((fabric: Fabric) => {
                const exists = state.Fabrics.some(
                    (dbFabric) => dbFabric.CI_ID_TELA === fabric.CI_ID_TELA
                );
                if (!exists) {
                    state.Fabrics.push(fabric);
                } else {
                    state.Fabrics = state.Fabrics.map((dbFabrics) => {
                        if (dbFabrics.CI_ID_TELA === fabric.CI_ID_TELA) {
                            return fabric;
                        }
                        return dbFabrics;
                    });
                }
            });
            state.isLoading = false;
        },
        onChangeFabricState: (state, action: PayloadAction<number>) => {
            state.Fabrics = state.Fabrics.map((fabric) => {
                if (fabric.CI_ID_TELA === action.payload) {
                    if (fabric.CB_ESTADO === true) {
                        fabric.CB_ESTADO = false;
                    } else {
                        fabric.CB_ESTADO = true;
                    }
                }
                return fabric;
            });
        },
    },
});

export const {
    onActiveFabric,
    onChangeFabricState,
    onCreateFabric,
    onGetAllFabric,
    onResetActiveFabric,
    onStartLoading,
    onUpdateFabric,
} = FabricCrudSlice.actions;

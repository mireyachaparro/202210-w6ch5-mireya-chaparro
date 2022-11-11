import { configureStore } from '@reduxjs/toolkit';
import { ProductReducer } from '../../features/store/reducer/reducer';

export const appStore = configureStore({
    reducer: {
        tasks: ProductReducer, //esta es la rama
    },
});

export type rootStore = typeof appStore; //esto se pone siempre asi

export type rootState = ReturnType<typeof appStore.getState>; //esto se pone siempre asi

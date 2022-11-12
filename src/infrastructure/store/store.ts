import { configureStore } from '@reduxjs/toolkit';
import { ProductReducer } from '../reducer/reducer';

export const appStore = configureStore({
    reducer: {
        products: ProductReducer,
    },
});

export type rootStore = typeof appStore;

export type rootState = ReturnType<typeof appStore.getState>;

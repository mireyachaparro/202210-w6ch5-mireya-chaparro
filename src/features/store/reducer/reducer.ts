import { createReducer } from '@reduxjs/toolkit';
import { Product } from '../models/product';
import * as ac from './action.creators';

const initialState: Array<Product> = [];

export const TaskReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loadActionCreate, (_state, action) => action.payload);
    builder.addCase(ac.addActionCreate, (state, action) => [
        ...state,
        action.payload,
    ]);
    builder.addCase(ac.deleteActionCreate, (state, action) =>
        state.filter((item) => item.id !== action.payload.id)
    );

    builder.addDefaultCase((state) => state);
});

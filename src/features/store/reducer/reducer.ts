import { createReducer } from '@reduxjs/toolkit';
import { Task } from '../models/product';
import * as ac from './action.creators';

const initialState: Array<Task> = [];

export const TaskReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loadActionCreate, (_state, action) => action.payload); //se pone _state porque con el _ le vas a decir que no lo vas a utilizar
    builder.addCase(ac.addActionCreate, (state, action) => [
        ...state,
        action.payload,
    ]);
    builder.addCase(ac.updateActionCreate, (state, action) =>
        state.map((item) =>
            item.id === action.payload.id ? action.payload : item
        )
    );
    builder.addCase(ac.deleteActionCreate, (state, action) =>
        state.filter((item) => item.id !== action.payload.id)
    );

    builder.addDefaultCase((state) => state); //ESTO NO PUEDE FALTAR NUNCA Y SIEMPRE SE ESCRIBE ASI
});
//recibinos el parametro que se encarga de construir el reducer, nos ahorramos el switch case

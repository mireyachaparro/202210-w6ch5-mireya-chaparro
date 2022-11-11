import { createAction } from '@reduxjs/toolkit';
import { Product } from '../models/product';
import { actionTypes } from './action.types';

export const loadActionCreate = createAction<Array<Product>>(actionTypes.load); //array porque va a cargar TODOS los productos
export const addActionCreate = createAction<Product>(actionTypes.add); //array no porque va a añadir UN producto
export const updateActionCreate = createAction<Product>(actionTypes.update);
export const deleteActionCreate = createAction<Product>(actionTypes.delete);

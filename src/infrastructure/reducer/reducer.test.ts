import { ProductReducer } from './reducer';
import { actionTypes } from './action.types';
import { Product } from '../models/product';

describe('Given the function productReducer', () => {
    const productMock: Partial<Product> = {
        id: '1',
        name: '',
        image: '',
        onsale: false,
    };

    let action: { type: string; payload: unknown };
    let state: Array<Product>;

    describe('When the action is load', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.load,
                payload: [productMock],
            };
            state = [];
        });
        test('Then the returned state should be the action payload', () => {
            const result = ProductReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe('When the action is add', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.add,
                payload: productMock,
            };
            state = [];
        });
        test('Then the returned state should include the action payload', () => {
            const result = ProductReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });
});

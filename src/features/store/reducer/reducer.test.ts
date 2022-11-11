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

    // describe('When the action is delete', () => {
    //     beforeEach(() => {
    //         action = {
    //             type: actionTypes.delete,
    //             payload: productMock,
    //         };
    //         state = [productMock];
    //     });
    //     test('Then the returned state should not include the action payload', () => {
    //         const result = ProductReducer(state, action);
    //         expect(result).toEqual([]);
    //     });
    // });

    // describe('When the action is delete and the id is not valid', () => {
    //     beforeEach(() => {
    //         action = {
    //             type: actionTypes.delete,
    //             payload: { ...productMock, id: '2' },
    //         };
    //         state = [productMock];
    //     });
    //     test('Then the returned state should should be the original state', () => {
    //         const result = ProductReducer(state, action);
    //         expect(result).toEqual(state);
    //     });
    // });

    // describe('When the action is any other', () => {
    //     beforeEach(() => {
    //         action = {
    //             type: '',
    //             payload: null,
    //         };
    //         state = [productMock];
    //     });
    //     test('Then the returned state should be ...', () => {
    //         const result = ProductReducer(state, action);
    //         expect(result).toEqual(state);
    //     });
    // });
});

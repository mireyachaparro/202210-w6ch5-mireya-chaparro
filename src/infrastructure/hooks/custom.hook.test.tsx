import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { CarritoProduct, Product } from '../models/product';
import { ProductRepository } from '../services/product.repository';
import { appStore } from '../store/store';
import { useProduct } from './custom.hooks';

jest.mock('../services/product.repository');

const mockProduct: Product = {
    id: '1',
    section: '',
    name: '',
    description: [''],
    image: '',
    onsale: true,
    onsalePrice: 12,
    price: 11,
};

describe('Given the custom hook "useProducts', () => {
    let result: {
        current: {
            products: Product[];
            handleAdd: (newProduct: CarritoProduct) => void;
        };
    };

    beforeEach(() => {
        ProductRepository.prototype.getAll = jest
            .fn()
            .mockResolvedValue([mockProduct]);

        ProductRepository.prototype.create = jest
            .fn()
            .mockResolvedValue(mockProduct);

        ProductRepository.prototype.delete = jest
            .fn()
            .mockResolvedValue(mockProduct);

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );

        ({ result } = renderHook(() => useProduct(), { wrapper }));
    });
    describe('when we call getAll() function', () => {
        test('Then it should return mockProduct', async () => {
            await waitFor(() => {
                expect(result.current.products).toEqual([mockProduct]);
            });
        });
    });
    describe('when we call handleAdd() function', () => {
        test('Then it should return mockProduct', async () => {
            await waitFor(() => {
                result.current.handleAdd(mockProduct);
                expect(result.current.products.at(-1)).toEqual(mockProduct);
            });
            await waitFor(() => {
                expect(ProductRepository.prototype.create).toHaveBeenCalled();
            });
        });
    });
});

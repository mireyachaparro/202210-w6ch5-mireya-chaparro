import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { OnSale } from './onsale';
import { Provider } from 'react-redux';
import { appStore } from '../../../../infrastructure/store/store';

describe('Given OnSale component', () => {
    describe('When we render the component', () => {
        test('Then it should display the title "on sale"', () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <OnSale />
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/on sale/i);
            expect(element).toBeInTheDocument();
        });
        // test('then it should display an item with propierty onsale', () => {
        //     const mockProduct = {
        //         id: '1',
        //         section: '',
        //         name: 'pepito',
        //         description: [''],
        //         image: '',
        //         onsale: true,
        //         onsalePrice: 12,
        //         price: 11,
        //     };
        //     expect(mockProduct).toBeInTheDocument();
        // });
    });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { OnSale } from './onsale';

describe('Given Header component', () => {
    describe('When we render the component', () => {
        test('Then it should display "Learning redux"', () => {
            render(
                <Router>
                    <OnSale />
                </Router>
            );
            const element = screen.getByText(/on sale/i);
            expect(element).toBeInTheDocument();
        });
    });
});

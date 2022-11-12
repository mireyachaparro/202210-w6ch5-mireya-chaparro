import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Carrito } from './carrito';

describe('Given Header component', () => {
    describe('When we render the component', () => {
        test('Then it should display "Learning redux"', () => {
            render(
                <Router>
                    <Carrito />
                </Router>
            );
            const element = screen.getByText(/carrito/i);
            expect(element).toBeInTheDocument();
        });
    });
});

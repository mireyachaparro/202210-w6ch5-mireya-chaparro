import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Cones } from './cones';
describe('Given Header component', () => {
    describe('When we render the component', () => {
        test('Then it should display "Learning redux"', () => {
            render(
                <Router>
                    <Cones />
                </Router>
            );
            const element = screen.getByText(/cones/i);
            expect(element).toBeInTheDocument();
        });
    });
});

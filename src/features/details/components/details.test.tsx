import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Details } from './details';
describe('Given Header component', () => {
    describe('When we render the component', () => {
        test('Then it should display the title "details"', () => {
            render(
                <Router>
                    <Details />
                </Router>
            );
            const element = screen.getByText(/details/i);
            expect(element).toBeInTheDocument();
        });
    });
});

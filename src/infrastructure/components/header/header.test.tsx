import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Header } from './header';

describe('Given Header component', () => {
    describe('When we render the component', () => {
        test('Then it should display "Learning redux"', () => {
            render(
                <Router>
                    <Header />
                </Router>
            );
            const element = screen.getByText(/Learning redux/i);
            expect(element).toBeInTheDocument();
        });
    });
});

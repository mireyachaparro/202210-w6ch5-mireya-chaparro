import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Menu } from './menu';

describe('Given Header component', () => {
    describe('When we render the component', () => {
        test('Then it should display "Learning redux"', () => {
            render(
                <Router>
                    <Menu />
                </Router>
            );
            const element = screen.getByText(/gnomes/i);
            expect(element).toBeInTheDocument();
        });
    });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Cones } from './cones';
import { Provider } from 'react-redux';
import { appStore } from '../../../infrastructure/store/store';
describe('Given Cones component', () => {
    describe('When we render the component', () => {
        test('Then it should display the title "cones"', () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <Cones />
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/cones/i);
            expect(element).toBeInTheDocument();
        });
    });
});

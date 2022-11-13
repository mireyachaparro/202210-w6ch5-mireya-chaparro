import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Gnomes } from './gnomes';
import { Provider } from 'react-redux';
import { appStore } from '../../../infrastructure/store/store';

describe('Given Gnomes component', () => {
    describe('When we render the component', () => {
        test('Then it should display the title "gnomes', () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <Gnomes />
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/gnomes/i);
            expect(element).toBeInTheDocument();
        });
    });
});

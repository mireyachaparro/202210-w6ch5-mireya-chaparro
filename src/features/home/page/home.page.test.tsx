import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../infrastructure/store/store';
import Home from './home.page';

describe('Given OnSale page', () => {
    describe('When we render the page', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <Home />
                    </Provider>
                </Router>
            );
        });
        test('Then it should display the title "on sale"', () => {
            const title = new RegExp(/on sale/i);
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});

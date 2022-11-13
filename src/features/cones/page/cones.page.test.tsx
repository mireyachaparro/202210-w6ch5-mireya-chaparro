import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../infrastructure/store/store';
import { Cones } from '../components/cones';

describe('Given Cone page', () => {
    describe('When we render the page', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <Cones />
                    </Provider>
                </Router>
            );
        });
        test('Then it should display the title "cones"', () => {
            const title = new RegExp(/cones/i);
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});

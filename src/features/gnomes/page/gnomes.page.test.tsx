import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../infrastructure/store/store';
import { Gnomes } from '../components/gnomes';

describe('Given Gnomes page', () => {
    describe('When we render the page', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <Gnomes />
                    </Provider>
                </Router>
            );
        });
        test('Then it should display the title "gnomes"', () => {
            const title = new RegExp(/gnomes/i);
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});

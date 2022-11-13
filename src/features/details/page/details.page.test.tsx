import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Details } from '../components/details';

describe('Given Home component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Details />
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const title = new RegExp(/detalles/i);
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});

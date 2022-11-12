import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Carrito } from '../components/carrito';

describe('Given Home component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Carrito />
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const title = new RegExp(/carrito/i);
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});

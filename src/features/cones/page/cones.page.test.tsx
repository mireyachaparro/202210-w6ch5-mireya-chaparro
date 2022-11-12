import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Cones } from '../components/cones';

describe('Given Home component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Cones />
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const title = new RegExp(/cones/i);
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});

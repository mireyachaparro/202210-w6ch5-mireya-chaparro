import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Gnomes } from '../components/gnomes';

describe('Given Home component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Gnomes />
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const title = new RegExp(/gnomes/i);
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});

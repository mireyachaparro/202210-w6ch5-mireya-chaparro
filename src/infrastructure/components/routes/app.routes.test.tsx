import { act, render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppRoutes } from './app.routes';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../../features/home/page/home.page', () => {
    return () => <div>Test Home</div>;
});
jest.mock('../../../features/gnomes/page/gnomes.page', () => {
    return () => <div>Test Gnomes</div>;
});
jest.mock('../../../features/cones/page/cones.page', () => {
    return () => <div>Test Cones</div>;
});
jest.mock('../../../features/carrito/page/carrito.page', () => {
    return () => <div>Test Carrito</div>;
});

describe('Given AppRoutes component', () => {
    let paths: Array<string>;
    beforeEach(() => {
        paths = ['/', '/gnomes', '/cones', '/carrito'];
    });
    describe(`When we render the component
                And the route is home`, () => {
        beforeEach(async () => {
            // eslint-disable-next-line testing-library/no-unnecessary-act
            await act(() => {
                render(
                    <Router initialEntries={paths} initialIndex={0}>
                        <AppRoutes />
                    </Router>
                );
            });
        });
        test('Then it should display the HomePage', async () => {
            const title = /Test Home/i;
            const element = await screen.findByText(title);
            expect(element).toBeInTheDocument();
        });
    });
    describe(`When we render the component
            And the route is gnomes`, () => {
        beforeEach(async () => {
            // eslint-disable-next-line testing-library/no-unnecessary-act
            await act(async () => {
                render(
                    <Router initialEntries={paths} initialIndex={1}>
                        <AppRoutes />
                    </Router>
                );
            });
        });
        test('Then it should display the GnomesPage', async () => {
            const title = /Test Gnomes/i;
            const element = await screen.findByText(title);
            expect(element).toBeInTheDocument();
        });
    });
    describe(`When we render the component
            And the route is cones`, () => {
        beforeEach(async () => {
            // eslint-disable-next-line testing-library/no-unnecessary-act
            await act(async () => {
                render(
                    <Router initialEntries={paths} initialIndex={2}>
                        <AppRoutes />
                    </Router>
                );
            });
        });
        test('Then it should display the ConesPage', async () => {
            const title = /Test Cones/i;
            const element = await screen.findByText(title);
            expect(element).toBeInTheDocument();
        });
    });
    describe(`When we render the component
            And the route is carrito`, () => {
        beforeEach(async () => {
            // eslint-disable-next-line testing-library/no-unnecessary-act
            await act(async () => {
                render(
                    <Router initialEntries={paths} initialIndex={3}>
                        <AppRoutes />
                    </Router>
                );
            });
        });
        test('Then it should display the CarritoPage', async () => {
            const title = /Test Carrito/i;
            const element = await screen.findByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});

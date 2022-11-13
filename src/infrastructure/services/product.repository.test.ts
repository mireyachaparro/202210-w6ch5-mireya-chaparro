import { ProductRepository } from './product.repository';

describe('Given ProductRepository service', () => {
    describe('when we instantiate it without an specific url', () => {
        let service: ProductRepository;
        beforeEach(() => {
            service = new ProductRepository();
        });
        test('then if it returns an error', () => {
            //testear la funcion createError
            const error = service.createError(
                new Response('Error', {
                    status: 404,
                    statusText: 'not found',
                })
            );
            const expected = new Error('Error 404: not found');
            expected.name = 'HTTPError';
            expect(error).toEqual(expected);
        });
        test('then if i use the function getAll() it should return a Promise<Array<Products>>', async () => {
            //testear getAll si va bien
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([]),
            });
            const expected = await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(expected).toEqual([]);
        });
        test('then if i use the function getAll() and the response fails, it returns an error', async () => {
            //testear getAll si va mal
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 404,
                statusText: 'not found',
            });
            const expected = await service.getAll();
            const result = new Error('Error 404: not found');
            result.name = 'HTTPError';
            expect(expected).toBe(result.toString());
        });
        test('then if i use the function delete() it should return an undefined', async () => {
            //testear delete si va bien
            const mockProduct = {
                id: '',
                section: '',
                name: '',
                description: [''],
                image: '',
                onsale: true,
                onsalePrice: 12,
                price: 11,
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue({}),
            });
            const expected = await service.delete(mockProduct.id);
            expect(fetch).toHaveBeenCalled();
            expect(expected).toBeUndefined();
        });
        test('then if i use the function delete() and the response fails, it returns an error', async () => {
            //testear delete si va mal
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 404,
                statusText: 'not found',
            });
            const expected = await service.delete('1');
            const result = new Error('Error 404: not found');
            result.name = 'HTTPError';
            expect(expected).toBe(result.toString());
        });
        test('then if i use the function create() it should return a promise', async () => {
            //testear crear si va bien
            const mockProduct = {
                id: '',
                section: '',
                name: '',
                description: [''],
                image: '',
                onsale: true,
                onsalePrice: 12,
                price: 11,
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockProduct),
            });
            const expected = await service.create(mockProduct);
            expect(fetch).toHaveBeenCalled();
            expect(expected).toEqual(mockProduct);
        });
        test('then if i use the function create() and the response fails, it returns an error', async () => {
            //testear crear si va mal
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 404,
                statusText: 'not found',
            });
            const expected = await service.create({});
            const result = new Error('Error 404: not found');
            result.name = 'HTTPError';
            expect(expected).toBe(result.toString());
        });
    });
    describe('when we instantiate it with an specific url', () => {
        let service: ProductRepository;
        beforeEach(() => {
            service = new ProductRepository('prueba');
        });
        test('then it should change the url', () => {
            expect(service.url).toBe('prueba');
        });
    });
});

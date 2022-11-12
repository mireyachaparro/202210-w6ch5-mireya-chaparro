import { ProductModel } from './product';

describe('Given the class TaskModel', () => {
    describe('When we instantiate it', () => {
        const task = new ProductModel('', '  ');
        test('Then we should have an object ot the class', () => {
            expect(task).toBeInstanceOf(ProductModel);
        });
    });
});

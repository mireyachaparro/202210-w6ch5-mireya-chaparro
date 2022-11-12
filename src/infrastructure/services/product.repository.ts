import { Product } from '../models/product';
import { Repository } from './repository';

export class ProductRepository implements Repository<Product> {
    url: string;
    constructor(url = '') {
        this.url = url ? url : (process.env.REDUX_APP_URL_PRODUCTS as string);
    }

    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }

    // read / get
    getAll(): Promise<Array<Product>> {
        return fetch(this.url).then((response) => {
            if (response.ok) return response.json();
            throw this.createError(response);
        });
    }

    // create / post
    create(product: Partial<Product>): Promise<Product> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => {
            if (response.ok) return response.json();
            throw this.createError(response);
        });
    }

    // delete
    delete(id: string): Promise<void> {
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE',
        }).then((response) => {
            if (!response.ok) throw this.createError(response);
        });
    }

    // uptate / patch
    // update(partialTask: Partial<Task>): Promise<Task> {
    //     return fetch(`${this.url}/${partialTask.id}`, {
    //         method: 'PATCH',
    //         body: JSON.stringify(partialTask),
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //     }).then((response) => {
    //         if (response.ok) return response.json();
    //         throw this.createError(response);
    //     });
    // }
}
// import { useParams } from 'react-router-dom';
import { Product } from '../models/product';
import { Repository } from './repository';

export class ProductRepository implements Repository<Product> {
    url: string;
    // urlDetails: string;
    // id = useParams();
    constructor(url = '') {
        // this.url = url ? url : (process.env.REDUX_APP_URL_PRODUCTS as string);

        this.url = url
            ? url
            : 'https://gnomes-conesserver-production.up.railway.app/data';
        // this.urlDetails = url
        //     ? url
        //     : `https://gnomes-conesserver-production.up.railway.app/data/${this.id}`;
    }

    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }

    // read / get
    getAll(): Promise<Array<Product>> {
        return fetch(this.url)
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .catch((error) => {
                return `${error}`;
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
        })
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .catch((error) => {
                return `${error}`;
            });
    }

    // delete
    delete(id: string): Promise<void> {
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (!response.ok) throw this.createError(response);
            })
            .catch((error) => {
                return `${error}` as unknown as void;
            });
    }
}

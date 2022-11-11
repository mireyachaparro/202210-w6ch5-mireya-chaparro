export type CarritoProduct = {
    section: string;
    name: string;
    description: Array<string>;
    image: string;
    onsale: boolean;
    onsalePrice: number;
    price: number;
};

export type Product = {
    id: string;
    section: string;
    name: string;
    description: Array<string>;
    image: string;
    onsale: boolean;
    onsalePrice: number;
    price: number;
};

export class ProductModel {
    onsalePrice: boolean;
    constructor(public name: string, public image: string) {
        this.onsalePrice = false;
    }
}

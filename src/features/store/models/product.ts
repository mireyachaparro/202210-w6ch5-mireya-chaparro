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

// export class TaskModel {
//     isComplete: boolean;
//     constructor(public title: string, public responsible: string) {
//         this.isComplete = false;
//     }
// }

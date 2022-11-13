import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../store/store';
import { CarritoProduct, Product } from '../models/product';
import * as ac from '../reducer/action.creators';
import { ProductRepository } from '../services/product.repository';

export const useProduct = () => {
    const products = useSelector((state: rootState) => state.products);
    const dispatcher = useDispatch();
    const apiProduct = useMemo(() => new ProductRepository(), []);

    //load all
    useEffect(() => {
        apiProduct
            .getAll()
            .then((products) => dispatcher(ac.loadActionCreate(products)))
            .catch((error: Error) => console.log(error.name, error.message));
    }, [apiProduct, dispatcher]);

    //add to carrito
    const handleAdd = (newProductCarrito: CarritoProduct) => {
        apiProduct
            .create(newProductCarrito)
            .then((product: Product) => dispatcher(ac.addActionCreate(product)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    //eliminar del carrito
    // const handleDelete = (id: string) => {
    //     apiProduct
    //         .delete(id)
    //         .then(() => dispatcher(ac.deleteActionCreate(id)))
    //         .catch((error: Error) => console.log(error.name, error.message));
    // };

    return {
        products,
        handleAdd,
        // handleDelete,
    };
};

import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../../../features/home/page/home.page'));
const Details = lazy(
    () => import('../../../features/details/page/details.page')
);
const Gnomes = lazy(() => import('../../../features/gnomes/page/gnomes.page'));
const Cones = lazy(() => import('../../../features/cones/page/cones.page'));
const Carrito = lazy(
    () => import('../../../features/carrito/page/carrito.page')
);

export function AppRoutes() {
    return (
        <Suspense>
            <Routes>
                <Route path="products">
                    <Route index element={<Home></Home>}></Route>
                    <Route path=":id" element={<Details></Details>}></Route>
                </Route>
                <Route path="gnomes" element={<Gnomes></Gnomes>}></Route>
                <Route path="cones" element={<Cones></Cones>}></Route>
                <Route path="carrito" element={<Carrito></Carrito>}></Route>
                <Route path="" element={<Home></Home>}></Route>
                <Route path="*" element={<Navigate replace to="" />}></Route>
            </Routes>
        </Suspense>
    );
}

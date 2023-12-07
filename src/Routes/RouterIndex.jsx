import { Routes, Route } from 'react-router-dom';
import {  useProductContext } from '@/Context/ProductsContext'
import { AddProduct, Assistance, Cart, Home, Login, Loading, Product, Root } from '@/Pages';

export default function RouterIndex() {
        const { loading } = useProductContext()
    return (
        <Routes>
            <Route path="/" element={<Root />}>
                <Route path="home" element={<Home />} />
                <Route path="cart" element={<Cart />} />
                <Route path="login" element={<Login />} />
                <Route path="product" element={<Product />} />
                <Route path="sell" element={<AddProduct />} />
                <Route path="help" element={<Assistance />} />
                <Route path='loading' element={<Loading />} />
                <Route index element={loading ? <Loading /> : <Home />} />
            </Route>
        </Routes>
    );
}
import { Routes, Route } from 'react-router-dom';
import {  useProductContext } from '@/Context/ProductsContext'
import { AddProduct, Assistance, Cart, Home, Login, Category,  Loading, Product, Root } from '@/Pages';

export default function RouterIndex() {
        const { loading } = useProductContext()
        document.body.style.backgroundColor = loading ? '#72b7c2' : '#72b7c246'

    return (
        <Routes>
            <Route path="/" element={<Root />}>
                <Route path="home" element={<Home />} />
                <Route path="cart" element={<Cart />} />
                <Route path="login" element={<Login />} />
                <Route path="sell" element={<AddProduct />} />
                <Route path="help" element={<Assistance />} />
                <Route path='loading' element={<Loading />} />
                <Route path="product/:title" element={<Product />} />
                <Route path="category/:name" element={<Category />} />
                <Route index element={loading ? <Loading /> : <Home />} />
            </Route>
        </Routes>
    );
}
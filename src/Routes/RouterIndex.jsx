import { Routes, Route } from 'react-router-dom'
import { AddProduct, Assistance, Cart, Category, Home, Login, Product, Search } from '@/Pages'
import Root from './Root'

export default function RouterIndex() {
    return (
        <Routes>
            <Route path="/" element={<Root />}>
                <Route path="home" element={<Home />} />
                <Route path="cart" element={<Cart />} />
                <Route path="login" element={<Login />} />
                <Route path="search/:name" element={<Search />} />
                <Route path="sell" element={<AddProduct />} />
                <Route path="help" element={<Assistance />} />
                <Route path="product/:title" element={<Product />} />
                <Route path="category/:name" element={<Category />} />
                <Route index element={<Home />} />
            </Route>
        </Routes>
    );
}
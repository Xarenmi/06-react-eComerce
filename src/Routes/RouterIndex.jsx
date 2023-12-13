import Root from './Root'
import { Routes, Route } from 'react-router-dom'
import { ScreenProvider } from '@/Context/ScreenContext'
import { ProductProvider } from '@/Context/ProductsContext'
import { AddProduct, Assistance, Cart, Category, Home, Product, Search } from '@/Pages'


export default function RouterIndex() {
    return (
        <ScreenProvider>
            <ProductProvider >
                <Routes>
                    <Route path="/" element={<Root />}>
                        <Route path="home" element={<Home />} /> 
                        <Route path="cart" element={<Cart />} />
                        <Route path="search/" element={<Search />} />
                        <Route path="sell" element={<AddProduct />} />
                        <Route path="help" element={<Assistance />} />
                        <Route path="search/:name" element={<Search />} />
                        <Route path="product/:title" element={<Product />} />
                        <Route path="category/:name" element={<Category />} />
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </ProductProvider>
        </ScreenProvider>
    );
}
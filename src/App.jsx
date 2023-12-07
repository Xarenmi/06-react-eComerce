import './App.sass'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cart, Login, Home, Product, Root, AddProduct, Assistance} from '@/Pages';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="product" element={<Product />} />
          <Route path="sell" element={<AddProduct />} />
          <Route path="help" element={<Assistance />} />
        </Route>
      </Routes>
    </Router>
  );
}
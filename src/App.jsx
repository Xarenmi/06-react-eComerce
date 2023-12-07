import './App.sass'
import React from 'react'
import RouterIndex from '@/Routes/RouterIndex'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from '@/Context/ProductsContext'


export default function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <RouterIndex />
      </ProductProvider>
    </BrowserRouter>
  );
}
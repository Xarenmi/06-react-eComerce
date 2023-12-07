import React from 'react'
import { Outlet } from 'react-router-dom'
import { ProductProvider } from '@/Context/ProductsContext'
import { Header, Footer } from '@/Components'

const Root = () => {
  return (
    <>
      <ProductProvider >
        <Header />
        <Outlet />
        <Footer />
      </ProductProvider>
    </>
  )
}

export default Root;
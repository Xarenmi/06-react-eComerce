import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from '@/Components'
import { ProductProvider } from '@/Context/ProductsContext'
import { NavigationProvider } from '@/Context/NavigationContext'


const Root = () => {
  return (
    <>
      <NavigationProvider>
        <ProductProvider >
          <Header />
          <Outlet />
          <Footer />
        </ProductProvider>
      </NavigationProvider>
    </>
  )
}

export default Root;
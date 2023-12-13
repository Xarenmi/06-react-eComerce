import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from '@/Components'
import { ScreenProvider } from '@/Context/ScreenContext'
import { ProductProvider } from '@/Context/ProductsContext'

const Root = () => {
  return (
    <>
      <ScreenProvider>
          <ProductProvider >
            <Header />
            <Outlet />
            <Footer />
          </ProductProvider>
      </ScreenProvider>
    </>
  )
}

export default Root;
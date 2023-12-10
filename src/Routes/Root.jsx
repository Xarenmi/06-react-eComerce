import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from '@/Components'
import { ScreenProvider } from '@/Context/ScreenContext'
import { ProductProvider } from '@/Context/ProductsContext'
import { NavigationProvider } from '@/Context/NavigationContext'

const Root = () => {
  return (
    <>
      <ScreenProvider>
        <NavigationProvider>
          <ProductProvider >
            <Header />
            <Outlet />
            <Footer />
          </ProductProvider>
        </NavigationProvider>
      </ScreenProvider>
    </>
  )
}

export default Root;
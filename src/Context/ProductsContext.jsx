import { createContext, useContext, useState, useEffect } from 'react'
import productDB from '@/assets/db.json'

const ProductContext = createContext()

function ProductProvider({ children }) {
  const [productList, setProductList] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState({})
  const [search, setSearch] = useState('')

  useEffect(() => {
    setProductList(productDB)
    setLoading(false)
  }, [])

  const data = {
    search,
    loading,
    selected,
    setSearch,
    categories,
    productList,
    setSelected,
    setCategories,
  }

  return (
    <ProductContext.Provider value={data}>
      {children}
    </ProductContext.Provider>
  )
}

function useProductContext() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
}

export { ProductProvider, useProductContext };
export default ProductContext;
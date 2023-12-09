import { createContext, useContext, useState, useEffect } from 'react'
import productDB from '@/assets/db.json'

const ProductContext = createContext()

function ProductProvider({ children }) {
  const [productList, setProductList] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    setProductList(productDB)
    setLoading(false)
    const uniqueCategories = [...new Set(productDB.map(product => product.category))];
    const additionalCategories = ['gadgets', 'women', 'men'];
    const allCategories = [...uniqueCategories, ...additionalCategories];
    setCategories(allCategories)

  }, [])

  const data = {
    search,
    loading,
    setSearch,
    categories,
    productList,
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
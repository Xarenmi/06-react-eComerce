import React from 'react'
import Card from '@/Components/Cards/Card'
import { useParams } from 'react-router-dom'
import { useProductContext } from '@/Context/ProductsContext'

const Search = () => {
  const { productList } = useProductContext()
  let { name } = useParams()

  const products = productList.filter((product) => product.title.toUpperCase().includes(name.toUpperCase()))
  console.log(products)


  return (
    <main className='search'>
      
      <h1>{`PRODUCTS ACCORDING TO YOUR SEARCH: '${name.toUpperCase()}'`}</h1>
      {products.length > 0 ? (
        products.map((product) => <Card key={product.id} id={product.id} className='search__card' />)
      ) : (
        <p>Your search has no results. Try with a different keyword.</p>
      )}
    </main>
  )
}

export default Search

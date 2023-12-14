import './card.sass'
import React from 'react'
import Card from '@/Components/Cards/Card'
import { useParams } from 'react-router-dom'
import { useProductContext } from '@/Context/ProductsContext'

const Search = () => {
  const { productList } = useProductContext()
  let { name } = useParams()
  let products

  if (name === undefined){
    name = ' '
    products = productList.filter((product) => product.title.toUpperCase().includes(name.toUpperCase()))
  } else {
    products = productList.filter((product) => product.title.toUpperCase().includes(name.toUpperCase()))
  }

  return (
    <main className='search'>
      <div className='search__container'>
        <h1><span>PRODUCTS ACCORDING TO YOUR SEARCH:</span> {` '${name.toUpperCase()}'`}</h1>

          {products.length > 0 ? (

            products.map((product) => <Card key={product.id} id={product.id} className='card-container' />)
          ) : (
            <p>Your search has no results. Try with a different keyword.</p>
          )}
      </div>
    </main>
  )
}

export default Search

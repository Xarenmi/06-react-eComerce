import React from 'react'
import Card from './Card'
import './fourCardHolder.sass'
import { shuffle }from '@/assets/modules/shuffle.js'
import { useProductContext } from '@/Context/ProductsContext'

const FourCardHolder = ({category}) => {

  const { productList } = useProductContext()
  const categoryProducts = productList.filter((product) => product.category === category)
  const randomProducts  = shuffle(categoryProducts, 4)
  const selectedCategory = category ? category.replace(/-/g, ' ') : ''
  
  return (
    <div className='fourCardHolder'>
        <h2>{selectedCategory.toUpperCase()}</h2>
        {randomProducts.map((product) => (
      <Card key={product.id} id={product.id} className='fourCardHolder__card' />
    ))}
    </div>
  )
}

export default FourCardHolder

import React from 'react'
import Card from './Card'
import { shuffle }from '@/assets/modules/shuffle.js'
import { useProductContext } from '@/Context/ProductsContext'

const FourCardHolder = ({category}) => {

  const { productList } = useProductContext()
  const categoryProducts = productList.filter((product) => product.category === category)
  const randomProducts  = shuffle(categoryProducts, 4)
  
  return (
    <div className='home__fourCardHolder'>
        <h2>{category}</h2>
        {randomProducts.map((product) => (
      <Card key={product.id} id={product.id} className='home__fourCardHolder__Card' />
    ))}
    </div>
  )
}

export default FourCardHolder

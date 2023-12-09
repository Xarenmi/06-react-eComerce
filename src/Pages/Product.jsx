import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '@/Context/ProductsContext'

const Product = () => {
  const { productList } = useProductContext()
  let { title } = useParams()
  const thisProduct = productList.find((product) => product.title.includes(title.replace(/%20/g, ' ')));

  return (
    <main className='product'>  
      <p>{thisProduct.category ? thisProduct.category : 'none'}</p>
      <h1>{thisProduct.title}</h1>
      <p>{thisProduct.description}</p>
      <p>{thisProduct.price}</p>
      <p>{thisProduct.discountPercentage}</p>
      <p>{thisProduct.rating}</p>
      <p>{thisProduct.brand}</p>
      {/*images, id?*/}
    </main>
  )
}

export default Product

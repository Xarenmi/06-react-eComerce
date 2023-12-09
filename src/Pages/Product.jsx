import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '@/Context/ProductsContext'

const Product = () => {
  const { productList } = useProductContext()
  console.log(productList)
  let { title } = useParams()
  const thisProduct = productList.find((product) => product.title === title)
  if (!thisProduct) {
    console.warn(`Product with title '${title}' not found.`);
  } else {
    console.log(thisProduct);
  }

  return (
    <main className='product'>  
      {/* <p>{thisProduct.category}</p> */}
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

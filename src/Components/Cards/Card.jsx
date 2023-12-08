import './card.sass'
import React, { useState, useEffect } from 'react'
import defaultPic from '@/assets/img/default.png'
import { useProductContext } from '@/Context/ProductsContext'

const Card = ({ id, className }) => {
  const { productList } = useProductContext()
  const thisProduct = productList.find((product) => product.id === id)
  console.log(thisProduct)
  const remainingPercentage = 100 - thisProduct.discountPercentage
  const originalPrice = thisProduct.price / remainingPercentage * 100
  const [ pic, setPic ] = useState('')

  useEffect(() => {
    setPic(thisProduct.images[0] || defaultPic);
  }, [thisProduct.images, defaultPic]);

  return (
    <div id={id} className={className}>
      <div className='cardPic' style={{ backgroundImage: `url(${pic})`}} aria-label={thisProduct.title}></div>
     {/* <img src={pic} alt={thisProduct.title}/>*/}
      <p>
        <span>-{thisProduct.discountPercentage}</span>
        <span> Sale!</span>
      </p>
      <p>${thisProduct.price} <span>Before: ${originalPrice}</span></p>
      <h3>{thisProduct.title}</h3>
    </div>
  )
}

export default Card

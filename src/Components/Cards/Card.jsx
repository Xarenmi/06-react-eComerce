import './card.sass'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import defaultPic from '@/assets/img/default.png'
import { useProductContext } from '@/Context/ProductsContext'

const Card = ({ id, className }) => {
  const { productList } = useProductContext()
  const thisProduct = productList.find((product) => product.id === id)
  const remainingPercentage = 100 - thisProduct.discountPercentage
  const originalPrice = thisProduct.price / remainingPercentage * 100
  const [pic, setPic] = useState('')

  useEffect(() => {
    setPic(thisProduct.thumbnail || defaultPic);
  }, [thisProduct.images, defaultPic]);

  return (
    <Link to={`/product/${thisProduct.title}`} className={`${className}__link`}>
      <div id={id} className={className}>
        <img src={pic} className={`${className}__cardPic`} alt={thisProduct.title}/>
        <p>
          <span>-{thisProduct.discountPercentage}</span>
          <span> Sale!</span>
        </p>
        <p>${thisProduct.price} <span>Before: ${originalPrice}</span></p>
        <h3>{thisProduct.title}</h3>
      </div>
    </Link>
  )
}

export default Card

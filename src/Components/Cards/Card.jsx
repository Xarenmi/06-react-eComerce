import React from 'react'

const Card = ({ product, className }) => {
  const remainingPercentage = 100 - product.discountPercentage
  const originalPrice = product.price / remainingPercentage * 100

  return (
    <div id='card' className={className}>
      <img src="" alt="" />
      <p>
        <span>-{product.discountPercentage}</span>
        <span> Sale!</span>
      </p>
      <p>${product.price} <span>Before: ${originalPrice}</span></p>
      <h3>{product.title}</h3>
    </div>
  )
}

export default Card

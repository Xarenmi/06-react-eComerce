import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '@/Context/ProductsContext'
import './product.sass'

const Product = () => {
  const { productList } = useProductContext()
  let { title } = useParams()
  const thisProduct = productList.find((product) => product.title === title)
  if (!thisProduct) {
    return (<p>Your search has no results. Try with a different keyword.</p>)
  }

  const [selectedImage, setSelectedImage] = useState(thisProduct.images[0])

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <main className='product'>
      <div className="product-gallery">
        <div className="main-image">
          <img src={selectedImage} alt={`Product: ${thisProduct.title}`} />
        </div>

        <div className="thumbnail-gallery">
          {thisProduct.images.map((image, index) => (
            <div
              key={index}
              className={`gallery-item ${selectedImage === image ? 'active' : ''}`}
              onClick={() => handleImageClick(image)}
            >
              <img src={image} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className='product-details'>
        <h1>{thisProduct.title}</h1>
        {/* Rating as yellow stars */}
        <p className="rating-label">Rating: {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className="star">⭐</span>
        ))}</p>
        <p>{thisProduct.description}</p>
        {/* Discount label */}
        <p className="discount-label">Discount: -{thisProduct.discountPercentage}%</p>
        {/* Add to cart button */}
        <p>$ {thisProduct.price} <br/> <button className='add-to-cart'>Add to cart</button></p>
        
      </div>
    </main>
  )
}

export default Product

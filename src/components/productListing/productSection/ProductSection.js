import React from 'react'
import ProductCard from '../productCard/ProductCard'
import './productSection.css'
function ProductSection({ productData, productName }) {
 
  return (
    <div className='maxWidth productSection'>
      <div className='productName'>{productName}</div>
      <div className="productGrid">
        {productData &&
          productData.map((data) =>
            <ProductCard productData={data} />
          )
        }
      </div>
    </div>
  )
}

export default ProductSection
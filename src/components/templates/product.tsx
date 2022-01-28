import React from 'react'
import ProductDisplay from '@components/ProductDisplay'

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext
  return <ProductDisplay product={product} />
}

export default ProductTemplate

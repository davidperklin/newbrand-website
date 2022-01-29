import React from 'react'
import ProductDisplay from '@components/ProductDisplay'
import Head from '@components/Head'

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext
  return (
    <>
      <Head
        title={`${
          product.productType === 'Clothing' ? 'Made in Canada - ' : ''
        }${product.title}${
          product.productType === 'Footwear' ? ' - Made in Italy' : ''
        }`}
        description={`FREE EXPRESS SHIPPING ACROSS CANADA ${product.description}`}
      />
      <ProductDisplay product={product} />
    </>
  )
}

export default ProductTemplate

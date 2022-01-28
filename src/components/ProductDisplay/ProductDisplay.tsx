import React from 'react'
import { Container } from '@components/common'
import { IProductDisplay } from './ProductDisplay.types'
import ProductDisplayGrid from './ProductDisplayGrid'
import ProductImageGallery from './ProductImageGallery/ProductImageGallery'
import ProductForm from './ProductForm'

const ProductDisplay = ({ product }: IProductDisplay) => {
  return (
    <Container>
      <ProductDisplayGrid
        gallery={<ProductImageGallery product={product} />}
        form={<ProductForm product={product} />}
      />
    </Container>
  )
}

export default ProductDisplay

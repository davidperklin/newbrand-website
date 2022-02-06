import React from 'react'
import { Container } from '@components/common'
import { IProductDisplay } from './ProductDisplay.types'
import ProductDisplayGrid from './ProductDisplayGrid'
import ProductImageGallery from './ProductImageGallery/ProductImageGallery'
import ProductForm from './ProductForm'
import Breadcrumbs, { Crumb } from '@components/common/Breadcrumbs'

const ProductDisplay = ({ product }: IProductDisplay) => {
  const crumbs: Crumb[] = [
    {
      label: 'NEW BRAND',
      path: '/',
    },
    {
      label: product.productType,
      path: `/${
        product.productType === 'Clothing' ? 'clothing' : 'sneakers'
      }?ref=p_${product.id}`,
    },
    {
      label: product.title,
      path: '/',
      isActive: true,
    },
  ]
  return (
    <Container>
      <div className="mt-6">
        <Breadcrumbs crumbs={crumbs} />
        <ProductDisplayGrid
          gallery={<ProductImageGallery product={product} />}
          form={<ProductForm product={product} />}
        />
      </div>

      <div className="mt-8 mb-6">
        <Breadcrumbs crumbs={crumbs} />
      </div>
    </Container>
  )
}

export default ProductDisplay

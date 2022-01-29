import React from 'react'
import { Container } from '@components/common'
import { IProductDisplay } from './ProductDisplay.types'
import ProductDisplayGrid from './ProductDisplayGrid'
import ProductImageGallery from './ProductImageGallery/ProductImageGallery'
import ProductForm from './ProductForm'
import { Link } from 'gatsby'
import { Icon } from 'src/@ds'

const ProductDisplay = ({ product }: IProductDisplay) => {
  return (
    <Container>
      <ProductDisplayGrid
        gallery={<ProductImageGallery product={product} />}
        form={<ProductForm product={product} />}
      />
      <div className="mt-8 mb-6">
        <Link
          to={`/${
            product.productType === 'Clothing' ? 'clothing' : 'sneakers'
          }?ref=p_${product.id}`}
          className="inline-flex items-center text-contrast hover:no-underline hover:border-contrast border-b border-transparent border-dotted"
        >
          <Icon name="ArrowLeft" className="mr-1" />
          Back to{' '}
          {product.productType === 'Clothing' ? 'clothing' : 'sneakers'}
        </Link>
      </div>
    </Container>
  )
}

export default ProductDisplay

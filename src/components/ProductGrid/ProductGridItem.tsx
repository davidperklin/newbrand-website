import React from 'react'
import { ProductGridItemProps } from './ProductGrid.types'
import { Link } from 'gatsby'
import { PRODUCT_PAGE_BASE_SLUG } from '@constants'
import { GatsbyImage } from 'gatsby-plugin-image'
import { formatPrice } from 'src/utils'

const ProductGridItem = ({ product }: ProductGridItemProps) => {
  return (
    <div
      className={`w-full sm:w-1/2 ${
        product.productType === 'Clothing' ? 'md:w-1/3' : ''
      }`}
    >
      <Link
        className="block h-full text-contrast hover:no-underline border border-dotted border-transparent hover:border-contrast md:p-5 sm:p-4"
        to={`/${PRODUCT_PAGE_BASE_SLUG}/${product.handle}?ref=product_grid`}
      >
        <GatsbyImage
          objectFit="contain"
          image={product.images[0].gatsbyImageData}
          alt={product.title}
        />
        <div className="px-4 sm:px-0 my-2.5 mb-6">
          <div>
            <div role="heading" aria-level={2} className="uppercase">
              {product.title}
              {product.totalInventory === 0 ? (
                <span className="ml-1">
                  |
                  <span className="text-danger uppercase ml-1">
                    Sold out
                  </span>
                </span>
              ) : (
                ''
              )}
            </div>
            <div className="my-2">
              <span>
                {formatPrice(product.priceRangeV2.minVariantPrice.amount)}{' '}
                & free express shipping
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default ProductGridItem

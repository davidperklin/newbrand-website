import React, { useState } from 'react'
import { ProductGridItemProps } from './ProductGrid.types'
import { Link } from 'gatsby'
import { PRODUCT_PAGE_BASE_SLUG } from '@constants'
import { GatsbyImage } from 'gatsby-plugin-image'
import { formatPrice } from 'src/utils'

const ProductGridItem = ({ product }: ProductGridItemProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false)
  return (
    <div
      className={`w-1/2 p-1.5 mb-6 md:mb-8 ${
        product.productType === 'Clothing' ? 'lg:w-1/3' : 'lg:w-1/2'
      }`}
    >
      <Link
        className="block h-full text-contrast hover:no-underline"
        to={`/${PRODUCT_PAGE_BASE_SLUG}/${product.handle}?ref=product_grid`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div style={{ backgroundColor: 'var(--prod-img-bg-color)' }}>
          <div
            className={`
            ${
              isHovering
                ? 'opacity-0 invisible h-0 w-0'
                : 'opacity-1 visible'
            }`}
          >
            <GatsbyImage
              objectFit="contain"
              image={product.images[0].gatsbyImageData}
              alt={product.title}
              className="pointer-events-none"
            />
          </div>
          <div
            className={`
            ${
              !isHovering
                ? 'opacity-0 invisible h-0 w-0'
                : 'opacity-1 visible'
            }`}
          >
            <GatsbyImage
              objectFit="contain"
              image={product.images[1].gatsbyImageData}
              alt={product.title}
              className="pointer-events-none"
            />
          </div>
        </div>

        <div className="mt-2">
          <div>
            {product.productType === 'Clothing' && (
              <div className="block md:hidden ">
                <img
                  src="https://nb-marketing-assets.s3.amazonaws.com/icons/ca-clag.svg"
                  className="h-2 md:h-2.5 mb-2"
                />
              </div>
            )}

            <div
              role="heading"
              aria-level={2}
              className="uppercase items-center overflow-ellipsis break-words overflow-hidden font-semibold"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}
            >
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
            <div className="md:mt-3.5 mt-2">
              <span className="text-danger">SORRY, SOLD OUT</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default ProductGridItem

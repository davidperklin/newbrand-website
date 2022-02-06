import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import { IProductImageGallery } from './ProductImageGallery.types'
import * as styles from './nb.module.scss'
import ProductImageSwiper from './ProductImageSwiper'
import { Helmet } from 'react-helmet'

const ProductImageGallery = ({ product }: IProductImageGallery) => {
  const [imageFullScreenIndex, setImageFullScreenIndex] = useState<
    number | null
  >(null)
  return (
    <>
      <Helmet>
        <body data-scroll-locked={imageFullScreenIndex !== null} />
      </Helmet>
      <div className="block md:hidden">
        <ProductImageSwiper product={product} />
      </div>
      <div className={`-mx-1.5 -mt-1.5 md:block hidden`}>
        <div
          className={`uppercase ${styles.gallery__closeNote} ${
            imageFullScreenIndex !== null
              ? styles.gallery__closeNote_isVisible
              : ''
          }`}
          onClick={() => setImageFullScreenIndex(null)}
          aria-hidden={imageFullScreenIndex === null}
        >
          Click anywhere to close
        </div>
        {product.images.map((image, index) => (
          <GatsbyImage
            image={image.gatsbyImageData}
            alt="Product image"
            objectFit="contain"
            class={styles.gallery__imageWrapper}
            imgClassName={`${styles.gallery__image} ${
              imageFullScreenIndex === index
                ? styles.gallery_fullScreen
                : ''
            }`}
            onClick={
              imageFullScreenIndex === index
                ? () => setImageFullScreenIndex(null)
                : () => setImageFullScreenIndex(index)
            }
            key={index}
          />
        ))}
      </div>
    </>
  )
}
export default ProductImageGallery

import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import { IProductImageGallery } from './ProductImageGallery.types'
import * as styles from './nb.module.scss'
import ProductImageSwiper from './ProductImageSwiper'

const ProductImageGallery = ({ product }: IProductImageGallery) => {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false)
  return (
    <>
      <div className="block md:hidden">
        <ProductImageSwiper product={product} />
      </div>
      <div
        className={`${styles.gallery} ${
          isFullScreen ? styles.gallery_fullScreen : ''
        } md:block hidden`}
      >
        <div
          className={`${styles.gallery__closeNote} : ${styles.gallery_fullScreen__closeNote}`}
          onClick={() => setIsFullScreen(!isFullScreen)}
          aria-hidden={!isFullScreen}
        >
          Click anywhere to close.
        </div>
        {product.images.map((image) => (
          <GatsbyImage
            image={image.gatsbyImageData}
            alt="Product image"
            objectFit="contain"
            class={styles.gallery__imageWrapper}
            imgClassName={styles.gallery__image}
            onClick={() => setIsFullScreen(!isFullScreen)}
          />
        ))}
      </div>
    </>
  )
}
export default ProductImageGallery

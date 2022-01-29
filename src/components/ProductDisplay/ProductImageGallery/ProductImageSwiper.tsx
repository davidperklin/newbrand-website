import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

// import Swiper core and required modules
import SwiperCore, {
  FreeMode,
  EffectFade,
  Pagination,
  Thumbs,
} from 'swiper'

import * as styles from './nb.module.scss'
import { Product } from 'src/api'
import { GatsbyImage } from 'gatsby-plugin-image'

// install Swiper modules
SwiperCore.use([FreeMode, EffectFade, Pagination, Thumbs])

interface ProductImageGalleryProps {
  product: Product
}

const ProductImageSwiper = ({ product }: ProductImageGalleryProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

  return (
    <div className={styles.swiperWrapper}>
      <Swiper
        spaceBetween={0}
        effect="slide"
        pagination={{
          clickable: true,
          bulletClass:
            styles.productImageGallery__thumbsSlider__pagination,
          bulletActiveClass:
            styles.productImageGallery__thumbsSlider__pagination_active,
        }}
        thumbs={{
          swiper: thumbsSwiper,
          slideThumbActiveClass:
            styles.productImageGallery__thumbSlide_active,
        }}
      >
        {product.images.map((image, index) => (
          <SwiperSlide key={`Slide ${index}`}>
            <GatsbyImage
              image={image.gatsbyImageData}
              alt={product.title}
              objectFit="contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
export default ProductImageSwiper

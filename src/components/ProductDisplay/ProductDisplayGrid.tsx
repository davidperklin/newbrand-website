import React from 'react'

interface IProductDisplayGrid {
  gallery: any
  form: any
}

import * as styles from './nb.module.scss'

const ProductDisplayGrid = ({ gallery, form }: IProductDisplayGrid) => {
  return (
    <div className="flex  flex-wrap">
      <div className="w-full md:w-3/5 md:pr-3">
        <div className="block">{gallery}</div>
      </div>
      <div
        className={`${styles.productDisplayGrid__formArea} w-full md:w-2/5 sticky h-full`}
      >
        <div
          className={`${styles.productDisplayGrid__formAreaInner} md:flex`}
        >
          <div className="w-full">{form}</div>
        </div>
      </div>
    </div>
  )
}
export default ProductDisplayGrid

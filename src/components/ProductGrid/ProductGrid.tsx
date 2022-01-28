import React from 'react'
import { ProductGridProps } from './ProductGrid.types'
import ProductGridItem from './ProductGridItem'

import * as styles from './nb.module.scss'

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <ProductGridItem product={product} />
      ))}
    </div>
  )
}
export default ProductGrid

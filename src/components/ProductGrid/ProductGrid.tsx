import React from 'react'
import { ProductGridProps } from './ProductGrid.types'
import ProductGridItem from './ProductGridItem'

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="flex flex-wrap -mx-1.5">
      {products.map((product) => (
        <ProductGridItem product={product} />
      ))}
    </div>
  )
}
export default ProductGrid

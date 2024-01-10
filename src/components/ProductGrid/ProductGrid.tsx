import React from 'react'
import { ProductGridProps } from './ProductGrid.types'
import ProductGridItem from './ProductGridItem'

const ProductGrid = ({ products }: ProductGridProps) => {
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes('sneaker') ||
      product.title.toLowerCase().includes('hoodie') ||
      product.title.toLowerCase().includes('jogger')
  )

  return (
    <div className="flex flex-wrap -mx-1.5">
      {filteredProducts.map((product) => {
        if (
          product.title.toLowerCase().includes('sneaker') ||
          product.title.toLowerCase().includes('hoodie') ||
          product.title.toLowerCase().includes('jogger')
        )
          return <ProductGridItem product={product} />
      })}
    </div>
  )
}
export default ProductGrid

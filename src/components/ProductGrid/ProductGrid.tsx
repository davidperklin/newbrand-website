import { Container } from '@components/common'
import React from 'react'
import { ProductGridProps } from './ProductGrid.types'
import ProductGridItem from './ProductGridItem'

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <Container toEdgeOnMobile>
      <div className="flex flex-wrap">
        {products.map((product) => (
          <ProductGridItem product={product} />
        ))}
      </div>
    </Container>
  )
}
export default ProductGrid

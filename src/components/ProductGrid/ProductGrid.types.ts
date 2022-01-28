import { Product } from '@api'

export interface ProductGridItemProps {
  product: TProductGridItem
}

export interface ProductGridProps {
  products: Array<Product>
}

export interface TProductGridItem extends Product {}

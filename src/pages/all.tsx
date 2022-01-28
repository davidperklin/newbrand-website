import React from 'react'
import { Link, graphql } from 'gatsby'

import { Product } from '@api'
import { PRODUCT_PAGE_BASE_SLUG } from '@constants'
import ProductGrid from '@components/ProductGrid'

export const query = graphql`
  {
    allShopifyProduct(sort: { fields: [title] }) {
      nodes {
        id
        title
        shopifyId
        description
        descriptionHtml
        handle
        priceRangeV2 {
          minVariantPrice {
            amount
          }
        }
        images {
          gatsbyImageData
        }
        productType
        totalInventory
      }
    }
  }
`

const AllProductsPage = ({ data }) => {
  return (
    <div>
      <ProductGrid products={data.allShopifyProduct.nodes} />
    </div>
  )
}

export default AllProductsPage

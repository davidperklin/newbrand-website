import React from 'react'
import { graphql } from 'gatsby'

import ProductGrid from '@components/ProductGrid'

export const query = graphql`
  {
    allShopifyProduct(
      filter: { productType: { eq: "Clothing" } }
      sort: {
        fields: priceRangeV2___maxVariantPrice___amount
        order: DESC
      }
    ) {
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

const SneakersPage = ({ data }) => {
  return (
    <div>
      <ProductGrid products={data.allShopifyProduct.nodes} />
    </div>
  )
}

export default SneakersPage

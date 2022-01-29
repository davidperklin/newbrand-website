import React from 'react'
import { graphql } from 'gatsby'

import ProductGrid from '@components/ProductGrid'
import Head from '@components/Head'

export const query = graphql`
  {
    allShopifyProduct(
      filter: { productType: { eq: "Footwear" } }
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
    <>
      <Head
        title="Minimal Sneakers Made in Italy"
        description="Shop minimal Italian leather sneakers. FREE EXPRESS SHIPPING ACROSS CANADA."
      />
      <ProductGrid products={data.allShopifyProduct.nodes} />
    </>
  )
}

export default SneakersPage

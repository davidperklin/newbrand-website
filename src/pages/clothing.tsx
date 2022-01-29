import React from 'react'
import { graphql } from 'gatsby'

import ProductGrid from '@components/ProductGrid'
import Head from '@components/Head'

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

const ClothingPage = ({ data }) => {
  return (
    <>
      <Head
        title="Made in Canada Clothing"
        description="Shop made in Canada clothing. FREE EXPRESS SHIPPING ACROSS CANADA. Hoodies, joggers, crewnecks."
      />
      <ProductGrid products={data.allShopifyProduct.nodes} />
    </>
  )
}

export default ClothingPage

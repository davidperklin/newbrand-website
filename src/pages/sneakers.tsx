import React from 'react'
import { graphql } from 'gatsby'

import ProductGrid from '@components/ProductGrid'
import Head from '@components/Head'
import Breadcrumbs, { Crumb } from '@components/common/Breadcrumbs'
import { Container } from '@components/common'

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

const crumbs: Crumb[] = [
  {
    label: 'New Brand',
    path: '/',
    isActive: false,
  },
  {
    label: 'Sneakers',
    path: '/sneakers',
    isActive: true,
  },
]

const SneakersPage = ({ data }) => {
  return (
    <>
      <Head
        title="Minimal Sneakers Made in Italy"
        description="Shop minimal Italian leather sneakers. FREE EXPRESS SHIPPING ACROSS CANADA."
      />
      <Container>
        <div className="mt-8 md:mt-20">
          <Breadcrumbs crumbs={crumbs} />
          <ProductGrid products={data.allShopifyProduct.nodes} />
        </div>
      </Container>
    </>
  )
}

export default SneakersPage

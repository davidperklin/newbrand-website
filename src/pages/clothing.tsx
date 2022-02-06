import React from 'react'
import { graphql } from 'gatsby'

import ProductGrid from '@components/ProductGrid'
import Head from '@components/Head'
import Breadcrumbs, { Crumb } from '@components/common/Breadcrumbs'
import { Container } from '@components/common'

export const query = graphql`
  {
    clothing: allShopifyProduct(
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

const crumbs: Crumb[] = [
  {
    label: 'New Brand',
    path: '/',
    isActive: false,
  },
  {
    label: 'Clothing',
    path: '/clothing',
    isActive: true,
  },
]

const ClothingPage = ({ data }) => {
  const items = data.clothing.nodes
  const sweatshirts: any[] = [
    items[3],
    items[1],
    items[2],
    items[9],
    items[7],
    items[10],
    items[8],
  ]
  const pants = [items[4], items[5], items[6]]
  const zipSweater = [items[0]]

  return (
    <>
      <Head
        title="Made in Canada Clothing"
        description="Shop made in Canada clothing. FREE EXPRESS SHIPPING ACROSS CANADA. Hoodies, joggers, crewnecks."
      />
      <Container>
        <div className="mt-8 md:mt-20">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mb-24">
            <ProductGrid products={pants} />
            <ProductGrid products={sweatshirts} />
            <ProductGrid products={zipSweater} />
          </div>
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </Container>
    </>
  )
}

export default ClothingPage

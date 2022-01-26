import React from 'react'
import { Link, graphql } from 'gatsby'

import { Product } from '@api'
import { PRODUCT_PAGE_BASE_SLUG } from '@constants'
import { Button } from '@ds'
import useStoreContext from '@hooks/useStoreContext'

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
      }
    }
  }
`

const AllProductsPage = ({ data }) => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.allShopifyProduct.nodes.map((node: Product) => (
          <li key={node.id}>
            <h3>
              <Link to={`/products/${node.handle}`}>{node.title}</Link>
              {' - '}${node.priceRangeV2.minVariantPrice.amount}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AllProductsPage

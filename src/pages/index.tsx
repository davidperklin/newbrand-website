import HomeComponent from '@components/HomeComponent'
import { graphql } from 'gatsby'
import React from 'react'

export const query = graphql`
  {
    shopifyProduct(id: { eq: "3ad05c48-ede9-5358-a073-4a940bd94c19" }) {
      images {
        gatsbyImageData
      }
      handle
    }
  }
`

const HomePage = ({ data }) => {
  return (
    <HomeComponent
      image={data.shopifyProduct.images[0].gatsbyImageData}
      handle={data.shopifyProduct.handle}
    />
  )
}
export default HomePage

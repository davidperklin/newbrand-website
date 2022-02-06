import Head from '@components/Head'
import HomeComponent from '@components/HomeComponent'
import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

export const query = graphql`
  {
    prod1: shopifyProduct(
      id: { eq: "3ad05c48-ede9-5358-a073-4a940bd94c19" }
    ) {
      images {
        gatsbyImageData
      }
    }
    prod2: shopifyProduct(
      id: { eq: "134930e5-e7c6-547c-a97b-402ab3260ef4" }
    ) {
      images {
        gatsbyImageData
      }
    }
  }
`

const HomePage = ({ data }) => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
        title="New Brand | Sneakers Made in Italy, Clothing Made in Canada"
        meta={[
          {
            name: `description`,
            content:
              'Shop minimal sneakers made in Italy and made in Canada essentials clothing - hoodies, joggers and crewnecks.',
          },
          {
            property: `og:title`,
            content: 'New Brand',
          },
          {
            property: `og:description`,
            content:
              'Shop minimal sneakers made in Italy and made in Canada essentials clothing - hoodies, joggers and crewnecks.',
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:title`,
            content: 'New Brand',
          },
          {
            name: `twitter:description`,
            content:
              'Shop minimal sneakers made in Italy and made in Canada essentials clothing - hoodies, joggers and crewnecks.',
          },
          {
            name: `og:image`,
            content: `https://shopnewbrand.com/assets/images/ogImg_main.jpg`,
          },
          {
            name: 'twitter:card',
            content: 'summary_large_image',
          },
        ]}
      />
      <HomeComponent
        image={data.prod1.images[0].gatsbyImageData}
        image2={data.prod2.images[0].gatsbyImageData}
      />
    </>
  )
}
export default HomePage

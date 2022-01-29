import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { useLocation } from '@reach/router'

interface Head {
  title: string
  description: string
  ogDescription?: string
  ogImage?: string
}

function Head({ title, description, ogDescription, ogImage }: Head) {
  const { pathname } = useLocation()
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        return (
          <Helmet
            htmlAttributes={{
              lang: 'en',
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: description,
              },
              {
                name: 'url',
                content: `${data.site.siteMetadata.url}${pathname}`,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: ogDescription ? ogDescription : description,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:url`,
                content: `${data.site.siteMetadata.url}${pathname}`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: '@_MRSCompany',
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: description,
              },
              {
                name: `og:image`,
                content: ogImage
                  ? ogImage
                  : `${data.site.siteMetadata.url}/assets/images/ogImg_main.jpg`,
              },
              {
                name: `twitter:image`,
                content: ogImage
                  ? ogImage
                  : `${data.site.siteMetadata.url}/assets/images/ogImg_main.jpg`,
              },
              {
                name: 'twitter:card',
                content: 'summary_large_image',
              },
            ]}
          />
        )
      }}
    />
  )
}
export default Head

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        url
      }
    }
  }
`

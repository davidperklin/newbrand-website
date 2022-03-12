import Hero from '@components/Hero'
import React from 'react'
import Helmet from 'react-helmet'

const HomePage = () => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
        title="New Brand - Clothing Made in Canada, Sneakers Made in Italy"
        meta={[
          {
            name: `description`,
            content:
              'Shop made in Canada essentials clothing - hoodies, joggers and crewnecks - and minimal sneakers made in Italy.',
          },
          {
            property: `og:title`,
            content: 'New Brand',
          },
          {
            property: `og:description`,
            content:
              'Shop made in Canada essentials clothing - hoodies, joggers and crewnecks - and minimal sneakers made in Italy.',
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
              'Shop made in Canada essentials clothing - hoodies, joggers and crewnecks - and minimal sneakers made in Italy.',
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
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://www.shopnewbrand.com",
              "name": "New Brand",
            }
          `}
        </script>
      </Helmet>
      <Hero />
    </>
  )
}
export default HomePage

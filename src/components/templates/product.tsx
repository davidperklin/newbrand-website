import React from 'react'
import ProductDisplay from '@components/ProductDisplay'
import Head from '@components/Head'
import { Helmet } from 'react-helmet'

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext

  return (
    <>
      <Head
        title={`${
          product.productType === 'Clothing' ? 'Made in Canada - ' : ''
        }${product.title}${
          product.productType === 'Footwear' ? ' - Made in Italy' : ''
        }`}
        description={`${product.description}`}
        ogImage={product.images[0].originalSrc}
      />
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "Product",
              "name": "${product.title}",
              "description": "${product.description}",
              "brand": {
                "@type": "Brand",
                "name": "New Brand"
              },
              "countryOfAssembly": "${
                product.productType === 'Clothing' ? 'Canada' : 'Italy'
              }",
              "offers": {
                "@type": "Offer",
                "url": ${`https://shopnewbrand.com/p/${product.handle}`},
                "priceCurrency": "CAD",
                "price": ${product.priceRangeV2.minVariantPrice.amount},
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock",
                "shippingDetails": {
                  "@type": "OfferShippingDetails",
                  "shippingRate": {
                    "@type": "MonetaryAmount",
                    "value": "0.00",
                    "currency": "CAD"
                  },
                  "shippingDestination": {
                    "@type": "DefinedRegion",
                    "addressCountry": "CA",
                  },
                  "deliveryTime": {
                    "@type": "ShippingDeliveryTime",
                    "handlingTime": {
                      "@type": "QuantitativeValue",
                      "minValue": "0",
                      "maxValue": "1"
                    },
                    "transitTime": {
                      "@type": "QuantitativeValue",
                      "minValue": "1",
                      "maxValue": "2"
                    },
                    "cutOffTime": "19:30-08:00",
                    "businessDays": {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": [ "https://schema.org/Monday", "https://schema.org/Tuesday", "https://schema.org/Wednesday", "https://schema.org/Thursday", "https://schema.org/Friday" ]
                    }
                  }
                }
              }
            }
          `}
        </script>
      </Helmet>
      <ProductDisplay product={product} />
    </>
  )
}

export default ProductTemplate

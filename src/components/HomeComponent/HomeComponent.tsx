import { Container, FullScreenCentered } from '@components/common'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { PRODUCT_PAGE_BASE_SLUG } from 'src/constants'

const HomeComponent = ({ image, handle }) => {
  return (
    <Container>
      <FullScreenCentered>
        <div className="mx-auto" style={{ maxWidth: '640px' }}>
          <Link
            to={`/${PRODUCT_PAGE_BASE_SLUG}/${handle}?ref=home_page`}
            className="outline-dotted outline-transparent hover:outline-contrast block outline-1 outline-offset-1"
          >
            <GatsbyImage
              image={image}
              alt="New Brand Sneaker"
              objectFit="contain"
            />
          </Link>
        </div>
      </FullScreenCentered>
    </Container>
  )
}
export default HomeComponent

import { Container, FullScreenCentered } from '@components/common'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { Icon } from 'src/@ds'
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
      <div className="md:hidden">
        <FullScreenCentered>
          <ul className="w-full">
            <li>
              <Link
                to="/sneakers?ref=mobile_home_link"
                className="flex justify-between items-center w-full text-contrast hover:no-underline py-4 border-b"
              >
                Browse sneakers made in Italy <Icon name="ArrowRight" />
              </Link>
            </li>
            <li>
              <Link
                to="/clothing?ref=mobile_home_link"
                className="flex justify-between items-center w-full text-contrast hover:no-underline py-4"
              >
                Browse clothing made in Canada <Icon name="ArrowRight" />
              </Link>
            </li>
          </ul>
        </FullScreenCentered>
      </div>
    </Container>
  )
}
export default HomeComponent

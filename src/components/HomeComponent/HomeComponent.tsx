import { Container, FullScreenCentered } from '@components/common'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

const HomeComponent = ({ image, image2 }) => {
  return (
    <Container>
      <FullScreenCentered>
        <div className="flex flex-wrap -mx-1.5">
          <div className="mx-auto w-full md:w-1/2 p-1.5">
            <Link
              to={`/sneakers?ref=home_page`}
              className="block relative"
            >
              <div
                className="absolute h-full w-full z-10"
                style={{
                  background: 'rgba(0,0,0,0.01)',
                  backdropFilter: ' blur(4px)',
                }}
              >
                <div
                  className="flex items-center justify-center font-bold text-center h-full w-full"
                  style={{ color: '#fff', fontSize: '22px' }}
                >
                  <div>
                    <div className="block text-center">SNEAKERS</div>
                    <div className="opacity-70 block text-center">
                      MADE IN ITALY
                    </div>
                  </div>
                </div>
              </div>
              <GatsbyImage
                image={image}
                alt="New Brand Sneaker"
                objectFit="cover"
                objectPosition="center"
                imgClassName="grayscale"
              />
            </Link>
          </div>
          <div className="mx-auto w-full md:w-1/2 p-1.5">
            <Link
              to={`/clothing?ref=home_page`}
              className="block relative"
            >
              <div
                className="absolute h-full w-full z-10"
                style={{
                  background: 'rgba(0,0,0,0.01)',
                  backdropFilter: ' blur(4px)',
                }}
              >
                <div
                  className="flex items-center justify-center font-bold text-center h-full w-full"
                  style={{ color: '#fff', fontSize: '22px' }}
                >
                  <div>
                    <div className="block text-center">CLOTHING</div>
                    <div className="opacity-70 block text-center">
                      MADE IN CANADA
                    </div>
                  </div>
                </div>
              </div>
              <GatsbyImage
                image={image2}
                alt="New Brand Sneaker"
                objectFit="cover"
                objectPosition="center"
                imgClassName="grayscale"
              />
            </Link>
          </div>
        </div>
      </FullScreenCentered>

      {/* <div className="md:hidden">
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
      </div> */}
    </Container>
  )
}
export default HomeComponent

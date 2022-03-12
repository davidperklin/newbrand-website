import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { Helmet } from 'react-helmet'
import * as styles from './nb.module.scss'

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "images/New_Brand_Shoot-97.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)
  const image = getImage(data.image)!

  return (
    <>
      <Helmet>
        <body data-scroll-locked={true} />
      </Helmet>
      <Link to="/clothing?ref=home_hero" className={styles.container}>
        <div className={styles.text}>With love from Toronto, Canada.</div>
        <div className={styles.imageContainer}>
          <GatsbyImage
            image={image}
            alt="New Brand made in Canada clothing and made in Italy sneakers"
            imgClassName={styles.image}
            className={styles.imageWrapper}
            objectFit="cover"
          />
        </div>
      </Link>
    </>
  )
}
export default Hero

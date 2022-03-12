import { Container } from '@components/common'
import { Link } from 'gatsby'
import React from 'react'
import * as styles from './nb.module.scss'
import { useLocation } from '@reach/router'
import { Icon } from 'src/@ds'

const Footer = () => {
  const year = new Date().getFullYear()
  const location = useLocation()
  var isHomePage: boolean = location.pathname === '/'

  return (
    <footer
      className={`${styles.footer} ${
        isHomePage ? styles.footer_withFullScreenHero : ''
      }`}
    >
      <Container>
        <div className="flex justify-between">
          <div>&copy; {year} New Brand Inc.</div>
          <div>
            <ul className="flex items-center">
              <li className="mr-6">
                <Link to="/policies" className="hover:no-underline">
                  Policies
                </Link>
              </li>
              <li className="flex items-center">
                <a
                  href="https://www.instagram.com/atnewbrand/"
                  target="_blank"
                  className="hover:no-underline flex items-center"
                >
                  <Icon name="Instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}
export default Footer

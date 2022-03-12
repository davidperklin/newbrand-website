import React from 'react'
import Brand from './Brand'
import { leftMenuItems, rightMenuItems } from './nav-items'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'

import * as styles from './nb.module.scss'
import useStoreContext from '@hooks/useStoreContext'

const Header = () => {
  const { cart } = useStoreContext()
  const location = useLocation()
  var isHomePage: boolean = location.pathname === '/'

  return (
    <header
      className={`${styles.header} ${
        isHomePage ? styles.header_transparent : ''
      } `}
    >
      <div className={styles.container}>
        <div className="flex justify-between items-center w-full h-full">
          <nav>
            <ul className={styles.list}>
              {leftMenuItems.map((item) => (
                <li key={item.path} className="pr-6">
                  <Link to={item.path} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Brand />
          <nav>
            <ul className={styles.list}>
              {rightMenuItems.map((item) => (
                <li key={item.path} className="pl-6">
                  <Link to={item.path} className={styles.link}>
                    {item.label}{' '}
                    {item.path === '/cart?ref=nav' &&
                      (cart ? `(${cart.lineItems.length})` : '(0)')}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
export default Header

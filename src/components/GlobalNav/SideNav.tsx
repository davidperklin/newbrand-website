import React from 'react'
import { Link } from 'gatsby'
import * as styles from './nb.module.scss'

const GnSideMenu = () => {
  return (
    <aside className={styles.sideMenu}>
      <nav>
        <ul className={styles.menu}>
          <li className={styles.item}>
            <Link to="/sneakers?ref=nav" className={styles.link}>
              Sneakers
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/clothing?ref=nav" className={styles.link}>
              Clothing
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/about?ref=nav" className={styles.link}>
              About New Brand
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
export default GnSideMenu
import React from 'react'
import { Link } from 'gatsby'
import * as styles from './nb.module.scss'

const GnLeftMenu = () => {
  return (
    <ul className={styles.menu}>
      <li className={styles.item}>
        <Link to="/shop" className={styles.link}>
          Sneakers
        </Link>
      </li>
      <li className={styles.item}>
        <Link to="/shop" className={styles.link}>
          Clothing
        </Link>
      </li>
      <li className={styles.item}>
        <Link to="/all" className={styles.link}>
          All Products
        </Link>
      </li>
    </ul>
  )
}
export default GnLeftMenu

import React from 'react'

import { Link } from 'gatsby'
import * as styles from './nb.module.scss'
import useStoreContext from '@hooks/useStoreContext'

const GnRightMenu = () => {
  const { cart } = useStoreContext()
  return (
    <ul className={`${styles.menu} ${styles.menu_right}`}>
      <li className={styles.item}>
        <Link to="/sneakers?ref=desktop_nav" className={styles.link}>
          Sneakers
        </Link>
      </li>
      <li className={`${styles.item} ${styles.item__hasDivider}`}>
        <Link to="/clothing?ref=desktop_nav" className={styles.link}>
          Clothing
        </Link>
      </li>
      <li className={`${styles.item} ${styles.item__hasDivider}`}>
        <Link to="/orders" className={styles.link}>
          Orders & Returns
        </Link>
      </li>
      <li className={`${styles.item} font-bold`}>
        <Link to="/cart" className={styles.link}>
          Shopping Cart {cart ? `(${cart.lineItems.length})` : ''}
        </Link>
      </li>
    </ul>
  )
}
export default GnRightMenu

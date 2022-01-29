import React from 'react'

import { Link } from 'gatsby'
import * as styles from './nb.module.scss'
import useStoreContext from '@hooks/useStoreContext'

const GnRightMenu = () => {
  const { cart } = useStoreContext()
  return (
    <ul className={`${styles.menu} ${styles.menu_right}`}>
      <li className={styles.item}>
        <Link to="/orders" className={styles.link}>
          Orders & Returns
        </Link>
      </li>
      <li className={styles.item}>
        <Link to="/cart" className={styles.link}>
          Cart {cart ? `(${cart.lineItems.length})` : ''}
        </Link>
      </li>
    </ul>
  )
}
export default GnRightMenu

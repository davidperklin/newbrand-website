import React from 'react'
import Brand from './Brand'
import * as styles from './nb.module.scss'
import GnLeftMenu from './LeftMenu'
import GnRightMenu from './RightMenu'

const GlobalNav = () => {
  return (
    <nav className={styles.nav}>
      <GnLeftMenu />
      <Brand />
      <GnRightMenu />
    </nav>
  )
}
export default GlobalNav

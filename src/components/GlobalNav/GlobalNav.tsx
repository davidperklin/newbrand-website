import React from 'react'
import Brand from './Brand'
import * as styles from './nb.module.scss'
import GnRightMenu from './RightMenu'

const GlobalNav = () => {
  return (
    <header className={styles.nav}>
      <Brand />
      <GnRightMenu />
    </header>
  )
}
export default GlobalNav

import React from 'react'
import * as styles from './nb.module.scss'

interface IContainer {
  toEdgeOnMobile?: boolean
  children: any
}

const Container = ({ toEdgeOnMobile, children }: IContainer) => {
  return (
    <div
      className={`${styles.container} ${
        toEdgeOnMobile ? styles.container_toEdgeOnMobile : ''
      }`}
    >
      {children}
    </div>
  )
}
export default Container

import React from 'react'
import { Link } from 'gatsby'
import * as styles from './nb.module.scss'

const Main = ({ children }) => {
  return <main className={styles.main}>{children}</main>
}
export default Main

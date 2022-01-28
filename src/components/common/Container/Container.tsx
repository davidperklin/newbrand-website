import React from 'react'
import * as styles from './nb.module.scss'

const Container: React.FC = (props) => {
  return <div className={styles.container}>{props.children}</div>
}
export default Container

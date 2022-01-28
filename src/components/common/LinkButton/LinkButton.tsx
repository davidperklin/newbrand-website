import React from 'react'
import { LinkButtonProps } from './LinkButton.types'
import * as styles from './nb.module.scss'

const LinkButton: React.FC<LinkButtonProps> = ({
  className,
  ...props
}) => {
  return (
    <button
      className={`${styles.linkButton} ${className ? className : ''}`}
      {...props}
    >
      {props.children}
    </button>
  )
}
export default LinkButton

import React from 'react'
import { ButtonLinkProps } from './ButtonLink.types'
import { Link } from 'gatsby'

import * as styles from './nb.module.scss'
import classNames from 'classnames'

const ButtonLink: React.FC<ButtonLinkProps> = ({
  appearance = 'default',
  fullWidth = false,
  className,
  intent = 'default',
  href,
  sz = 'default',
  locale,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  ...props
}) => {
  var cx = classNames.bind(styles)
  const buttonClassNames = cx({
    button: true,
    'button_sz-def': sz === 'default',
    'button_sz-compact': sz === 'compact',
    button_def: appearance === 'default' && !props.disabled,
    button_primary: appearance === 'primary' && !props.disabled,
    'button_full-width': fullWidth,
    button_disabled: props.disabled,
    button_danger: intent === 'danger' && appearance === 'default',
  })
  const buttonStyles = `${buttonClassNames} ${className ? className : ''}`

  return (
    <Link to={href} className={buttonStyles} {...props}>
      {props.children}
    </Link>
  )
}

export default ButtonLink

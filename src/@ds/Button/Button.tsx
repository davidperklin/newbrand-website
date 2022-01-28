import React from 'react'
import { ButtonProps } from './Button.types'

import './styles.scss'
import classNames from 'classnames'
import { LoaderWheel } from '..'

const Button: React.FC<ButtonProps> = ({
  appearance = 'default',
  fullWidth = false,
  className,
  type = 'button',
  intent = 'default',
  sz = 'default',
  disabled = false,
  pill = false,
  shadow = false,
  ...props
}) => {
  const buttonClassNames = classNames({
    button: true,
    'button_sz-def': sz === 'default',
    'button_sz-compact': sz === 'compact',
    'button_sz-lg': sz === 'large',
    button_def: appearance === 'default' && !disabled,
    button_primary: appearance === 'primary' && !disabled,
    'button_full-width': fullWidth,
    button_disabled: disabled || props.loading,
    button_danger: intent === 'danger' && appearance === 'default',
    button_pill: pill === true,
    button_shadow: shadow && !disabled,
  })
  const buttonStyles = `${buttonClassNames} ${className ? className : ''}`

  return (
    <button
      className={buttonStyles}
      type={type}
      disabled={props.loading || disabled}
      {...props}
    >
      {props.loading ? (
        <div className="button__loader-wheel-container">
          <LoaderWheel appearance="dark" />
        </div>
      ) : (
        props.children
      )}
    </button>
  )
}

export default Button

import classNames from 'classnames'
import React from 'react'
import { Icon } from '..'
import { InputProps } from './Input.types'
import './styles.scss'

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      className,
      type = 'text',
      helper,
      topHelper,
      errorMessage,
      error,
      ...props
    },
    ref
  ) => {
    let inputClassNames = classNames({
      input: true,
      input_error: error,
    })
    return (
      <div
        className={`input-container ${className ? className : ''}`}
        style={props.style}
      >
        {label && (
          <label htmlFor={props.id} className="input-label">
            {label}
          </label>
        )}
        {topHelper && <div className="input-top-helper">{topHelper}</div>}
        <input
          className={inputClassNames}
          ref={ref}
          type={type}
          {...props}
        />
        {helper && errorMessage === undefined && (
          <div className="input-helper">
            <Icon name="InfoCircle" className="input-helper__icon" />
            {helper}
          </div>
        )}
        {errorMessage && (
          <div className="input-error-msg">
            <Icon
              name="ExclamationCircle"
              className="input-helper__icon"
            />
            {errorMessage}
          </div>
        )}
      </div>
    )
  }
)

export default Input

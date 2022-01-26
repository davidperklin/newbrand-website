import classNames from 'classnames'
import React from 'react'
import { Icon } from '..'
import { AlertProps } from './Alert.types'

import './styles.scss'

const Alert: React.FC<AlertProps> = ({
  className,
  intent = 'default',
  message,
  ...props
}) => {
  let alertClassNames = classNames({
    alert: true,
    alert_default: intent === 'default',
    alert_danger: intent === 'danger',
    alert_warning: intent === 'warning',
    alert_success: intent === 'success',
  })

  const AlertIcon = () => {
    switch (intent) {
      case 'default':
        return <Icon name="InfoCircle" className="alert__icon" />
      case 'danger':
        return <Icon name="ExclamationCircle" className="alert__icon" />
      case 'warning':
        return <Icon name="ExclamationTriangle" className="alert__icon" />
      case 'success':
        return <Icon name="CheckCircle" className="alert__icon" />
    }
  }

  return (
    <div
      role="alert"
      className={`${alertClassNames} ${className ? className : ''}`}
      {...props}
    >
      <div className="alert__icon-wrapper">
        <AlertIcon />
      </div>
      <div className="alert__text-wrapper">{message}</div>
    </div>
  )
}

export default Alert

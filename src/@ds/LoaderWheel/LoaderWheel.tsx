import React from 'react'
import { LoaderWheelProps } from './LoaderWheel.types'

import './styles.scss'

const LoaderWheel: React.FC<LoaderWheelProps> = ({
  height = 24,
  appearance = 'light',
  className,
}) => {
  let backgroundColor = '#fff'
  if (appearance === 'light') {
    backgroundColor = '#fff'
  } else if (appearance === 'dark') {
    backgroundColor = '#333'
  }
  return (
    <div
      className={`loader-wheel ${className ? className : ''}`}
      style={{ fontSize: `${height}px` }}
    >
      <span
        className="loader-wheel__spoke"
        style={{ backgroundColor }}
      ></span>
      <span
        className="loader-wheel__spoke"
        style={{ backgroundColor }}
      ></span>
      <span
        className="loader-wheel__spoke"
        style={{ backgroundColor }}
      ></span>
      <span
        className="loader-wheel__spoke"
        style={{ backgroundColor }}
      ></span>
      <span
        className="loader-wheel__spoke"
        style={{ backgroundColor }}
      ></span>
      <span
        className="loader-wheel__spoke"
        style={{ backgroundColor }}
      ></span>
      <span
        className="loader-wheel__spoke"
        style={{ backgroundColor }}
      ></span>
      <span
        className="loader-wheel__spoke"
        style={{ backgroundColor }}
      ></span>
      <span
        className="loader-wheel__spoke"
        style={{ backgroundColor }}
      ></span>
      <span
        className="loader-wheel__spoke"
        style={{ backgroundColor }}
      ></span>
      <span
        className="loader-wheel__spoke"
        style={{ backgroundColor }}
      ></span>
      <span
        className="loader-wheel__spoke"
        style={{ backgroundColor }}
      ></span>
    </div>
  )
}

export default LoaderWheel

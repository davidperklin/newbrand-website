import React from 'react'
import { CardProps } from './Card.types'

import './styles.scss'

const Card: React.FC<CardProps> = ({ className, ...props }) => {
  return (
    <div className={`card ${className ? className : ''}`} {...props}>
      {props.children}
    </div>
  )
}

export default Card

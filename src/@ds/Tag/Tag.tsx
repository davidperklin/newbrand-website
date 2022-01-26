import React from 'react'
import { TagProps } from './Tag.types'
import './styles.scss'

const Tag: React.FC<TagProps> = ({ className, ...props }) => {
  return (
    <span className={`tag ${className ? className : ''}`} {...props}>
      {props.content}
    </span>
  )
}

export default Tag

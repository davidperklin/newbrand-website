import React from 'react'
import { TextareaProps } from './Select.types'
import './styles.scss'

const Select: React.FC<TextareaProps> = ({ label, ...props }) => {
  return (
    <div className="select-container">
      {label && (
        <label htmlFor={props.id} className="select-label">
          {label}
        </label>
      )}
      <div className="select-wrapper">
        <select className="select" {...props}>
          {props.children}
        </select>
        <img
          src="https://nb-marketing-assets.s3.amazonaws.com/icons/chevron-down.svg"
          className="select-icon"
        />
      </div>
    </div>
  )
}

export default Select

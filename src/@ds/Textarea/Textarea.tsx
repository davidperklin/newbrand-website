import React from 'react'
import { TextareaProps } from './Textarea.types'
import './styles.scss'

const Input: React.FC<TextareaProps> = ({ label, ...props }) => {
  return (
    <div className="textarea-container">
      {label && (
        <label htmlFor={props.id} className="textarea-label">
          {label}
        </label>
      )}
      <textarea className="textarea" {...props} />
    </div>
  )
}

export default Input

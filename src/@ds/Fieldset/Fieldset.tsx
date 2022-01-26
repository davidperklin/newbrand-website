import React from 'react'
import { FieldsetProps } from './Fieldset.types'

import './styles.scss'

const Fieldset: React.FC<FieldsetProps> = ({ className, ...props }) => {
  return (
    <div className={`fieldset-container ${className ? className : ''}`}>
      <fieldset
        className="fieldset"
        name={props.name}
        disabled={props.disabled}
      >
        <legend>{props.legend}</legend>
        {props.children}
      </fieldset>
    </div>
  )
}

export default Fieldset

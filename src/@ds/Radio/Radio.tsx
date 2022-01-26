import React from 'react'
import { RadioGroupProps, RadioSubComponents } from './Radio.types'
import { RadioGroupContext } from './context'

import RadioOption from './RadioOption'

import './styles.scss'

const Radio: React.FC<RadioGroupProps> & RadioSubComponents = ({
  name,
  onChange,
  select,
  legend,
  style,
  className,
  ...props
}) => {
  return (
    <RadioGroupContext.Provider
      value={{ name, onChange, select, type: 'radio' }}
    >
      <fieldset
        {...props}
        style={style}
        className={`radio-group-fieldset ${className ? className : ''}`}
      >
        {legend && (
          <legend className="radio-fieldset-legend">{legend}</legend>
        )}

        {props.children}
      </fieldset>
    </RadioGroupContext.Provider>
  )
}

Radio.Option = RadioOption

export default Radio

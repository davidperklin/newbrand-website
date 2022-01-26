import React, { useContext, useState } from 'react'
import { RadioOptionProps } from './Radio.types'

import { RadioGroupContext } from './context'

const RadioOption: React.FC<RadioOptionProps> = ({
  labelElement,
  label,
  ...props
}) => {
  const context = useContext(RadioGroupContext)
  const [focus, setFocus] = useState(false)

  return (
    <div className="radio-option-wrapper">
      <label
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="radio-html-label"
      >
        <input
          {...context}
          {...props}
          select={false}
          className="radio__native-input"
          tabIndex={0}
        />
        <div
          className={`radio-button ${
            props.value === context.select ? 'radio-button_checked' : ''
          } ${focus ? 'radio-button_focused' : ''}`}
          aria-hidden={true}
        >
          <div className="radio-button__inner" />
        </div>
        <div className="radio-label-text">
          {labelElement ? labelElement : label}
        </div>
      </label>
    </div>
  )
}
export default RadioOption

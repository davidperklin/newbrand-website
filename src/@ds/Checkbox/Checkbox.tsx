import React, { useState } from 'react'
import { Icon } from '..'
import { Props } from './Checkbox.types'
import './styles.scss'

const Checkbox = React.forwardRef<HTMLInputElement, Props>(
  ({ label, tabIndex = 0, ...props }, ref) => {
    const [focus, setFocus] = useState(false)
    const [hover, setHover] = useState(false)
    return (
      <div
        onFocus={() => setFocus(!focus)}
        onBlur={() => setFocus(!focus)}
        className="checkbox__container"
      >
        <span
          className={`checkbox__box ${
            props.checked ? 'checkbox__box_checked' : ''
          } ${focus ? 'checkbox__box_focus' : ''}`}
        >
          <Icon name="Check" className="checkbox__checkmark" />
        </span>
        <input
          className="checkbox__native-input"
          type="checkbox"
          id={props.id}
          onChange={props.onChange}
          value={props.value}
          name={props.name}
          disabled={props.disabled}
          checked={props.checked}
          defaultChecked={props.defaultChecked}
          form={props.form}
          required={props.required}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          ref={ref}
          title={props.title}
          style={props.style}
          aria-label={label}
          tabIndex={tabIndex}
          aria-hidden={true}
        />
        <label htmlFor={props.name} className="checkbox__label">
          {label}
        </label>
      </div>
    )
  }
)
export default Checkbox

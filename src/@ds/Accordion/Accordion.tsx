import React, { useState } from 'react'
import { Icon } from '..'
import { AccordionProps } from './Accordion.types'
import './styles.scss'

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setOpen] = useState<boolean>(false)
  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? 'open' : ''}`}
        onClick={() => setOpen(!isOpen)}
        role="button"
        aria-expanded={isOpen}
      >
        {title}
        <Icon name="Plus" size={12} className="accordion-icon" />
      </div>
      <div
        className={`accordion-item ${!isOpen ? 'collapsed' : ''}`}
        aria-hidden={!isOpen}
      >
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  )
}
export default Accordion

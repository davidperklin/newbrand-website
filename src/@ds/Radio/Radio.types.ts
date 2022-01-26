import React, { ReactNode } from 'react'

export interface RadioGroupProps {
  name: string
  onChange: Function
  select: string
  legend?: string
  labelHidden?: boolean
  style?: any
  className?: string
}
export interface RadioOptionProps
  extends React.HTMLProps<HTMLInputElement> {
  labelElement?: ReactNode
}

export interface RadioSubComponents {
  Option: React.FC<RadioOptionProps>
}

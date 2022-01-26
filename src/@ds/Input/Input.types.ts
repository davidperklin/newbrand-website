import { ReactElement } from 'react'

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string
  type?: 'text' | 'email' | 'number' | 'password' | 'url' | 'date'
  error?: boolean
  errorMessage?: string
  helper?: string
  topHelper?: ReactElement
}

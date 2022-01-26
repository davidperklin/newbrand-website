import { Size } from '../types/shared'

export type Appearance = 'default' | 'primary'

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  appearance?: Appearance
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
  intent?: 'default' | 'danger'
  sz?: Size
  loading?: boolean
  pill?: boolean
}

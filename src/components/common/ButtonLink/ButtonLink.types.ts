import { Size } from 'design-system/src/types/shared'
import { LinkProps } from 'next/link'

export type Appearance = 'default' | 'primary'

export interface ButtonLinkProps
  extends React.PropsWithChildren<LinkProps> {
  appearance?: Appearance
  fullWidth?: boolean
  intent?: 'default' | 'danger'
  href: string
  className?: string
  id?: string
  disabled?: boolean
  sz?: Size
}

import * as icons from 'react-bootstrap-icons'

export type IconName = keyof typeof icons
export interface IconProps {
  name: IconName
  className?: string
  size?: number
}

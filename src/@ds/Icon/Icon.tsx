import React from 'react'
import { IconProps } from './Icon.types'
import * as icons from 'react-bootstrap-icons'

const Icon: React.FC<IconProps> = ({ name, size, className }) => {
  const IconComponent = icons[name]

  return (
    <IconComponent aria-hidden={true} className={className} size={size} />
  )
}
export default Icon

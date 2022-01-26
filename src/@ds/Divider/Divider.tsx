import React from 'react'
import { DividerProps } from './Divider.types'

import './styles.scss'

const Divider: React.FC<DividerProps> = ({ ...props }) => {
  return <div className="divider" />
}

export default Divider

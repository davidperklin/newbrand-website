import React from 'react'

import '../theme/normalize.scss'
import '../theme/base.scss'
import '../theme/root.scss'
import '../theme/theme--light.scss'
import '../theme/theme--dark.scss'

interface Props {
  children: React.ReactNode
}

const UiProvider = ({ children }: Props) => {
  return <>{children}</>
}
export default UiProvider

import React from 'react'
import { UiProvider } from '@ds'

const App = ({ children }) => {
  return <UiProvider>{children}</UiProvider>
}
export default App

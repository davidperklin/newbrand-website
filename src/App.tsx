import React from 'react'
import { UiProvider } from '@ds'
import './tailwind.css'
import { StoreProvider } from '@context/store-context'
import MainLayout from '@components/layouts/MainLayout'

const App = ({ children }) => {
  return (
    <StoreProvider>
      <UiProvider>
        <MainLayout>{children}</MainLayout>
      </UiProvider>
    </StoreProvider>
  )
}
export default App

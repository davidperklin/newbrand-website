import GlobalNav from '@components/GlobalNav'
import React from 'react'

const MainLayout = ({ children }) => {
  return (
    <>
      <GlobalNav />
      {children}
    </>
  )
}
export default MainLayout

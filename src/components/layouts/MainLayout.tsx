import GlobalNav, { MobileNav } from '@components/GlobalNav'
import React from 'react'

const MainLayout = ({ children }) => {
  return (
    <>
      <GlobalNav />
      <MobileNav />
      {children}
    </>
  )
}
export default MainLayout

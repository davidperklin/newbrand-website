import Footer from '@components/Footer'
import GlobalNav, { MobileNav } from '@components/GlobalNav'
import React from 'react'

const MainLayout = ({ children }) => {
  return (
    <>
      <GlobalNav />
      <MobileNav />
      <div style={{ minHeight: 'calc(100vh - 48px - 51px)' }}>
        {children}
      </div>

      <Footer />
    </>
  )
}
export default MainLayout

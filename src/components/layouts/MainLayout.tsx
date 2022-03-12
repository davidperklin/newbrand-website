import AnnouncementBar from '@components/AnnouncementBar'
import Footer from '@components/Footer'
import GlobalNav, { Main, MobileNav } from '@components/GlobalNav'
import Header from '@components/Header'
import React from 'react'

const MainLayout = ({ children }) => {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <MobileNav />
      <Main>
        <div
          style={{ minHeight: 'calc(100vh - var(--gn-height) - 51px)' }}
        >
          {children}
        </div>
      </Main>

      <Footer />
    </>
  )
}
export default MainLayout

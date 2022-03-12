import AnnouncementBar from '@components/AnnouncementBar'
import Footer from '@components/Footer'
import MobileNav from '@components/MobileNav'
import Header from '@components/Header'
import React from 'react'

const MainLayout = ({ children }) => {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <MobileNav />
      <main>
        <div
          style={{
            minHeight:
              'calc(100vh - var(--gn-height) - var(--footer-height) - var(--announcement-bar-height))',
          }}
        >
          {children}
        </div>
      </main>

      <Footer />
    </>
  )
}
export default MainLayout

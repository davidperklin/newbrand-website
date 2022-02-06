import { Container } from '@components/common'
import React from 'react'

const AnnouncementBar = () => {
  return (
    <div
      role="banner"
      className="bg-contrast h-10 w-full"
      style={{ color: 'white' }}
    >
      <div className="w-full h-full text-center flex items-center justify-center px-2 font-medium uppercase">
        <img
          src="https://nb-marketing-assets.s3.amazonaws.com/icons/ca-clag.svg"
          className="h-2.5 mr-2 mb-0.5"
        />
        FREE EXPRESS SHIPPING ON ALL ORDERS ACROSS CANADA
        <img
          src="https://nb-marketing-assets.s3.amazonaws.com/icons/ca-clag.svg"
          className="h-2.5 ml-2 mb-0.5"
        />
      </div>
    </div>
  )
}
export default AnnouncementBar

import React from 'react'
import { Icon } from 'src/@ds'
import './styles.scss'

const AnnouncementBar = () => {
  const items = [...Array(10)].map((e, i) => (
    <div key={`Item ${i}`} className="announcement-bar__text">
      {/* <img
        src="https://nb-marketing-assets.s3.amazonaws.com/icons/ca-clag.svg"
        className="h-2 mr-2 inline-block"
      /> */}
      <Icon name="InfoCircle" className="h-2 mr-2 inline-block" />
      SHOP CLOSED UNTIL MAY 6TH - ALL ORDERS WILL SHIP OUT MAY 6TH
      <Icon name="InfoCircle" className="h-2 ml-2  inline-block" />
      {/* <img
        src="https://nb-marketing-assets.s3.amazonaws.com/icons/ca-clag.svg"
        className="h-2 ml-2  inline-block"
      /> */}
    </div>
  ))
  return (
    <div role="banner" className="announcement-bar">
      <div className="announcement-bar__wrapper">
        <div>{items}</div>
      </div>
    </div>
  )
}
export default AnnouncementBar

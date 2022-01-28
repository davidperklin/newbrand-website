import React from 'react'

const FullScreenCentered = ({ children }) => {
  return (
    <div
      style={{ minHeight: 'calc(100vh - 52px' }}
      className="flex items-center justify-center"
    >
      {children}
    </div>
  )
}
export default FullScreenCentered

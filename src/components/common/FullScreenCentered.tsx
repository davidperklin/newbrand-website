import React from 'react'

const FullScreenCentered = ({ children }) => {
  return (
    <div
      style={{
        minHeight: 'calc(100vh - var(--gn-height) - 51px)',
        paddingBottom: 'var(--gn-height)',
      }}
      className="flex items-center justify-center"
    >
      {children}
    </div>
  )
}
export default FullScreenCentered

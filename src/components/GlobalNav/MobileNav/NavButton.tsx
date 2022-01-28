import React from 'react'

interface INavButton {
  isOpen: boolean
  onClick: () => void
}

const NavButton = ({ isOpen, onClick }: INavButton) => {
  return (
    <button className={`mobileNavButton__container`} onClick={onClick}>
      <span className={`mobileNavButton__line mobileNavButton__line_top`}>
        <span
          className={`mobileNavButton__line__inner mobileNavButton__line_top__inner`}
        ></span>
      </span>
      <span
        className={`mobileNavButton__line mobileNavButton__line_bottom`}
      >
        <span
          className={`mobileNavButton__line__inner mobileNavButton__line_bottom__inner`}
        ></span>
      </span>
    </button>
  )
}
export default NavButton

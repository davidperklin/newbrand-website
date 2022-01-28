import React, { useState } from 'react'
import Brand from './Brand'
import NavButton from './NavButton'

import './mobileNav.scss'
import CartButton from './CartButton'
import { navItems } from './nav-items'
import { Link } from 'gatsby'

const MobileNav = () => {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false)
  return (
    <>
      <header
        className={`mobileNavHeader ${navIsOpen ? 'mn_isOpen' : ''}`}
      >
        <div className={`mobileNavHeader__Inner`}>
          <Brand />
          <CartButton />
          <NavButton
            isOpen={navIsOpen}
            onClick={() => setNavIsOpen(!navIsOpen)}
          />
        </div>
      </header>
      <div
        className={`mobileNav__menuContainer ${
          navIsOpen ? 'mn_isOpen' : ''
        }`}
      >
        <nav
          aria-label="Global Site Navigation"
          className="mobileNav__list"
        >
          <ul className="mx-4">
            {navItems.map((i, index) => (
              <li
                key={index}
                className={`mobileNav__listItem ${
                  i.label === 'Clothing' ||
                  i.label === 'Your Shopping Cart'
                    ? 'pb-4 mb-4 border-b'
                    : ''
                } `}
              >
                <Link to={i.path} className="mobileNav__listItem__link">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
export default MobileNav

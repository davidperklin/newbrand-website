import React, { useState } from 'react'
import Brand from './Brand'
import NavButton from './NavButton'

import './mobileNav.scss'
import CartButton from './CartButton'
import { navItems } from './nav-items'
import { Link } from 'gatsby'

import Helmet from 'react-helmet'
import useStoreContext from '@hooks/useStoreContext'
import { Button } from 'src/@ds'

const MobileNav = () => {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false)
  const { cart, handleCheckout } = useStoreContext()
  return (
    <>
      <Helmet>
        <body data-mn-isOpen={navIsOpen} />
      </Helmet>
      <header
        className={`mobileNavHeader ${navIsOpen ? 'mn_isOpen' : ''}`}
      >
        <div className={`mobileNavHeader__Inner`}>
          <Brand closeNav={() => setNavIsOpen(false)} />
          <CartButton closeNav={() => setNavIsOpen(false)} />
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
        <nav aria-label="Global Site Navigation" className="mobileNav">
          <ul className="mobileNav__list">
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
                <Link
                  to={i.path}
                  className="mobileNav__listItem__link uppercase"
                  onClick={() => setNavIsOpen(!navIsOpen)}
                >
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
          {cart && cart.lineItems.length > 0 && (
            <div className="mx-4 mt-4 border-t pt-4">
              <Button
                onClick={handleCheckout}
                className="w-full"
                appearance="primary"
                shadow
              >
                Proceed to checkout
              </Button>
            </div>
          )}
        </nav>
      </div>
    </>
  )
}
export default MobileNav

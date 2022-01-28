import useStoreContext from '@hooks/useStoreContext'
import { Link } from 'gatsby'
import React from 'react'
import { Icon } from 'src/@ds'

interface ICartButton {
  closeNav: () => void
}

const CartButton = ({ closeNav }: ICartButton) => {
  const { cart } = useStoreContext()

  return (
    <Link
      className="mobileNavCart__container"
      to="/cart?ref=mobile_nav"
      onClick={closeNav}
    >
      {cart && cart.lineItems.length > 0 && (
        <>
          <span className="mobileNavCart__number">1</span>
          <span className="mobileNavCart__indicator" />
        </>
      )}

      <Icon name="Bag" size={16} className="mobileNavCart__icon" />
    </Link>
  )
}
export default CartButton

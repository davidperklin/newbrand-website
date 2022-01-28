import useStoreContext from '@hooks/useStoreContext'
import React from 'react'
import { Icon } from 'src/@ds'

const CartButton = () => {
  const { cart } = useStoreContext()

  return (
    <button className="mobileNavCart__container">
      {cart && cart.lineItems.length > 0 && (
        <>
          <span className="mobileNavCart__number">1</span>
          <span className="mobileNavCart__indicator" />
        </>
      )}

      <Icon name="Bag" size={16} className="mobileNavCart__icon" />
    </button>
  )
}
export default CartButton

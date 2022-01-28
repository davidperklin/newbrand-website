import { FullScreenCentered } from '@components/common'
import useStoreContext from '@hooks/useStoreContext'
import React from 'react'
import { LoaderWheel } from 'src/@ds'
import { formatPrice } from 'src/utils'
import CartItems from './CartItems'
import EmptyCart from './EmptyCart'

const Cart = () => {
  const { cart } = useStoreContext()

  if (cart === null)
    return (
      <FullScreenCentered>
        <LoaderWheel />
      </FullScreenCentered>
    )
  else if (cart.lineItems.length === 0) return <EmptyCart />
  else
    return (
      <CartItems
        items={cart.lineItems}
        subtotal={formatPrice(cart.subtotalPriceV2.amount)}
      />
    )
}
export default Cart

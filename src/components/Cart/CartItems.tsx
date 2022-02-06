import { Container } from '@components/common'
import useStoreContext from '@hooks/useStoreContext'
import { Link } from 'gatsby'
import React from 'react'
import { Button } from 'src/@ds'
import { LineItem } from 'src/api'
import CartItem from './CartItem'

interface ICartItems {
  items: LineItem[]
  subtotal: string
}

const CartItems = ({ items, subtotal }: ICartItems) => {
  const { handleCheckout } = useStoreContext()
  return (
    <Container>
      <div style={{ maxWidth: '760px' }} className="mx-auto pt-8 md:pt-12">
        <div role="heading" aria-level={1} className="mb-4 uppercase">
          Your Shopping Cart
        </div>
        <div>
          <ul>
            {items.map((i, index) => (
              <CartItem item={i} index={index} />
            ))}
          </ul>
          <div className="border border-contrast border-dotted px-4 py-3 mb-6 rounded-1">
            <div className="flex justify-between items-center flex-col md:flex-row text-copy">
              <div className="mb-2 md:mb-0 text-center md:text-left">
                Subtotal for {items.length} item
                {items.length > 1 ? 's' : ''}:{' '}
                <span className="text-danger">{subtotal}</span>.{' '}
                <br className="md:hidden" />
                <span className="font-medium">Shipping is free</span>. Tax
                calculated at checkout.
              </div>
              <div className="md:w-auto w-full">
                <Button
                  appearance="primary"
                  shadow
                  onClick={handleCheckout}
                  className={`md:w-auto w-full`}
                >
                  Proceed to checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="text-copy text-center">
            Not finished shopping? Continue browsing{' '}
            <Link to="/sneakers?ref=cart">sneakers</Link> or{' '}
            <Link to="/clothing?ref=cart">clothing</Link>.
          </div>
        </div>
      </div>
    </Container>
  )
}
export default CartItems

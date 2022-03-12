import { Container } from '@components/common'
import useStoreContext from '@hooks/useStoreContext'
import { Link } from 'gatsby'
import React from 'react'
import { Button, Icon } from 'src/@ds'
import { LineItem } from 'src/api'
import CartItem from './CartItem'

interface ICartItems {
  items: LineItem[]
  subtotal: string
}

const CartItems = ({ items, subtotal }: ICartItems) => {
  const { handleCheckout } = useStoreContext()

  // get total items -> an item may have quantity > 1
  const sumTotalItems = items.reduce(
    (partialSum, a) => partialSum + a.quantity,
    0
  )

  const MobileCheckoutComponent = () => {
    return (
      <div className="border border-contrast border-dotted px-4 py-3 mb-6 rounded-2 block lg:hidden">
        <div className="flex justify-between items-center flex-col md:flex-row text-copy">
          <div className="mb-2 md:mb-0 text-center md:text-left">
            Subtotal for {sumTotalItems} item
            {sumTotalItems > 1 ? 's' : ''}:{' '}
            <span className="text-danger">{subtotal}</span>. Shipping is
            free.
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
    )
  }

  const DesktopCheckoutComponent = () => {
    return (
      <div className="border border-contrast border-dotted px-5 py-6 mb-6 rounded-2">
        <div className="mb-3">
          <span className="flex items-start">
            <span className="flex mr-2">
              <Icon name="InfoCircle" size={14} />
            </span>
            <span>
              Ships from the Greater Toronto Area. No customs fees apply.
            </span>
          </span>
        </div>
        <div>
          <span className="flex items-start text-success">
            <span className="flex mr-2">
              <Icon name="Check2Circle" size={14} />
            </span>
            <span>
              Your order qualifies for{' '}
              <span className="font-semibold">FREE EXPRESS SHIPPING</span>{' '}
              (excludes customers outside of Canada).
            </span>
          </span>
        </div>

        <div className="mt-8">
          <div className="font-semibold text-center mb-3">
            Subtotal ({sumTotalItems} item
            {sumTotalItems > 1 ? 's' : ''}):{' '}
            <span className="text-danger">{subtotal}</span>
          </div>
          <Button
            appearance="primary"
            shadow
            onClick={handleCheckout}
            className={`w-full`}
          >
            Proceed to checkout
          </Button>
        </div>
      </div>
    )
  }

  return (
    <Container>
      {items.length > 2 && <MobileCheckoutComponent />}
      <div
        style={{ maxWidth: '1024px' }}
        className="flex flex-wrap mx-auto pt-8 md:pt-12 w-full"
      >
        <div className="lg:w-2/3 lg:pr-12 w-full">
          <div
            role="heading"
            aria-level={1}
            className="mb-2 uppercase font-semibold"
          >
            Your Shopping Cart
          </div>
          <div>
            <div className="flex justify-end border-b pb-1 mb-4 ">
              Price
            </div>
            <ul>
              {items.map((i, index) => (
                <CartItem item={i} index={index} />
              ))}
            </ul>
            <div className="hidden lg:flex justify-end font-semibold  pb-1 mb-4 -mt-2">
              <div>
                Subtotal ({sumTotalItems} item
                {sumTotalItems > 1 ? 's' : ''}):{' '}
                <span className="text-danger">{subtotal}</span>
              </div>
            </div>
            <MobileCheckoutComponent />
          </div>
        </div>

        <div className="lg:w-1/3 lg:block hidden">
          <DesktopCheckoutComponent />
        </div>
      </div>
      <div className="md:mt-20 mt-12 mb-12 block lg:hidden">
        <div className="text-copy text-center">
          Not finished shopping? Continue browsing{' '}
          <Link to="/sneakers?ref=cart">sneakers</Link> or{' '}
          <Link to="/clothing?ref=cart">clothing</Link>.
        </div>
      </div>
    </Container>
  )
}
export default CartItems

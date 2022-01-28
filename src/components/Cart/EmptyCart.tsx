import {
  Container,
  FullScreenCentered,
  LinkButton,
} from '@components/common'
import { Link } from 'gatsby'
import React from 'react'

const EmptyCart = () => {
  return (
    <Container>
      <FullScreenCentered>
        <div className="text-center">
          <div role="heading" aria-level={1}>
            Your cart is empty.
          </div>
          <div className="mt-2">
            <Link to="/all?ref=empty_cart">Shop</Link>
          </div>
        </div>
      </FullScreenCentered>
    </Container>
  )
}
export default EmptyCart

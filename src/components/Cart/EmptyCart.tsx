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
            <Link to="/sneakers?ref=empty_cart">Shop sneakers</Link> or{' '}
            <Link to="/clothing?ref=empty_cart">shop clothing</Link>.
          </div>
        </div>
      </FullScreenCentered>
    </Container>
  )
}
export default EmptyCart

import { Container, FullScreenCentered } from '@components/common'
import Head from '@components/Head'
import { Link } from 'gatsby'
import React from 'react'

const Page404 = () => {
  return (
    <>
      <Head title="Page Not Found" description="Page not found." />
      <Container>
        <FullScreenCentered>
          <div className="text-center">
            <div role="heading" aria-level={1}>
              Sorry, we couldn't find that page.
            </div>
            <div className="mt-2">
              <Link to="/sneakers?ref=empty_cart">Shop sneakers</Link> or{' '}
              <Link to="/clothing?ref=empty_cart">shop clothing</Link>.
            </div>
          </div>
        </FullScreenCentered>
      </Container>
    </>
  )
}
export default Page404

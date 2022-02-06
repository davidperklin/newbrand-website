import { Container } from '@components/common'
import Head from '@components/Head'
import React from 'react'

const AboutPage = () => {
  return (
    <>
      <Head
        title="About New Brand"
        description="Shop minimal sneakers made in Italy and made in Canada essentials clothing - hoodies, joggers and crewnecks."
      />

      <Container>
        <article
          style={{ maxWidth: '540px' }}
          className="pt-12 pb-12 mx-auto text-copy"
        >
          <div role="heading" aria-level={1} className="uppercase mb-4">
            About New Brand
          </div>
          <p>
            New Brand is a footwear and clothing company with a unique
            promise: we will <b>only</b> sell and ship to places where we
            make at least a portion of our products. I.e.{' '}
            <b>
              if we sell in Canada, we make a promise and commitment to
              make clothes in Canada
            </b>
            .
          </p>
          <p>
            If and when we expand to other countries, we will make the
            clothes we sell in that country locally - just as we are doing
            and will continue to do with the clothes we make in Canada.
          </p>
          <p>
            We're working towards a future without mindless over-production
            and seismic waste. Currently, in the footwear/clothing
            industry, cheap manufacturing in far-off locations leads to 40%
            overproduction each season. That means nearly half of the
            clothes produced across the world end up in landfills before
            they are ever worn. Countless more are discarded after few
            wears and meaningless lives in the bottom of our closets.
          </p>
          <p>
            We can stop this by creating with care. That's why our sneakers
            are made in Italy by skilled craftsman and our clothes are made
            in Canada, right around the corner from our customers.
          </p>
          <p>It starts with us.</p>
        </article>
      </Container>
    </>
  )
}
export default AboutPage

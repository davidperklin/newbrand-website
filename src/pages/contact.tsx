import { Container } from '@components/common'
import Head from '@components/Head'
import React from 'react'

const ContactPage = () => {
  return (
    <>
      <Head
        title="Contact New Brand"
        description="Shop minimal sneakers made in Italy and made in Canada essentials clothing - hoodies, joggers and crewnecks."
      />

      <Container>
        <div style={{ maxWidth: '540px' }} className="pt-12 pb-12 mx-auto">
          <article className="md:text-center text-copy">
            To contact customer support, email{' '}
            <a href="mailto:support@shopnewbrand.com">
              support@shopnewbrand.com
            </a>
            .
          </article>
        </div>
      </Container>
    </>
  )
}
export default ContactPage

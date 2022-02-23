import { Container } from '@components/common'
import Head from '@components/Head'
import React from 'react'
import { Accordion } from 'src/@ds'

const OrdersPage = () => {
  return (
    <>
      <Head
        title="Orders, Shipping and Returns"
        description="Order information, shipping and returns policies for New Brand at shopnewbrand.com."
      />

      <Container>
        <div
          style={{ maxWidth: '540px' }}
          className="pt-12 pb-12 mx-auto text-copy"
        >
          <Accordion title="Shipping Policy">
            <article>
              <p>
                <b>All orders ship free express</b> (1-3 business days,
                depending on location) <b>across Canada</b>. We are
                currently only selling to customers in Canada. When you
                place an order,{' '}
                <b>
                  you will not be charged any fees relating to customs or
                  duties
                </b>{' '}
                - orders are shipped from the Greater Toronto Area.
              </p>
              <p>
                Orders are sent out for shipping the day they are placed if
                placed before 4PM EST, and the following day if placed
                after 4PM EST. You will receive an email with tracking
                details when your order is out for shipping.
              </p>
              <p>
                If you have not received a shipping update two days after
                placing your order, please reach out to us at{' '}
                <a href="mailto:support@shopnewbrand.com">
                  support@shopnewbrand.com
                </a>
                .
              </p>
            </article>
          </Accordion>
          <Accordion title="Track Your Order">
            <article>
              <p>
                To track your order and view your order details (e.g.
                shipping status, purchase items, payment method used,
                etc.), <b>refer to your order confirmation email</b>.
              </p>
              <p>
                If you're having trouble finding this email, search your
                inbox for emails from <i>support@shopnewbrand.com</i> or
                search for an email with a subject line that looks like{' '}
                <i>Your New Brand Order #XXXX</i>.
              </p>
              <p>
                If you are unable to find your order confirmation email and
                want to know the status of your order, reach out to us at{' '}
                <a href="mailto:support@shopnewbrand.com">
                  support@shopnewbrand.com
                </a>{' '}
                and include any information that may help us find your
                order details (the email you used at checkout, the date you
                placed the order, items you purchased, etc.)
              </p>
            </article>
          </Accordion>
          <Accordion title="Returns and Exchanges">
            <article>
              <p>
                At New Brand, we stand by our products. If you are
                unsatisfied with your order, we accept returns within 14
                days of order arrival. Items must be unworn, complete and
                in like-new condition for us to accept returns and offer
                refunds or exchanges.
              </p>
              <h2>How to Return or Exchange Items</h2>
              <p>
                Email{' '}
                <a href="mailto:support@shopnewbrand.com">
                  support@shopnewbrand.com
                </a>{' '}
                with your order number and the items you wish to return or
                exchange. We will get back to you quickly with instructions
                on how to send us the item(s). We will make it fast, easy
                (and free) for you.
              </p>
              <p>
                <b>Returns:</b> include the order number and item(s) you
                wish to return in the email. We would also appreciate it if
                you include details on why you are returning. This will
                help us better understand how we can improve our service to
                you moving forward. Once we've received the item(s), and if
                the item(s) meet the conditions outlined above, you will be
                granted a full refund.
              </p>
              <p>
                <b>Exchanges:</b> to exchange your order for a different
                size, include the order number and item(s) you wish to
                exchange in the email, as well as the size you would like
                to exchange it for. If the size you need in the item(s) you
                are exchanging is out of stock, we will suggest alternative
                products or accept a full return and refund your payment.
                Once we've received the item(s), and if the item(s) meet
                the conditions outlined above, we will fulfill your
                exchange order and update you on the shipping status for
                your new item(s).
              </p>
              <p>
                We greatly value you as a customer and will work with you
                to ensure 100% customer satisfaction or your money back.
              </p>
            </article>
          </Accordion>
        </div>
      </Container>
    </>
  )
}
export default OrdersPage

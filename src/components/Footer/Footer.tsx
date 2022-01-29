import { Container } from '@components/common'
import { Link } from 'gatsby'
import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="pt-3 pb-6">
      <Container>
        <div className="flex justify-between">
          <div>&copy; {year} New Brand Inc.</div>
          <div>
            <ul className="flex items-center">
              <li className="mr-6">
                <Link
                  to="/policies"
                  className="text-contrast border-b border-dotted border-transparent hover:border-contrast hover:no-underline"
                >
                  Policies
                </Link>
              </li>
              <li>
                <Link
                  to="/policies"
                  className="text-contrast border-b border-dotted border-transparent hover:border-contrast hover:no-underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}
export default Footer

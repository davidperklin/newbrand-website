import React from 'react'
import { BreadcrumbsProps, Crumb } from './Breadcrumbs.types'

import { Link } from 'gatsby'

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ ...props }) => {
  return (
    <nav className="mb-3" aria-label="Current page breadcrumbs">
      <ol className="flex items-center uppercase overflow-hidden overflow-ellipsis font-semibold">
        {props.crumbs.map((i: Crumb, index) => (
          <li
            key={i.label}
            className="flex items-center"
            style={{ flex: '0 0 auto' }}
          >
            {i.isActive ? (
              <span>{i.label}</span>
            ) : (
              <Link
                to={i.path}
                className="text-contrast hover:no-underline border-b border-dotted border-transparent hover:border-contrast"
              >
                {i.label}
              </Link>
            )}
            {props.crumbs.length !== index + 1 && (
              <span className="mx-2.5">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs

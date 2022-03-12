import React from 'react'
import { Link } from 'gatsby'

interface IBrand {
  closeNav: () => void
}

const Brand = ({ closeNav }: IBrand) => {
  return (
    <Link
      to="/?ref=mobileNav_logo"
      className={`mobileNav__brandLink`}
      onClick={closeNav}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248.07 29">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              style={{ fill: 'var(--contrast-color)' }}
              d="M6.6,9V29H0V0H8.32L20,20V0h6.6V29H18.24ZM54,0V6H38.64v5.08H53.2v6H38.64V23H54v6H31.8V0ZM85.48,0h6.83L85.75,29H78.4L74,8.56,69.64,29H62.32L55.68,0H62.6l4,20L70.48,0h7.08l4.28,20.12ZM116.2,0c6.36,0,11.07,1.48,11.07,7.52a6.82,6.82,0,0,1-3.43,6,6.46,6.46,0,0,1,4.59,6.52c0,6.48-4.67,8.92-11.71,8.92H103.56V0Zm.24,11.6c2.36,0,3.72-1.16,3.72-3s-1.36-2.88-3.72-2.88h-6V11.6Zm.36,11.64c2.92,0,4.4-1.24,4.4-3.28s-1.48-3.28-4.4-3.28h-6.4v6.56ZM139,18.08V29h-6.84V0h11.16c7.51,0,13.15,1.76,13.15,9,0,4.28-2.36,6.72-5.68,8l7.16,12h-8L143.6,18.08Zm0-5.76h4.52c3.24,0,5.71-.56,5.71-3.28s-2.47-3.28-5.71-3.28H139ZM176.36,0l10.95,29h-7.44l-1.75-5.16h-11.2L165.2,29h-7.28L168.84,0Zm-.08,18.28-3.72-11-3.76,11ZM196.36,9V29h-6.6V0h8.32l11.64,20V0h6.59V29H208Zm51.71,5.48c0,11.08-7.47,14.52-16.95,14.52h-9.56V0h9.56C240.6,0,248.07,3.44,248.07,14.48ZM228.4,5.76V23.24h2.84c5,0,9.59-1.08,9.59-8.76s-4.55-8.72-9.59-8.72Z"
            />
          </g>
        </g>
      </svg>
    </Link>
  )
}
export default Brand
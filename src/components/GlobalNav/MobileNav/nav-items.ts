interface INavItem {
  label: string
  path: string
}

export const navItems: INavItem[] = [
  {
    label: 'Sneakers',
    path: '/sneakers',
  },
  {
    label: 'Clothing',
    path: '/clothing',
  },
  {
    label: 'Orders & Returns',
    path: '/orders',
  },
  {
    label: 'Your Shopping Cart',
    path: '/cart',
  },
  {
    label: 'About New Brand',
    path: '/about',
  },
]

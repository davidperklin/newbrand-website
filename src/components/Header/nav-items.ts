interface NavItem {
  label: string
  path: string
}

export const leftMenuItems: NavItem[] = [
  {
    label: 'Sneakers',
    path: '/sneakers',
  },
  {
    label: 'Clothing',
    path: '/clothing',
  },
]

export const rightMenuItems: NavItem[] = [
  {
    label: 'Orders & Returns',
    path: '/orders',
  },
  {
    label: 'Your Shopping Cart',
    path: '/cart',
  },
]

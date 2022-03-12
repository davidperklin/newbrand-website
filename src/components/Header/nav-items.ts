interface NavItem {
  label: string
  path: string
}

export const leftMenuItems: NavItem[] = [
  {
    label: 'Clothing',
    path: '/clothing?ref=nav',
  },
  {
    label: 'Sneakers',
    path: '/sneakers?ref=nav',
  },
]

export const rightMenuItems: NavItem[] = [
  {
    label: 'Orders & Returns',
    path: '/orders?ref=nav',
  },
  {
    label: 'Your Shopping Cart',
    path: '/cart?ref=nav',
  },
]

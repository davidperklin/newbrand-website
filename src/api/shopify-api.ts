type LineItem = {
  customAttributes: string
  discountAllocations: string
  id: string
  quantity: number
  title: string
}

export interface ShopifyClientResponse {
  completedAt: string | null
  createdAt: string
  currencyCode: string
  customAttributes: []
  discountApplications: []
  email: string | null
  id: string
  lineItems: LineItem[]
  lineItemsSubtotalPrice: { amount: string; currencyCode: string }[]
  note: string | null
  order: any
  orderStatusUrl: string | null
  paymentDue: string
  paymentDueV2: { amount: string; currencyCode: string }[]
  ready: boolean
  requiresShipping: boolean
  shippingAddress: any
  shippingLine: any
  subtotalPrice: string
  subtotalPriceV2: string
  taxExempt: boolean
  taxesIncluded: false
  totalPrice: string
  totalPriceV2: { amount: string; currencyCode: string }[]
  totalTax: string
  totalTaxV2: { amount: string; currencyCode: string }[]
  updatedAt: string
  webUrl: string
}

// shortened version of client response --> only what we need
export interface Cart {
  id: string
  webUrl: string
  lineItems: LineItem[]
  totalPrice: string
  currencyCode: string
  completedAt: boolean
}

export interface Product {
  id: string
  title: string
  description: string
  descriptionHtml: string
  handle: string
  priceRangeV2: {
    maxVariantPrice: Price
    minVariantPrice: Price
  }
}
type Price = {
  amount: string
  currencyCode: string
}

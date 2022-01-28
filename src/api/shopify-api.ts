export type LineItem = {
  customAttributes: string
  discountAllocations: string
  id: string
  quantity: number
  title: string
  variant: {
    available: boolean
    compareAtPrice: any
    currencyCode: string
    compareAtPriceV2: any
    id: string
    image: {
      altText: string
      height: number
      id: string
      src: string
      width: number
    }
    price: string
    priceV2: {
      amount: string
      currencyCode: string
    }
    product: {
      handle: string
      id: string
    }
    selectedOptions: {
      name: string
      value: string
    }[]
    title: string
  }
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
  storefrontId: string
  title: string
  description: string
  descriptionHtml: string
  handle: string
  priceRangeV2: {
    maxVariantPrice: Price
    minVariantPrice: Price
  }
  images: {
    gatsbyImageData: any
  }[]
  productType: 'Footwear' | 'Clothing'
  totalInventory: number
  variants: ProductVariant[]
  options: ProductOption[]
}
type Price = {
  amount: string
  currencyCode: string
}
export type ProductVariant = {
  id: string
  storefrontId: string // this is the id used for lineItems in cart
  availableForSale: boolean
  displayName: string
  selectedOptions: {
    name: string
    value: string
  }[]
  title: string
  inventoryQuantity: number
  priceRangeV2: {
    maxVariantPrice: Price
    minVariantPrice: Price
  }
  product: {
    handle: string
    id: string
  }
}
export type ProductOption = {
  id: string
  name: string
  position: number
  values: []
}

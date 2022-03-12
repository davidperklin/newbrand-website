import React, { useState, createContext, useEffect, useMemo } from 'react'
import fetch from 'isomorphic-fetch'
import Client from 'shopify-buy'

const client = Client.buildClient(
  {
    domain: process.env.GATSBY_SHOPIFY_STORE_URL,
    storefrontAccessToken: process.env.GATSBY_STOREFRONT_ACCESS_TOKEN,
  },
  // @ts-ignore:next-line
  fetch
)

export interface IStoreContext {
  loadingAddToCart: boolean
  loadingUpdateLineItem: boolean
  loadingRemoveLineItem: boolean
  addVariantToCart: (variantId: string, quantity: number) => Promise<void>
  removeLineItem: (lineItemId: string) => Promise<void>
  updateLineItem: (lineItemId: string, quantity: number) => Promise<void>
  cart: any
  client: any
  handleCheckout: () => void
}

export const StoreContext = createContext<any>(null)

const isBrowser = typeof window !== `undefined`
const localStorageKey = `shopify_cart_id`

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState<any>(null)
  const [loadingAddToCart, setLoadingAddToCart] = useState(false)
  const [loadingUpdateLineItem, setLoadingUpdateLineItem] = useState(false)
  const [loadingRemoveLineItem, setLoadingRemoveLineItem] = useState(false)

  // Save checkout/cart to local storage
  const setCartItem = (cart) => {
    if (isBrowser) {
      localStorage.setItem(localStorageKey, cart.id)
    }

    setCart(cart)
  }
  useEffect(() => {
    const initializeCart = async () => {
      const existingCartId = isBrowser
        ? localStorage.getItem(localStorageKey)
        : null

      // If checkout exists in local storage, fetch it
      if (existingCartId && existingCartId !== `null`) {
        try {
          const existingCart = await client.checkout.fetch(existingCartId)
          if (!existingCart.completedAt) {
            setCartItem(existingCart)
            return
          }
        } catch (e) {
          localStorage.setItem(localStorageKey, '')
        }
      }

      // If no checkout exists, create new
      const newCart = await client.checkout.create()
      setCartItem(newCart)
    }

    initializeCart()
  }, [])

  // Shopify cart/checkout functions
  const addVariantToCart = async (variantId: string, quantity: number) => {
    setLoadingAddToCart(true)
    try {
      const res = await client.checkout.addLineItems(cart!.id, [
        {
          variantId,
          quantity,
        },
      ])
      setCart(res)
    } catch (error) {
      console.log({ error })
    } finally {
      setLoadingAddToCart(false)
    }
  }

  const removeLineItem = async (lineItemId: string) => {
    setLoadingRemoveLineItem(true)
    try {
      const res = await client.checkout.removeLineItems(cart!.id, [
        lineItemId,
      ])
      setCart(res)
    } catch (error) {
      console.log({ error })
    } finally {
      setLoadingRemoveLineItem(false)
    }
  }

  const updateLineItem = async (lineItemId: string, quantity: number) => {
    try {
      const res = await client.checkout.updateLineItems(cart!.id, [
        {
          id: lineItemId,
          quantity,
        },
      ])
      setCart(res)
    } catch (error) {
      console.log({ error })
    } finally {
      setLoadingUpdateLineItem(false)
    }
  }

  const handleCheckout = () => {
    window.location.href = cart.webUrl
  }

  const storeValue = useMemo(
    () => ({
      cart,
      addVariantToCart,
      removeLineItem,
      updateLineItem,
      loadingAddToCart,
      loadingRemoveLineItem,
      loadingUpdateLineItem,
      client,
      handleCheckout,
    }),
    [cart, loadingAddToCart, loadingUpdateLineItem, loadingRemoveLineItem]
  )

  return (
    <StoreContext.Provider value={storeValue}>
      {children}
    </StoreContext.Provider>
  )
}

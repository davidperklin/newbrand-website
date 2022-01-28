import { useCallback, useEffect, useState } from 'react'
import { Product, ProductOption, ProductVariant } from 'src/api'
import useStoreContext from './useStoreContext'
import isEqual from 'lodash.isequal'
import { formatPrice } from 'src/utils'

interface ProductHookProps {
  product: Product
}
interface ProductHook {
  options: ProductOption[]
  variants: ProductVariant[]
  price: string
  title: string
  descriptionHtml: string
  handleOptionChange: (index: number, event: any) => void
  productVariant: ProductVariant
  available: boolean
  hasVariants: boolean
  quantity: number
  hasSelected: boolean
}

const useProduct = ({ product }: ProductHookProps): ProductHook => {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRangeV2,
    title,
    descriptionHtml,
  } = product
  const { client } = useStoreContext()

  const [variant, setVariant] = useState({ ...initialVariant })
  const [quantity, setQuantity] = useState(1)
  const [hasSelected, setHasSelected] = useState<boolean>(false)

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant

  const [available, setAvailable] = useState(
    productVariant.availableForSale
  )

  const checkAvailablity = useCallback(
    (productId) => {
      client.product.fetch(productId).then((fetchedProduct) => {
        const result =
          fetchedProduct?.variants.filter(
            (variant) => variant.id === productVariant.storefrontId
          ) ?? []

        if (result.length > 0) {
          setAvailable(result[0].available)
        }
      })
    },
    [productVariant.storefrontId, client.product]
  )

  const handleOptionChange = (index: number, event: any) => {
    const value = event.target.value

    if (value === '') {
      return
    }

    const currentOptions = [...variant.selectedOptions]

    currentOptions[index] = {
      ...currentOptions[index],
      value,
    }

    const selectedVariant = variants.find((variant) => {
      return isEqual(currentOptions, variant.selectedOptions)
    })

    setVariant({ ...selectedVariant! })
    setHasSelected(true)
  }

  useEffect(() => {
    checkAvailablity(product.storefrontId)
  }, [productVariant.storefrontId, checkAvailablity, product.storefrontId])

  const price = formatPrice(priceRangeV2.minVariantPrice.amount)
  const hasVariants = variants.length > 1

  return {
    options,
    variants,
    productVariant,
    title,
    descriptionHtml,
    price,
    hasVariants,
    handleOptionChange,
    available,
    quantity,
    hasSelected,
  }
}
export default useProduct

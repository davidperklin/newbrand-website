import { useMemo, useState } from 'react'
import { LineItem } from 'src/api'
import { getShopifyImage } from 'gatsby-source-shopify'
import useStoreContext from './useStoreContext'

interface LineItemHookProps {
  item: LineItem
}

const useLineItem = ({ item }: LineItemHookProps) => {
  const { removeLineItem } = useStoreContext()
  const [isRemovingItem, setRemovingItem] = useState<boolean>(false)
  const variantImage = {
    ...item.variant.image,
    originalSrc: item.variant.image.src,
  }
  const image = useMemo(
    () =>
      getShopifyImage({
        image: variantImage,
        layout: 'constrained',
        width: 120,
        height: 120,
      }),
    [variantImage.src]
  )

  async function handleRemoveItem() {
    setRemovingItem(true)
    try {
      await removeLineItem(item.id)
    } catch (error) {
      console.log({ error })
    } finally {
      setRemovingItem(false)
    }
  }

  return {
    image,
    handleRemoveItem,
    isRemovingItem,
  }
}
export default useLineItem

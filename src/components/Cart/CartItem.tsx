import useLineItem from '@hooks/useLineItem'
import useStoreContext from '@hooks/useStoreContext'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { LineItem } from 'src/api'
import { PRODUCT_PAGE_BASE_SLUG } from 'src/constants'
import { formatPrice } from 'src/utils'

interface ICartItem {
  item: LineItem
  index: number
}

const CartItem = ({ item, index }: ICartItem) => {
  const { image, handleRemoveItem, isRemovingItem } = useLineItem({ item })
  const { loadingRemoveLineItem } = useStoreContext()

  return (
    <li
      key={index}
      className={`flex justify-between mb-4 pb-4 border-b ${
        isRemovingItem ? 'opacity-50' : ''
      }`}
    >
      <div className="flex">
        <div className="mr-4">
          <Link
            to={`/${PRODUCT_PAGE_BASE_SLUG}/${item.variant.product.handle}?ref=cart_item`}
          >
            <GatsbyImage
              image={image}
              objectFit="contain"
              alt={item.title}
            />
          </Link>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <Link
              to={`/${PRODUCT_PAGE_BASE_SLUG}/${item.variant.product.handle}?ref=cart_item`}
              className="text-contrast hover:no-underline"
            >
              <div className="">{item.title}</div>
            </Link>

            <div className="text-light">{item.variant.title}</div>
          </div>
          <div>
            <button
              role="button"
              onClick={handleRemoveItem}
              className={`hover:underline cursor-pointer inline-block ${
                loadingRemoveLineItem ? 'text-light' : ''
              }`}
              disabled={isRemovingItem}
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="text-right">
          {formatPrice(item.variant.priceV2.amount)}
        </div>
      </div>
    </li>
  )
}
export default CartItem

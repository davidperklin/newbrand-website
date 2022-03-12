import useProduct from '@hooks/useProduct'
import useStoreContext from '@hooks/useStoreContext'
import React from 'react'
import { Button, Icon, Select } from 'src/@ds'
import { FormSubmitEvent, Product } from 'src/api'
import * as styles from './nb.module.scss'
import { navigate } from 'gatsby'

interface IProductForm {
  product: Product
}

const ProductForm = ({ product }: IProductForm) => {
  const {
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
  } = useProduct({ product })
  const { addVariantToCart, loadingAddToCart } = useStoreContext()

  async function handleSubmit(e: FormSubmitEvent) {
    e.preventDefault()
    try {
      await addVariantToCart(productVariant.storefrontId, quantity)
      navigate(`/cart?ref=add_to_cart&pid=${productVariant.id}`)
    } catch (error) {
      console.log({ error })
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      id="product-form"
      name="product_form"
      className="flex flex-col mb-8"
      style={{ minHeight: 'calc(100vh - var(--gn-height))' }}
    >
      <div className="flex justify-between mb-2 order-1 mt-4 lg:mt-0">
        <div role="heading" aria-level={1} className="uppercase font-bold">
          {product.title}
        </div>
        <div className="uppercase font-bold">{price}</div>
      </div>

      <fieldset className="mb-2 order-2 text-copy">
        {hasVariants &&
          options.map(({ id, name, values }, index) => (
            <div key={id}>
              <Select
                aria-label="Variants"
                onChange={(event) => handleOptionChange(index, event)}
              >
                <option
                  value=""
                  disabled={hasSelected}
                >{`-- Select ${name} -- `}</option>
                {values.map((value) => (
                  <option value={value} key={`${name}-${value}`}>
                    {value}
                  </option>
                ))}
              </Select>
            </div>
          ))}
        <div className="text-light mt-0.5 italic">
          {product.productType === 'Clothing'
            ? 'Fits true to size'
            : 'If you are a half-size, we recommend sizing up'}
        </div>
        {hasSelected && available && (
          <span className="flex items-start text-success mt-1.5">
            <span className="flex mr-2">
              <Icon name="Check2Circle" size={14} className="mt-0.5" />
            </span>
            <span>
              <span className="font-medium">In stock</span>, ships free in
              1-2 business days
            </span>
          </span>
        )}
        <div className="lg:hidden block my-4">
          <Button
            type="submit"
            appearance="primary"
            disabled={!hasSelected}
            className="w-full"
            shadow
            loading={loadingAddToCart}
          >
            Add to cart
          </Button>
          <div className="mt-1.5">
            {!hasSelected ? (
              <div className="text-center">
                To buy,{' '}
                <span className="font-medium text-mini">
                  select your size
                </span>
              </div>
            ) : (
              <div className="flex items-center justify-center flex-wrap text-center mb-1.5">
                <Icon name="ShieldLock" />{' '}
                <span className="ml-1.5">
                  Secure payments. You can trust New Brand.
                </span>
              </div>
            )}
          </div>
        </div>
      </fieldset>
      <div
        className={`${styles.descriptionHtml} text-copy mb-6 order-3`}
        dangerouslySetInnerHTML={{ __html: descriptionHtml }}
      />

      <fieldset className="border border-contrast border-dotted rounded-2 px-5 py-4 order-4">
        <ul className="flex flex-wrap lg:mb-4 text-copy">
          <li className="flex items-start w-full pb-2.5">
            <span className="block mt-0.5 mr-2">
              <Icon name="Box" size={14} />
            </span>
            <div>
              <span>Shipping:</span>
              <ul className="mt-0.5">
                <li>
                  <span>Free, express shipping</span> across Canada
                </li>
                <li>Ships in 1-2 business days</li>
              </ul>
            </div>
          </li>
          <li className="flex items-start w-full">
            <span className="block mt-0.5 mr-2">
              <Icon name="ArrowLeftSquare" size={14} />
            </span>
            <div>
              <span>Returns:</span>
              <ul className="mt-0.5">
                <li>Free, easy returns</li>
                <li>14 days from order arrival</li>
              </ul>
            </div>
          </li>
        </ul>

        <div className="mt-5 lg:mt-0 block">
          <Button
            type="submit"
            appearance="primary"
            disabled={!hasSelected}
            className="w-full"
            shadow
            loading={loadingAddToCart}
          >
            Add to cart
          </Button>
          <div className="mt-1.5">
            {!hasSelected ? (
              <div className="text-center">
                To buy,{' '}
                <span className="font-medium">select your size</span>
              </div>
            ) : (
              <div className="flex items-center justify-center flex-wrap text-center mb-1.5">
                <Icon name="ShieldLock" />{' '}
                <span className="ml-1.5">
                  Secure payments. You can trust New Brand.
                </span>
              </div>
            )}
          </div>
        </div>
      </fieldset>
    </form>
  )
}
export default ProductForm

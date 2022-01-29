const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allShopifyProduct(sort: { fields: [title] }) {
        nodes {
          title
          variants {
            availableForSale
            displayName
            selectedOptions {
              name
              value
            }
            title
            inventoryQuantity
            id
            storefrontId
          }
          id
          storefrontId
          shopifyId
          productType
          handle
          priceRangeV2 {
            minVariantPrice {
              amount
            }
          }
          images {
            gatsbyImageData
            originalSrc
          }
          descriptionHtml
          description
          options {
            name
            position
            values
            id
          }
        }
      }
    }
  `)
  result.data.allShopifyProduct.nodes.forEach((node) => {
    createPage({
      path: `/p/${node.handle}`,
      component: path.resolve(`./src/components/templates/product.tsx`),
      context: {
        product: node,
      },
    })
  })
}

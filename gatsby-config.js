require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
const path = require(`path`)

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.shopnewbrand.com`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-shopify',
      options: {
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@ds': path.join(__dirname, 'src/@ds'),
        '@api': path.join(__dirname, 'src/api'),
        '@constants': path.join(__dirname, 'src/constants'),
        '@hooks': path.join(__dirname, 'src/hooks'),
        '@components': path.join(__dirname, 'src/components'),
        '@context': path.join(__dirname, 'src/context'),
        src: path.join(__dirname, 'src'),
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve('./src/App.tsx'),
      },
    },
    `gatsby-plugin-sass`,
    'gatsby-plugin-postcss',
  ],
}

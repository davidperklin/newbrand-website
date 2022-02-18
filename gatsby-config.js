require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
const path = require(`path`)

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.shopnewbrand.com`,
    url: `https://www.shopnewbrand.com`,
    title: 'New Brand',
    description: 'Sneakers made in Italy. Clothing made in Canada.',
    author: 'New Brand Inc.',
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
        '@common': path.join(__dirname, 'src/components/common'),
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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `New Brand Store`,
        short_name: `New Brand`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: 'src/assets/images/fav.png',
      },
    },
    `gatsby-plugin-sass`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-TXT3V9KZ21'],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },
  ],
}

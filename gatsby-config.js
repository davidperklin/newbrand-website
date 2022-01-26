const path = require(`path`)

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.shopnewbrand.com`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@ds': path.join(__dirname, 'src/@ds'),
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

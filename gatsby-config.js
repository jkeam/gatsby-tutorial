module.exports = {
  siteMetadata: {
    title: 'Great Gatsby'
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-typography',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    }
  ],
}

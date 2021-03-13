module.exports = {
  siteMetadata: {
    title: 'Hans ter Horst',
    siteUrl: 'https://www.hansterhorst.com',
    author: 'Hans ter Horst',
    description:
      '“Hoi, mijn naam is Hans ter Horst, Web Developer • Web Designer woonachtig in Delden. Ik bewonder schoon en simpel design met oog voor detail en vindt het geweldig om ideeën te vertalen naar code. Dit moet er niet alleen gaaf uitzien, maar moet ook door anderen met plezier gebruikt worden.”',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdowm',
        path: './src/assets/markdown/',
      },
      __key: 'markdown',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};

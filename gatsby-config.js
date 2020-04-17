module.exports = {
  siteMetadata: {
    title: 'Frontend Masters Gatsby Workshop',
    description: 'A site we built together during a course',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
  ],
};

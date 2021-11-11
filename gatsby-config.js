module.exports = {
  siteMetadata: {
    siteTitle: `UIdeck Docs`,
    defaultTitle: `UIdeck Docs`,
    siteTitleShort: `UIdeck Docs`,
    siteDescription: `UIdeck template documentation for Bootstrap and Tailwind CSS Templates`,
    siteUrl: `https://docs.uideck.com`,
    siteAuthor: `@uideck`,
    siteImage: `/banner.jpg`,
    siteLanguage: `en`,
    themeColor: `#4f46e5`,
    basePath: `/`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `@uideck/docs-uideck`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        repositoryUrl: `https://github.com/uideck/docs-uideck`,
        baseDir: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `UIdeck Docs`,
        short_name: `UIdeck Docs`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.jpeg`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://docs.uideck.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};

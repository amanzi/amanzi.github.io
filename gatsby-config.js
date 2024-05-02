require(`dotenv`).config()

module.exports = {
  pathPrefix: "/master",
  siteMetadata: {
    title: `Amanzi-ATS`,
    author: `Daniel Livingston, David Moulton`,
    description: `Landing page for Amanzi-ATS`,
    siteUrl: `https://amanzi.github.io`,
    logo: `logo.png`,
    copyright: `© 2020 Amanzi-ATS Contributing National Labs (LANL, LBNL, ORNL, PNNL)`,
    headerLinks: [
      {
        title: `Home`,
        path: `/`,
      },
      {
        title: `About`,
        path: `/about`,
      },
      {
        title: `Gallery`,
        path: `/gallery`,
      },
      {
        title: `References`,
        path: `/references`,
      },
      {
        title: `Downloads`,
        path: `/downloads`,
      },
    ],
    footerLinks: [
      {
        title: `GitHub`,
        path: `https://github.com/amanzi`,
      },
    ],
  },
  plugins: [
    `gatsby-theme-flex`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-typescript`,
    `gatsby-image`,
    `gatsby-plugin-sass`,
    `gatsby`,
    {
      resolve: "gatsby-plugin-mdx",
      plugins: [`gatsby-remark-images`, `gatsby-remark-videos`],
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/assets/images`,
        name: `${__dirname}/assets/images`,
      },
    },
  ],
}

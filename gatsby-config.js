require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    pathPrefix: "/master",
    title: `Amanzi-ATS`,
    author: ` David Moulton`,
    description: `Landing page for Amanzi-ATS`,
    siteUrl: 'https://amanzi.github.io',
    logo: `logo.png`,
    copyright: `© 2024 Amanzi-ATS Contributing National Labs (LANL, LBNL, ORNL, PNNL)`,
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
    plugins: [`gatsby-theme-flex`,],
  }
